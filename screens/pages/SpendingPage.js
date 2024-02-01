import React from 'react';
import { View } from 'react-native';
import Widget from '../../widgets/ChartWidget';

export default function SpendingPage() {
  const AllTimeGraphDATA = [
    { day: 'Week 1', steps: 10000 },
    { day: 'Week 2', steps: 10000 },
    { day: 'Week 3', steps: 10000 },
    { day: 'Week 4', steps: 10000 },
  ];

  return (
    <View>
      {/* Render the Widget component with your data */}
      <Widget data={AllTimeGraphDATA} />
    </View>
  );
}
