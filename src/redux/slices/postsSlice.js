import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
    'posts/fetchPizzasStatus', // Создаем название только для себя, на функционал никак не влияет и не используется
    async (params, thunkAPI) => {
        const {category, sortBy, order, search, currentPage} = params;
        const {data} = await axios.get(`https://62d942af9eedb69963576309.mockapi.io/posts`)
        return data
    }
) // Санка чтобы несколько действий делать в одной функции и использовать эту функцию в нескольких местах в приложении

const initialState = {
    items: [],
    status: 'loading' // статусы: loading | success | error
}

const postsSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.items = action.payload;
        }
    },
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.items = []
            state.status = 'loading'
        }, // Если будет запрос, произойдут такие дейсвтия
        [fetchPizzas.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'success'
        }, // Если будет успех, произойдут такие дейсвтия
        [fetchPizzas.rejected]: (state) => {
            state.status = 'error'
            state.items = []
        } // Если будет ошибка, произойдут такие дейсвтия
    },
})

export const selectPizzaData = (state) => state.pizzas;

export const {setPosts} = postsSlice.actions;

export default postsSlice.reducer;