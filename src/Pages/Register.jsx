import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import '../App.css'

import { signUp } from '../State/Action/Index'

const Register = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [userRegister, setUserRegister] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { name, email, password, confirmPassword } = userRegister

    const { userEmail, userPassword } = useSelector((state) => state.AuthReducer)

    useEffect(() => {
        if (userEmail || userPassword) {
            navigate("/")
        }
    }, [userEmail, userPassword, navigate])

    const registerForm = (e) => {
        e.preventDefault()
        if (password !== confirmPassword || !email || !password) {
            return;
        }
        dispatch(signUp(userRegister))
        setUserRegister({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    const userData = (e) => {
        let { name, value } = e.target
        setUserRegister({
            ...userRegister,
            [name]: value
        })
    }


    return (
        <div className='register'>
            <h1>Register</h1>
            <form onSubmit={registerForm}>
                <input type="text" name="name" value={name} onChange={userData} placeholder="Name" /> <br /> <br />
                <input type="email" name="email" value={email} onChange={userData} placeholder="Email" /> <br /> <br />
                <input type="password" name="password" value={password} onChange={userData} placeholder="Password" /> <br /> <br />
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={userData} placeholder="ConfirmPassword" /> <br /> <br />
                <button type='submit' style={{ background: '#607d8b', color: 'white', cursor: 'pointer', borderColor: '#607d8b' }}>Sign Up</button>
                <br /><br /><hr /><br />
                <button onClick={() => navigate("/Login")} style={{ background: '#f44336', color: 'white', cursor: 'pointer', borderColor: '#f44336' }}>
                    Go Back
                </button>
            </form>
        </div>
    )
}

export default Register