import React, { useState } from "react";
import { useSelectedUserContext } from "../../../../../context/selectedUserContext";
import useChats from "../../../../../hooks/useChats";
const Input = () => {
    const [msgi, setMsg] = useState("");
    const { selectedUser } = useSelectedUserContext();
    const [msg, Get, loading, sendLoading, Sendmsg] = useChats(selectedUser ? selectedUser._id : "");
    const handleSendmsg = () => {

        if (!msgi) return;
        if (!selectedUser) return console.log("user not selected")

        Sendmsg(msgi);
    };

    return (
        <div
            className="form p-2 "
            style={{
                width: "100%",
                height: "3rem",
                paddingBottom: "1rem",
            }}
        >
            <div className="position-relative d-flex   justify-content-center  align-items-center ">
                <input
                    type="text"
                    className="form-control  border-dark shadow "
                    value={msgi}
                    placeholder="Send a message"
                    name="msg"
                    id="msg"
                    onChange={(e) => {
                        setMsg(e.target.value);
                    }}
                    style={{
                        borderRadius: "50px",
                        marginBottom: "0.5rem",
                        paddingRight: "3rem",
                    }}
                />
                <div
                    className="send-btn mb-1 position-absolute  d-flex   justify-content-center  align-items-center "
                    style={{
                        right: "1.5%",
                    }}
                >
                    <i
                        className="fa fa-paper-plane text-secondary "
                        onClick={handleSendmsg}
                    ></i>
                </div>
            </div>
        </div>
    );
};

export default Input;
