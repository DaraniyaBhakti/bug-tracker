import { createSlice } from "@reduxjs/toolkit";

let lastProjectId  = 0;
const projectSlice = createSlice({
    name:'projects',
    initialState:[],
    reducers:{
        projectAdded:(projects, action) => {
            projects.push({
                id:++lastProjectId,
                name : action.payload.name
            })

        }
    }
})

export const {projectAdded} = projectSlice.actions;
export default projectSlice.reducer;