import React from 'react'
import PodsBannerCTA from './PodsBannerCTA'
import PodsListing from './PodsListing'
import SearchField from '../Homeparts/parts/SearchField';
import { LocationProvider } from './LocationContext';

const Maindiscovery = () => {
  return (
    <LocationProvider>
      <SearchField />
      <PodsBannerCTA />
      <PodsListing />
    </LocationProvider>
  );
}

export default Maindiscovery