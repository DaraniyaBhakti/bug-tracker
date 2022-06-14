import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//------simple redux----------------
// import store from './src/store/configureStore';
// import {bugAdded, bugRemoved, bugResolved} from './src/redux/actions';


import {bugAdded,bugResolved,getUnresolvedBugs,getBugsByUser,bugAssignedToUser, resolveBug, assignBugToUser} from './src/store/bug';
import {projectAdded} from './src/store/project';
import { userAdded } from './src/store/user';

import * as actions from './src/store/api';
import {loadBugs,addBug} from './src/store/bug'; 

import configureStore from './src/store/configureStore';
import entities from './src/store/entities';


const store = configureStore();

export default function App() {

  //action from reducers
  store.dispatch(loadBugs());
  setTimeout(() =>store.dispatch(loadBugs()))
  setTimeout(() =>store.dispatch(resolveBug(1)), 2000)
  setTimeout(() =>store.dispatch(assignBugToUser(1,1)), 2000)
   
  //api call using action of reactjs tolkit
  // store.dispatch(actions.apiCallBegin({
  //   url:'/bugs',
  //   //to get
  //   // onSuccess:"bugsReceived",
  //   //to get bugs data using reducer
  //   onSuccess:'bugs/bugsReceived'
  //   // onError :actions.apiCallFailed.type
  // }))

  //define action to get api call
  // store.dispatch({
  //   type:"apiCallBegin",
  //   payload:{
  //     url:'/bugs',
  //     onSuccess:'bugReceived',
  //     onError :'apiRequestFailed'
  //   }
  // })
  console.log(store.getState())


  // for use of middleware
  // store.dispatch((dispatch,getState)=>{
  //   //call an API
  //   //when the promise resolved => dispatch()
  //   // dispatch({
  //   //   type:'bugsReceived',
  //   //   bugs:[1,2,3]
  //   // } 

  //   dispatch({
  //     type:'error',
  //     payload:{message:"An error occured"}
  //   }
  //   )
  //   console.log(getState())
    //if promise is rejected => dispatch()
    // })


  // store.dispatch(userAdded({name:"User 1"}))
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
  // console.log(store.getState())

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
