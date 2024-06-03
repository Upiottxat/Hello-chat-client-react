import React from "react";
import { useState } from "react";

import MsgAlerts from "../../utils/msgAlerts";
import useCreateAccount from "../../hooks/useCreateAccount";
import { Link } from "react-router-dom";

// import useSignup from '../../Hooks/useSignup'

const SignUp = () => {
    const [formdata, setFormData] = useState({
        fullName: "",
        Username: "",
        Email: "",

        Password: "",
        ConformPassword: "",
        Gender: "",
        TermsAndConditons: true,
    });

    const [error, setError] = useState("");




    // const [loading, signup] = useSignUp(formdata.Username, formdata.Email, formdata.Password, formdata.Mobile, formdata.ConformPassword, formdata.Gender)
    const { loading, signup: createAccount } = useCreateAccount();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handle submit is callled ");
        const data = await createAccount(formdata);
        if (data.error) {
            console.log(data.error);
            setError(data.error);
        }

    };

    const handleInput = async (e) => {
        // console.log("handle input");
        setFormData((data) => {
            return { ...data, [e.target.name]: e.target.value };
        });


    };
    const handleGender = (gender) => {
        // console.log("");
        setFormData((data) => {
            return { ...data, Gender: gender };
        });
    };

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
                className=" d-flex  flex-column container-fluid justify-content-center  align-items-center"
                style={{
                    position: "relative",
                    overflowY: "auto ",

                }}
            >
                <div
                    className="container  d-flex mt-2 pt-5 border justify-content-center flex-column p-4 align-items-center bg-light "
                    style={{
                        maxWidth: "425px",
                        borderRadius: "20px",
                        // border: "1px solid #adb5bd"
                    }}
                >
                    <blockquote className="blockquote">Create Acccount</blockquote>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">
                                    FullName{" "}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fullName"
                                    aria-describedby="fullName-Help"
                                    name="fullName"
                                    onChange={handleInput}
                                />

                            </div>
                            {
                                //Username
                            }    <div className="mb-3">
                                <label htmlFor="Username" className="form-label">
                                    Username{" "}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Username"
                                    aria-describedby="Username-Help"
                                    name="Username"
                                    onChange={handleInput}
                                />
                                <div id="Username-Help" className="form-text">
                                    Choose a unique Username
                                </div>
                            </div>
                            {
                                //Email
                            }
                            <div className="mb-3">
                                <label htmlFor="Email" className="form-label">
                                    Email{" "}
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    aria-describedby="emailHelp"
                                    name="Email"
                                    onChange={handleInput}
                                />
                                {
                                    <div id="emailHelp" className="form-text">
                                        We'll never share your email with anyone else.<br></br>
                                        You can create multiple accounts using same email
                                    </div>
                                }
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="Password"
                                    aria-describedby="passwordHelpBlock"
                                    onChange={handleInput}
                                />
                                <div id="passwordHelpBlock" className="form-text">
                                    Your password must be 8-20 characters long, contain letters,
                                    numbers and special characters, and must not contain spaces, or
                                    emoji.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="conformPassword" className="form-label">
                                    Conform password
                                </label>

                                <input
                                    type="password"
                                    className="form-control"
                                    id="conformPassword"
                                    name="ConformPassword"
                                    aria-describedby="passwordHelpBlock"
                                    onChange={handleInput}
                                />
                            </div>
                            <div className=" mb-3 ">
                                <div className="form-label">Gender</div>

                                <div className="form-check ">
                                    <input
                                        className="form-check-input"
                                        onChange={() => {
                                            handleGender("male");
                                        }}
                                        type="radio"
                                        name="gender"
                                        id="genderMale"
                                    />
                                    <label className="form-check-label" htmlFor="gender">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check ">
                                    <input
                                        className="form-check-input"
                                        onChange={() => {
                                            handleGender("female");
                                        }}
                                        type="radio"
                                        name="gender"
                                        id="genderFemale"
                                    />
                                    <label className="form-check-label" htmlFor="gender">
                                        Female
                                    </label>
                                </div>
                            </div>
                        </div>


                        <div className="btn-group d-flex flex-column  ">
                            <button
                                type="submit"
                                className="btn btn-primary  mb-2 "
                                style={{ borderRadius: "10px" }}
                            >
                                {
                                    //continue buttton 
                                    loading ?
                                        <div className="spinner-grow text-light" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>

                                        : "Continue"//Continue button 

                                }
                            </button>
                            <div className="lean  text-center text-muted d-flex justify-content-center align-items-center" >
                                <small>Alerady have an account?</small>
                            </div>


                            <Link to={"/login"} style={{

                                textDecoration: "none"
                            }} className="mt-1">
                                <div className="d-flex flex " style={{ flex: 1 }} >
                                    <button
                                        className="btn bg-whited-flex justify-content-center align-items-center text-center"
                                        style={{
                                            border: "1px solid #0d6efd",
                                            borderRadius: "10px",
                                            flex: 1,


                                        }}
                                    >  login</button>
                                </div>
                            </Link>


                        </div>
                    </form>
                </div>
            </div >
        </React.Fragment >
    );
};

export default SignUp;
