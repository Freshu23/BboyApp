import dynamic from 'next/dynamic';

const DetailsMap = dynamic(import('./DetailsMapComponent'), {
  ssr: false,
});

export default DetailsMap;
