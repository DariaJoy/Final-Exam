import { createSlice } from '@reduxjs/toolkit';

let saveToLocalStorage = ({ id, email, accessToken }) => {
    localStorage.setItem('id', id);
    localStorage.setItem('email', email);
    localStorage.setItem('accessToken', accessToken);
};

let getFromLocalStorage = () => ({
        id: localStorage.getItem('id') || '',     
        email: localStorage.getItem('email') || '',
        accessToken: localStorage.getItem('accessToken') || '',   
});

export let usersSlice = createSlice({
    name: 'users',
    initialState: getFromLocalStorage(),
    reducers: {
        login: (state, { payload }) => {
            let { id, email, accessToken } = payload;
            state.id = id;
            state.email = email;
            state.accessToken = accessToken;
            saveToLocalStorage(payload);
        }, 
        logout: (state) => {
            saveToLocalStorage = ({ id: '', email: '', accessToken: '' });
            state.id = localStorage.getItem('id') || '';
            state.email = localStorage.getItem('email') || '';
            state.accessToken = localStorage.getItem('accessToken') || '';
        },  
    },
});

export let { login, logout } = usersSlice.actions

export default usersSlice.reducer