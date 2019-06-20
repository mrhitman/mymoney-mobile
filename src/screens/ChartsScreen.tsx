import { Container, Content } from 'native-base';
import React, { Component } from 'react';
import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export class ChartsScreen extends Component {
  render() {
    const data = [
      {
        name: 'Seoul',
        population: 34,
        color: 'rgba(131, 167, 234, 1)',
      },
      {
        name: 'Toronto',
        population: 23,
        color: '#F00',
      },
      {
        name: 'Beijing',
        population: 12,
        color: 'red',
      },
      {
        name: 'New York',
        population: 9,
        color: '#fcfcfc',
      },
      {
        name: 'Moscow',
        population: 45,
        color: 'rgb(0, 0, 255)',
      }
    ];
    const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientTo: '#08130D',
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2
    };
    return (
      <Container style={styles.content}>
        <StatusBar barStyle="light-content" animated />
        <Content padder>
          <PieChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FEFEFE'
  }
});

export default ChartsScreen;
