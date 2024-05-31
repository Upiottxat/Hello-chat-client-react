import React, { useState } from "react";
import { Link } from "react-router-dom";
import MsgAlerts from "../../utils/msgAlerts";
import useLogin from "../../hooks/useLogin"
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, login] = useLogin()
    const handleInput = (e) => {
        if (e.target.name === "username") {
            setUsername(e.target.value)
        }
        if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await login(username, password)
        if (res.error) {
            setError(res.error)
            console.log(res.error);
        }
    }
    return (
        <React.Fragment>
            <div
                className=" d-flex   justify-content-center  align-items-center"
                style={{
                    position: "fixed",

                    zIndex: "100000000",
                    width: "100vw",
                    textAlign: "center",
                }}
            >
                {" "}
                {error ? (
                    <MsgAlerts
                        alert={error}
                        type={"Danger"}
                        duration={2000}
                        clear={() => setError("")}
                    />
                ) : (
                    ""
                )}
            </div>
            <div
                className=" d-flex    container-fluid justify-content-center  align-items-center"
                style={{
                    height: "100vh",
                    position: "relative",
                }}
            >

                <div
                    className="container border d-flex  justify-content-center flex-column p-4 align-items-center bg-light "
                    style={{
                        maxWidth: "425px",
                        borderRadius: "20px",
                    }}
                >
                    <div className="mb-3 mt-0  p-2  logo text-italic ">
                        <h2 className="display-6">
                            <bold>Hello</bold>
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-1">
                            <label for="exampleInputEmail1" className="form-label">
                                Username or Email{" "}
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Username or Email"
                                name="username"
                                onChange={handleInput}
                            />
                            <div id="emailHelp" className="form-text " style={{ padding: "0rem 1rem " }}>
                                Use Username or Email or to login{"     "}
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="form-link " style={{ textAlign: "right" }}>
                                <a className="forget-passowrd" href="#">
                                    forget something?
                                </a>
                            </div>
                            <label for="password" className="form-label">
                                Password
                            </label>

                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="********"
                                onChange={handleInput}
                            />
                        </div>

                        <div className="btn-group d-flex flex-column  ">
                            <button
                                type="submit"
                                className="btn btn-primary  mb-2 "
                                style={{ borderRadius: "10px" }}
                            >
                                {
                                    //login buttton 
                                    loading ?
                                        <div className="spinner-grow text-light" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>

                                        : "login"//login button 

                                }
                            </button>
                            <div className="lean  text-center text-muted d-flex justify-content-center align-items-center" >
                                <small>Not a member?</small>
                            </div>

                            <Link to={"/signup"} style={{ textDecoration: "none" }} className="mt-1">
                                <div className="d-flex flex " style={{ flex: 1 }} >
                                    <button
                                        className="btn bg-whited-flex justify-content-center align-items-center text-center"
                                        style={{
                                            border: "1px solid #0d6efd",
                                            borderRadius: "10px",
                                            flex: 1,


                                        }}
                                    >  SignUp</button>
                                </div></Link>

                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Login;
