import { createSlice } from '@reduxjs/toolkit';

const getFromLocalStorage = () => {
    return {
        email: localStorage.getItem('email') || '',
        username: localStorage.getItem('username') || '',
        accessToken: localStorage.getItem('accessToken') || '',
    };
};

const saveToLocalStorage = ({ email, username, accessToken }) => {
    localStorage.setItem('email', email);
    localStorage.setItem('username', username);
    localStorage.setItem('accessToken', accessToken);
};

export const usersSlice = createSlice({
    name: 'users',
    initialState: getFromLocalStorage(),
    reducers: {
        login: (state, { payload }) => {
            const { email, username, accessToken } = payload;
            state.email = email;
            state.username = username;
            state.accessToken = accessToken;
            saveToLocalStorage(payload);
        },      
    },
})

export const { login } = usersSlice.actions

export default usersSlice.reducer