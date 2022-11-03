import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signOut } from '../State/Action/Index'

const Dashboard = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch(signOut())
        navigate("/Login")
    }

    return (
        <div>
            <h1>
                Welcome to the Dashboard
            </h1>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}

export default Dashboard