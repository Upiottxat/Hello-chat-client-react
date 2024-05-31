import React from 'react'

const MsgAlerts = ({ alert, type, duration, clear }) => {
    if (clear) {
        setTimeout(() => {
            clear()
        }, duration);
    }
    return (
        <div>
            {
                type === "Danger" ?

                    <div className="  alert alert-danger d-flex align-items-center" role="alert">
                        {
                            <i className=' fa fa-warning' style={{ marginRight: '1rem' }}></i>
                        }
                        <div>
                            {alert}
                        </div>
                    </div>

                    : ""
            }
        </div>
    )
}

export default MsgAlerts
