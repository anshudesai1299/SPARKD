/*import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { DailySpeedCons } from "C:/Users/BEPROJECT/SPARKS/DailySpeedCons.json" ;
import {
LineChart,
BarChart,
PieChart,
ProgressChart,
ContributionGraph,
StackedBarChart,
} from 'react-native-chart-kit';

export default class Linegraph extends React.Component
{

  render()
  {
    return(

      <ScrollView horizontal={true}

showsHorizontalScrollIndicator={true}
>
<View style={{width:200}}>
{/*It is an Example of LineChart}
<Text
style={{
textAlign: 'center', fontSize: 30,
//padding: 10,
//marginTop: 5,
}}>
Line Chart
</Text>


<LineChart data={{
//labels:[DailySpeedCons.map((data1,key)=>{return (
  <div key={key}>
    {data1.TDate }
  </div>)})]
  //labels: [DailySpeedCons.map(item => item.TDate.substring(0,10))],
  //labels: DailySpeedCons[0].TDate,
  labels:[ '1-Jan-16'
,'2-Jan-16'
,'3-Jan-16'
,'4-Jan-16'
,'5-Jan-16'
,'6-Jan-16'
,'7-Jan-16'
,'8-Jan-16'
,'13-Jan-16'
,'14-Jan-16'
,'15-Jan-16'
,'16-Jan-16'
,'17-Jan-16'
,'18-Jan-16'
,'19-Jan-16'
,'23-Jan-16'
,'24-Jan-16'
,'25-Jan-16'
,'26-Jan-16'
,'27-Jan-16'
,'28-Jan-16'
,'29-Jan-16'
,'30-Jan-16'
],

datasets: [
{
data: [12.46,11.62,9.83,11.71,11.74,11.13,11.88,11,11.94,12,12.92,11.17,11,11.71,12.03,12.39,11.19,11.42,11.25,11.13,11.79,12.63,10.63],
//data : [DailySpeedCons.map(item => item.CPSpeed)],
strokeWidth: 4,
stroke:'#8800cc',
},
{
  data : [DailySpeedCons.map(item => item.AvgSpeed)],
    strokeWidth: 2,
    stroke:'green',
    },
    
],
}}
//width={Dimensions.get('window').width - 16}
width={1500}
height={220}
chartConfig={{
backgroundColor: '#c92ac7',
backgroundGradientFrom: '#7bede2',
backgroundGradientTo: '#dbb8cd',
decimalPlaces: 2,
color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
style: {
borderRadius: 16,
},
}}
style={{ marginVertical: 20,
borderRadius: 16,
marginLeft:50,
}}
/>

</View>

</ScrollView>

    );
  }
}
*/
import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';

import {
LineChart,
BarChart,
PieChart,
ProgressChart,
ContributionGraph,
StackedBarChart,
} from 'react-native-chart-kit';

export default class Linegraph extends React.Component
{

  render()
  {
    return(
<View>
{/*It is an Example of LineChart*/}
<Text
style={{
textAlign: 'center', fontSize: 30,fontFamily: 'SemiBold'
//padding: 10,
//marginTop: 5,
}}>
Speed and Fuel Consumption
</Text>
<LineChart data={{
labels: [ '1-Jan-16'
,'2-Jan-16'
,'3-Jan-16'
,'4-Jan-16'
,'5-Jan-16'
,'6-Jan-16'
,'7-Jan-16'
,'8-Jan-16'
,'13-Jan-16'
,'14-Jan-16'
,'15-Jan-16'
,'16-Jan-16'
,'17-Jan-16'
,'18-Jan-16'
,'19-Jan-16'
,'23-Jan-16'
,'24-Jan-16'
,'25-Jan-16'
,'26-Jan-16'
,'27-Jan-16'
,'28-Jan-16'
,'29-Jan-16'
,'30-Jan-16'
],
datasets: [
{
data: [12.46,11.62,9.83,11.71,11.74,11.13,11.88,11,11.94,12,12.92,11.17,11,11.71,12.03,12.39,11.19,11.42,11.25,11.13,11.79,12.63,10.63],
strokeWidth: 4,
stroke:'#8800cc',
},
{
    data: [13,13,13,13,13,13,13,13,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13],
    strokeWidth: 2,
    stroke:'green',
    },
    
],
}}
//width={Dimensions.get('window').width - 16}
width={1500}
height={220}
chartConfig={{
backgroundColor: '#c92ac7',
backgroundGradientFrom: '#7bede2',
backgroundGradientTo: '#dbb8cd',
decimalPlaces: 2,
color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
style: {
borderRadius: 16,
},
}}
style={{ marginVertical: 20,
borderRadius: 16,
marginLeft:50,
}}
/>
</View>

    );
  }
}

