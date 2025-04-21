import { useEffect, useState } from "react";
import './index.css';
import { RxCross2 } from "react-icons/rx";

const Notification = ({ title, message, timeout, showNotification, setShowNotification }) => {
    const [showLoader, setShowLoader] = useState(false);
    useEffect(() => {
        let timerId = setTimeout(() => {
            setShowNotification(false);
        }, timeout * 1000)

        return () => clearTimeout(timerId)
    }, [timeout, setShowNotification, setShowLoader])

    useEffect(() => {
        if (showNotification) {
            const timeoutId = setTimeout(() => {
                setShowLoader(true);
            }, 50)

            return () => clearTimeout(timeoutId);
        }
    }, [showNotification])


    return (true &&
        <div className={`notification__container ${showLoader ? 'progress__full' : ''}`}>
            <div className="notification__text">
                <div className="notification__title">{title}</div>
                <div className="notification__message">{message}</div>
            </div>
            <RxCross2
                className="notification__cancel"
                onClick={() => setShowNotification(false)}
            />
        </div>
    )
}

export default Notification;