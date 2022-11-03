import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { signIn, googleSignIn } from '../State/Action/Index'

import '../App.css'
import { useEffect } from 'react'

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: '',
    })
    const { email, password } = userLogin

    const { userEmail } = useSelector(state => state.AuthReducer)
    // console.log(userEmail);

    useEffect(() => {
        if (userEmail) {
            navigate("/")
        }
    }, [userEmail, navigate])


    const googleSignInSubmit = () => {
        dispatch(googleSignIn())
    }

    const loginForm = (e) => {
        e.preventDefault()
        if (!email || !password) {
            return;
        }
        dispatch(signIn(userLogin))
        setUserLogin({
            email: '',
            password: ''
        })
    }

    const userData = (e) => {
        let { name, value } = e.target
        setUserLogin({ ...userLogin, [name]: value })
    }


    return (
        <div className='login'>
            <h1>Sign In</h1>
            <form onSubmit={loginForm}>
                <div className='login_social'>
                    <button onClick={googleSignInSubmit} style={{ background: '#ff4545', color: 'white', cursor: 'pointer', borderColor: '#ff4545' }}>Sign In With Google</button>
                    <br />
                    <br />
                    <button style={{ background: '#4949b7', color: 'white', cursor: 'pointer', borderColor: '#4949b7' }}>Sign In With Facebook</button>
                    <br />
                    <br />
                    <strong>OR</strong>
                    <br /><br />
                </div>
                <input type="email" name="email" value={email} onChange={userData} placeholder="Email Address" /> <br /> <br />
                <input type="password" name="password" value={password} onChange={userData} placeholder="password" /> <br /> <br />
                <button type='submit' style={{ background: '#9e9e9e', color: 'black', cursor: 'pointer', borderColor: '#9e9e9e' }}>Sign In</button>
                <br /><br />
                <hr />
                <p>Don't have an account</p>
                <button onClick={() => navigate("/Register")} style={{ background: '#3f51b5', color: 'white', cursor: 'pointer', borderColor: '#3f51b5' }}>Sign Up New Account</button>
            </form>
        </div>
    )
}

export default Login