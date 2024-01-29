import React from 'react';
import { View } from 'react-native';
import Widget from '../../widgets/ChartWidget';

export default function SpendingPage() {
  const AllTimeGraphDATA = [
    { day: 'S', steps: 10000 },
    { day: 'M', steps: 10000 },
    { day: 'T', steps: 10000 },
    { day: 'W', steps: 10000 },
    { day: 'T', steps: 10000 },
    { day: 'F', steps: 10000 },
    { day: 'S', steps: 10000 },
  ];

  return (
    <View>
      {/* Render the Widget component with your data */}
      <Widget data={AllTimeGraphDATA} />
    </View>
  );
}
