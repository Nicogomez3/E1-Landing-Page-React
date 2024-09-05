import { createSlice } from "@reduxjs/toolkit";
import { pickRandom } from "../utils/pickRandom";
import { products } from "../Data/Products";
const INITIAL_STATE = {
    recommended: pickRandom(products, 3),
}

export const recommendedSlice = createSlice({
    name: 'recommended',
    initialState: INITIAL_STATE,
    reducers: {
        randomRecommended: state => state 
    }
})

export const { randomRecommended } = recommendedSlice.actions;

export default recommendedSlice.reducer;