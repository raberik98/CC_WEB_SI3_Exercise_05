import { useEffect } from "react"
import "./ToastItem.css"

export default function ToastItem({ id, text, removeToast}) {

    useEffect(() => {
        setTimeout(() => {
            removeToast(id)
        }, 2000)
    },[])
    
    return(<div className="ToastItem">{text}</div>)
}