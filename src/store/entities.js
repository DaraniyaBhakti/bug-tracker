import { combineReducers } from "redux";
import bugsReducer from './bug';
import projectsReducer from './project';
import usersReducer from './user';

export default combineReducers({
    bugs:bugsReducer,
    projects:projectsReducer,
    users:usersReducer
})