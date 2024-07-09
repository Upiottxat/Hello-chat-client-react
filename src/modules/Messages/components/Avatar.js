import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';


const Avatar = ({ profilePic, width, height, defaultNavigate }) => {

    const Navigate = useNavigate()
    return (
        <div className='userAvatar avatar bg-light border position-relative rounded-circle d-flex justify-content-center align-items-center' style={{
            width: width || '4rem', height: height || '4rem',


        }}
            onClick={() => {
                if (!defaultNavigate) {


                    Navigate("/Profile")
                }
            }}


        >

            {profilePic ? (
                <img src={profilePic} alt="Profile" width="100%" height="100%" />
            ) : (
                <i className='fa fa-2x fa-user'></i>
            )}




            <span className="position-absolute p-1 bg-success border border-secondary rounded-circle" style={{
                top: '10%',
                right: '0%'
            }}>
                <span className="visually-hidden">New alerts</span>
            </span>
        </div>
    );
};

export default Avatar;
