//Using react js toolkit to use redux
import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import {createSelector} from 'reselect';
import { apiCallBegin } from "./api";


//redux using create slice---to crreate action and reducer in single step
// let lastId=0;
const bugsSlice = createSlice({
    name: 'bugs',
    initialState: {
        list:[],
        loading:false,
        lastFetch:null
    },
    reducers: {
        bugAdded: (bugs, action) => {
            bugs.list.push(
                //to add data to server
                action.payload
                //to add manually
            //     {
            //     id: ++lastId,
            //     description: action.payload.description,
            //     resolved: false
            // }
            );
        },
        bugResolved: (bugs, action) => {
            const index = bugs.list.findIndex(bug => bug.id === action.payload.id);
            bugs.list[index].resolved = true;
        },
        bugRemoved: (bugs, action) => {
            bugs.list.filter(bug => bug.id === action.payload.id);
        },
        bugAssignedToUser:(bugs,action) => {
            const {bugId,userId} = action.payload;
            const index = bugs.list.findIndex(bug => bug.id === bugId);
            bugs.list[index].userId= userId;
        },
        bugsReceived:(bugs,action)=>{
            bugs.list = action.payload;
            bugs.loading = false;
            bugs.lastFetch = Date.now()
        },
        bugsRequested:(bugs,action)=>{
            bugs.loading = true;
        },
        bugsRequestFailed:( bugs,action)=>{
            bugs.loading = false;
        }
    }
})

export const {bugAdded,bugRemoved,bugResolved, bugAssignedToUser,bugsReceived,bugsRequested,bugsRequestFailed} = bugsSlice.actions;
export default bugsSlice.reducer;

//Action creator
const url='/bugs';

//() => fn(dispact,getState)

//to get values from cache memory
export const loadBugs = () => (dispatch, getState) => {
    const {lastFetch} = getState().entities.bugs;

    const diffInMinutes = moment().diff(moment(lastFetch),'minutes')
    console.log(lastFetch)
    if(diffInMinutes < 10 ) return;
    dispatch(
        apiCallBegin({
            url,
            onStart:bugsRequested.type,
            onSuccess:bugsReceived.type,
            onError:bugsRequestFailed.type
        })
    
    )
}

export const addBug = (bug) => apiCallBegin({
    url,
    method:'post',
    data:bug,
    onSuccess:bugAdded.type
})

//to render from server everytime
// export const loadBugs = () => 
//     apiCallBegin({
//         url,
//         onStart:bugsRequested.type,
//         onSuccess:bugsReceived.type,
//          onError:bugsRequestFailed.type
//     });

export const resolveBug = id => apiCallBegin({
    //bugs
    // ..PATCH /bugs/1
    url:url + '/' + id,
    method : 'patch',
    data:{resolved :true},
    onSuccess: bugResolved.type
})

export const assignBugToUser = (bugId,userId) => apiCallBegin( {
    url:url + '/' + bugId,
    method : 'patch',
    data:{userId},
    onSuccess: bugResolved.type
})



//Selector
// export const getUnresolvedBugs = ug => !bug.resolved);

//Memoization
//bugs => get unresolved bugs from the cache
export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    state => state.entities.projects,
    (bugs,projects) => bugs.filter(bug => !bug.resolved)
)

export const getBugsByUser = userId => createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === userId)
)


//used redux by creating action and reducers using react js toolkits
// export const bugAdded = createAction("bugAdded");
// export const bugResolved = createAction("bugResolved");
// export const bugRemoved = createAction("bugRemoved");

// let lastId=0;
// export default createReducer([], {
//     //key : value
//     //action : functions(event =>event hnadler)
//     [bugAdded.type]: (bugs, action) => {
//         bugs.push({
//             id: ++lastId,
//             description: action.payload.description,
//             resolved: false

//         });
//     },
//     [bugResolved.type] :(bugs,action) => {
//        const index =  bugs.findIndex(bug => bug.id === action.payload.id);
//         bugs[index].resolved = true;
//     },
//     [bugRemoved.type]:(bugs,action) => {
//          bugs.filter(bug => bug.id === action.payload.id);
//      }

// })



//reduce{used while only creating actions with toolkit}
// let lastId = 0;
// function reducer(state = [], action){
//     switch(action.type){
//         case bugAdded.type: {
//             return [
//                 ...state,
//                 {
//                     id : ++lastId,
//                     description : action.payload.description,
//                     resolved:false

//                 }
//             ];
//         }
//         case bugRemoved.type:
//             return state.filter(bug => bug.id !== action.payload.id);

//         case bugResolved.type:
//             return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved:true})

//         default:
//             return state;
//     }
// }
// export default reducer;





// //Ducks pattern for simplification
// // in this actions, and reducer are written in same file

// //Action
// const BUG_ADDED = 'bugAdded';
// const BUG_REMOVED = 'bugRemoved';
// const BUG_RESOLVED = 'bugResolved';

// //Action creators

// const bugAdded = (description) => ({
//     type: BUG_ADDED,
//     payload : {
//       description
//     }
// })

// const bugRemoved = (id) => ({
//     type: BUG_REMOVED,
//     payload:{
//       id
//     }
// })

// const bugResolved = (id) => ({
//     type: BUG_RESOLVED,
//     payload : {
//         id
//     }
// })

// export {bugAdded,bugRemoved,bugResolved}

// //Reducer

// let lastId = 0;
// function reducer(state = [], action){
//     switch(action.type){
//         case BUG_ADDED: {
//             return [
//                 ...state,
//                 {
//                     id : ++lastId,
//                     description : action.payload.description,
//                     resolved:false

//                 }
//             ];
//         }
//         case BUG_REMOVED:
//             return state.filter(bug => bug.id !== action.payload.id);

//         case BUG_RESOLVED:
//             return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved:true})

//         default:
//             return state;
//     }
// }
// export default reducer;