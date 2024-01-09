import "./ToastContainer.css"
import { useContext } from "react"
import { ToastContext } from "../../contects/ToastContext"
import ToastItem from "../ToastItem/ToastItem"

export default function ToastContainer() {
    const { toasts, removeToast } = useContext(ToastContext)
    
    return (<div className="toastContainer">
        {toasts.map((nextToast) => {
            return <div key={nextToast.id}><ToastItem id={nextToast.id} text={nextToast.text} removeToast={removeToast}/></div>
        })}
    </div>)
}