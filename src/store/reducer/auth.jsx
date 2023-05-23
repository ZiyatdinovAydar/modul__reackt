import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem('users') || [],
    login: '',
    password: '',
    isLoggedIn: localStorage.getItem('usAuth') || false,
}
console.log(initialState.user)
const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers : {
        addAuth : (state, payload) => {
          if (localStorage.getItem('users')){
            state.user = JSON.parse(localStorage.getItem('users'))
          }
          state.user.push(payload.payload);
          localStorage.setItem('users', JSON.stringify(state.user))
        },

        userAuth : (state, payload) => {
          localStorage.setItem('isAuth', payload.payload);
          state.isLoggedIn = payload.payload;
        } 
        
      }
})

console.log(initialState)
console.log(authSlice)
export const { addAuth, userAuth } = authSlice.actions;
export default authSlice.reducer;