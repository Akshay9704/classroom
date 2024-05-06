import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const dashSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        addToDash(state, action) {
            state.push(action.payload)
        },
        deleteFromDash(state, action) {
            return state.filter(item => item.id !== action.payload.id);
        },
    },
})

export const { addToDash, deleteFromDash } = dashSlice.actions

export default dashSlice.reducer