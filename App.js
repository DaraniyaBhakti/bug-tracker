import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import store from './src/redux/store';
// import {bugAdded, bugRemoved, bugResolved} from './src/redux/actions';
import * as actions from './src/redux/actions';
import store from './src/redux/customStore';

export default function App() {
  
  store.subscribe(() => {
    console.log("Store changed");
  })
  store.dispatch(actions.bugAdded("Bug 1"));
  // store.dispatch(actions.bugRemoved());
  console.log(store.getState())
  
  // store.state =1 
  // console.log(store );


  // const unsubscribe = store.subscribe(() => {
  //   console.log("Store changed", store.getState());
  // })

  // store.dispatch(bugAdded("Bug 1"));

  // unsubscribe();

  // store.dispatch(bugRemoved(1));

  // store.dispatch(bugResolved(1));

  // console.log(store)
  // console.log(store.getState())

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
