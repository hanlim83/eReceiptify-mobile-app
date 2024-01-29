import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import ModalDropdown from 'react-native-modal-dropdown';

const Widget = ({ data }) => {
  const [selectedMonth, setSelectedMonth] = useState('January'); // Initial selected month

  if (!Array.isArray(data)) {
    // Handle the case where data is not an array
    return <Text>Invalid data format</Text>;
  }

  const formattedData = {
    labels: data.map(item => item.day),
    datasets: [
      {
        data: data.map(item => item.steps),
      },
    ],
  };

  const chartConfig = {
    backgroundStyle: { backgroundColor: 'black' },
    color: () => `#399DDC`,
    fillShadowGradientOpacity: 1,
    barPercentage: 0.45,
    barRadius: 10,
    propsForBackgroundLines: {
      strokeWidth: 0,
    },
    labelColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
    height: 5000,
    formatYLabel: () => '',
  };

  const widgetStyle = {
    width: 350,
    height: 379,
    position: 'absolute',
    left: '50%', // Center horizontally
    top: '50%', // Center vertically
    marginLeft: -175, // Adjust half of the width to center the widget
    marginTop: 50, // Adjust the marginTop value to bring the widget down
    borderRadius: 15,
    backgroundColor: 'black', // Set the background color to black
  };

  const headerStyle = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
  };

  const totalSpendStyle = {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Set text color to white
  };

  const dropdownStyle = {
    height: 40,
    backgroundColor: 'black',
    borderColor: 'black',
    width: 350,
  };

  const dropdownTextStyle = {
    color: 'white', // Set the font color to white
  };
  
  const dropdownTextHighlightStyle = {
    color: 'black', // Set the highlighted font color to black
  };

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <View style={widgetStyle}>
      <View style={headerStyle}>
        <Text style={totalSpendStyle}>Total Spend</Text>
        <Text style={totalSpendStyle}>$500</Text>
      </View>
      <ModalDropdown
        options={months}
        defaultValue={selectedMonth}
        onSelect={(index, value) => setSelectedMonth(value)}
        style={dropdownStyle}
        textStyle={dropdownTextStyle}
        dropdownStyle={{ backgroundColor: 'white' }}
        dropdownTextStyle={dropdownTextHighlightStyle}
        />
      <BarChart
        data={formattedData}
        width={350}
        height={300}
        chartConfig={chartConfig}
        showBarTops={false}
        yAxisLabel={''}
        yAxisSuffix={''}
        fromZero={true}
        segments={2}
        style={{ marginTop: 10 }}
      />
    </View>
  );
};

export default Widget;
