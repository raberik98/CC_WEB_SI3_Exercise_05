import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const ToastContext = createContext(null)

export function ToastContextProvider() {
    const [toasts, setToasts] = useState([])

    function addToast() {
        if (toasts.length == 0) {
            setToasts([{id: 1, text: "Hello I am a toast!"}])
        }
        else {
            setToasts([...toasts, {id: toasts[toasts.length-1].id + 1, text: "Hello I am a toast!"}])
        }
    }

    function removeToast(id) {
        const filteredToasts = toasts.filter(nextToast => nextToast.id != id)
        setToasts([...filteredToasts])
    }

    return(
        <ToastContext.Provider value={{toasts, setToasts, addToast, removeToast}}>
        <Outlet/>
        </ToastContext.Provider>
   )
}

