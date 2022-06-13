import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//------simple redux----------------
// import store from './src/store/configureStore';
// import {bugAdded, bugRemoved, bugResolved} from './src/redux/actions';


import {bugAdded,bugResolved,getUnresolvedBugs,getBugsByUser,bugAssignedToUser} from './src/store/bug';
import {projectAdded} from './src/store/project';
import { userAdded } from './src/store/user';

import configureStore from './src/store/configureStore';
import entities from './src/store/entities';


const store = configureStore();

export default function App() {
  
  store.dispatch(userAdded({name:"User 1"}))
  // store.dispatch(userAdded({name:"User 2"}))

  // store.dispatch(bugAdded({description:"Bug 1"}));
  // store.dispatch(bugAdded({description:"Bug 2"}));
  // store.dispatch(bugAdded({description:"Bug 3"}));
  // store.dispatch(bugResolved({id:1}));
  // console.log(store.getState())

  // store.dispatch(bugAssignedToUser({bugId:2,userId:1}))

  // const unresolved = store.getState().entities.bugs.filter(bug => !bug.resolved);
  // const unresolved = getUnresolvedBugs(store.getState())
  // console.log(unresolved);

  // const bugs = getBugsByUser(1)(store.getState());
  // console.log(bugs);
  // const x = getUnresolvedBugs(store.getState())
  // const y = getUnresolvedBugs(store.getState())
  // console.log(x===y)

  // store.dispatch(projectAdded({name : "Project 1"}));
  console.log(store.getState())

  // store.subscribe(() => {
  //   console.log("Store changed");
  // })
  // store.dispatch(actions.bugAdded("Bug 1"));
  // store.dispatch(actions.bugAdded("Bug 2"));
  // store.dispatch(actions.bugAdded("Bug 3"));
  // store.dispatch(actions.bugResolved(1));
  // console.log(store.getState())
  
  // store.state =1 
  // console.log(store );

  //----------simple  method----------------------

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
