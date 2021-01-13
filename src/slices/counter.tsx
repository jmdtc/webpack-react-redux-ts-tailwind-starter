import { createSlice } from '@reduxjs/toolkit';

interface StateType {
    value: number;
};

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    } as StateType,
    reducers: {
        setCounter: (state, action) => {
            action.payload === "increment" ?
                state.value++ :
                state.value--
        }
    }
})

export const {
    setCounter,
  } = counterSlice.actions
export const selectCounter = state => state.counter.value
export default counterSlice.reducer