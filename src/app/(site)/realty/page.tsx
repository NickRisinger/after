'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('~/components/ObjectsMap'), {
  ssr: false,
});

export default function Page() {
  return <Map coordinates={{ lat: 57.767918, lng: 40.926894 }} />;
}
