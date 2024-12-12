import React from "react"
import { useDispatch } from "react-redux"

import authService from "../../appwrite/auth"
import { logout } from "../../store/authSlice"


function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandeler = () => {
        authService.logout().then((state) => {
            dispatch(logout())
        })
    }

    return (
        <button
            className="px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 border-2 border-slate-200 rounded-lg hover:bg-slate-100 hover:border-slate-300 active:scale-95"
            onClick={logoutHandeler}
        >Logout</button>
    )
}

export default LogoutBtn