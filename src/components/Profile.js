import React from 'react'
import './Profile.css'

function Profile() {
    return (
        <img className="profile" src={process.env.PUBLIC_URL + "/img/profile.jpg"} alt="Profile Icon" />
    )
}

export default Profile
