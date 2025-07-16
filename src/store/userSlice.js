import { createSlice } from '@reduxjs/toolkit';
import data from '../data/data.json';

// Set up the initial state
const initialState = {
    userList: data.users,
    activity: data.activity,
    averageSessions: data.averageSessions,
    performance: data.performance,
    selectedUserId: 18, // Default selected user
};

// Create the user slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        selectUser: (state, action) => {
            state.selectedUserId = action.payload;
        },
    },
});

// Export actions and reducer
export const { selectUser } = userSlice.actions;
export default userSlice.reducer;
