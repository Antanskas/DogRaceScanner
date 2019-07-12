import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native';

export default function App() {
  return (

    <View style={{flex: 1,}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 20}}>
              About 
          </Text>
          <Text style={{fontSize: 20, marginHorizontal: 20}}>
              Credits
          </Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'skyblue'}}>
          <Text style={{fontSize: 56}}>
            Dog scanner!
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'steelblue'}}>
          <View style={{width: 200, fontSize: 50}}>
          <Button
            title='START'
          />
          </View>
        </View>
      </View>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
