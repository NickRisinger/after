'use client';
import React, { useCallback, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom';
import type { Feature, LngLat } from '@yandex/ymaps3-types';

const ymaps3Reactify = await ymaps3.import('@yandex/ymaps3-reactify');
const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);
const {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapMarker,
  YMapLayer,
  YMapFeatureDataSource,
} = reactify.module(ymaps3);

const { YMapDefaultMarker } = reactify.module(
  await ymaps3.import('@yandex/ymaps3-markers@0.0.1'),
);

const { YMapClusterer, clusterByGrid } = reactify.module(
  await ymaps3.import('@yandex/ymaps3-clusterer@0.0.1'),
);

export default function ObjectsMap({
  coordinates,
}: {
  coordinates: {
    lat: number;
    lng: number;
  };
}) {
  const mapRef = useRef(null);

  const location = { center: [coordinates.lng, coordinates.lat], zoom: 13 };

  const coords = [
    [37.64, 55.76],
    [37.63, 55.7],
    [37.43, 55.69],
    [37.47, 55.68],
    [38.53, 58.6],
    [37.59, 55.71],
    [37.5, 55.63],
    [37.52, 55.57],
    [37.52, 58.57],
    [40.52, 58.57],
  ];

  const points = coords.map((lnglat, i) => ({
    type: 'Feature',
    id: i,
    geometry: { coordinates: lnglat },
    properties: { name: 'Point of issue of orders' },
  }));

  const gridSizedMethod = useMemo(() => clusterByGrid({ gridSize: 64 }), []);

  const marker = useCallback(
    (feature) => (
      <YMapMarker coordinates={feature.geometry.coordinates} source="my-source">
        <svg
          className="-translate-x-1/2 -translate-y-1/2"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="12" height="12" rx="6" fill="#E2061A" />
        </svg>
      </YMapMarker>
    ),
    [],
  );

  const cluster = useCallback(
    (coordinates, features) => (
      <YMapMarker coordinates={coordinates} source={'my-source'}>
        <div className="circle">
          <div className="circle-content">
            <span className="circle-text">{features.length}</span>
          </div>
        </div>
      </YMapMarker>
    ),
    [],
  );

  return (
    <YMap location={location} ref={mapRef} className="min-h-screen">
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />
      <YMapFeatureDataSource id="my-source" />
      <YMapLayer type="markers" source="my-source" zIndex={1800} />

      {/* <YMapDefaultMarker coordinates={location.center as LngLat} zIndex={1} /> */}

      <YMapClusterer
        marker={marker}
        cluster={cluster}
        method={gridSizedMethod}
        features={points}
      />

      <YMapMarker coordinates={location.center as LngLat}>
        <svg
          className="-translate-x-1/2 -translate-y-1/2"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="18" cy="18" r="15" stroke="#1D4ED8" stroke-width="6" />
          <circle cx="18" cy="18" r="7" fill="#1D4ED8" />
        </svg>
      </YMapMarker>
    </YMap>
  );
}
