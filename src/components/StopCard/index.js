import React from 'react';
import { View } from 'react-native';
import StopNameHeader from '../StopNameHeader';
import StopRoutesList from '../StopRoutesList';

const StopCard = ({ details }) => {
  const wrapper = {
    padding: 0,
    marginBottom: 50,
  };

  return (
    <View style={wrapper}>
      <StopNameHeader name={details.crossStreets} details={details} />
      <StopRoutesList routes={details.routes} />
    </View>
  )
};

export default StopCard;