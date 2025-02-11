import { createSlice } from '@reduxjs/toolkit'


// Define a type for the slice state
interface SessionState {
    email: string,
    username: string,
    first_name: string,
    last_name: string,
    customer_guid: string
}

// Define the initial state using that type
const initialState: SessionState = {
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    customer_guid: ""

}

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setSession: (state, action) => {
           state.email = action.payload.email
           state.username = action.payload.username
           state.first_name = action.payload.first_name
           state.last_name = action.payload.last_name
           state.customer_guid = action.payload.customer_guid
        },
    },
})

export const { setSession } = sessionSlice.actions

export default sessionSlice.reducer