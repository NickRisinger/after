'use client';
import React from 'react';
import ReactDOM from 'react-dom';
import type { LngLat } from '@yandex/ymaps3-types';

const ymaps3Reactify = await ymaps3.import('@yandex/ymaps3-reactify');
const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);
const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } =
  reactify.module(ymaps3);

export default function ObjectsMap({
  coordinates,
}: {
  coordinates: {
    lat: number;
    lng: number;
  };
}) {
  if (!coordinates) return null;

  const location = { center: [coordinates.lng, coordinates.lat], zoom: 13 };

  return (
    <YMap location={location} theme="dark" className="min-h-screen">
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />

      <YMapMarker coordinates={location.center as LngLat} zIndex={1}>
        <div className="relative h-[56px] w-[46px]">test</div>
      </YMapMarker>
    </YMap>
  );
}
