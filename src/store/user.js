import { createSlice } from "@reduxjs/toolkit";

let lastUserId = 0;
const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        userAdded: (users, action) => {
            users.push({
                id: ++lastUserId,
                name: action.payload.name
            })
        },
       

    }

})

export const {userAdded} = userSlice.actions;
export default userSlice.reducer;