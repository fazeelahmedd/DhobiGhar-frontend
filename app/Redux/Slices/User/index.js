import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        loggedIn: false,
        token: null,
        user: null
    },
    reducers: {
        setUserData: (state, action) => {
            let { auth, token, user } = action.payload
            if (auth) {
                state.loggedIn = true
                state.token = token
                state.user = user
            } else {
                state.loggedIn = false
                state.token = null
                state.user = null
            }
        }
    },
});

export const { setUserData } = userSlice.actions

export default userSlice.reducer