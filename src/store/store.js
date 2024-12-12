import {configureStore} from "@reduxjs/toolkit"
import authreducer from "./authSlice.js"
const store = configureStore({
    reducer:{
        auth:authreducer
    }
         
    
})

export default store 