import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { inputChecking } from './InputChecking';
import Swal from 'sweetalert2';
import styles from '../Styles/Login.module.css'

const Login = () => {

    const [datas, setDatas] = useState({
        email: "",
        pass: "",
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(inputChecking(datas, "login"));
    }, [datas, touched]);

    const changeHandler = event => {
        setDatas({ ...datas, [event.target.name]: event.target.value })
    }

    const submitHandler = () => {
        if (!Object.keys(errors).length) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your registration is complete',
                showConfirmButton: false,
                timer: 2500
            })
        } else {
            setTouched({
                pass: true,
                email: true,
            })
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Error!!',
                showConfirmButton: false,
                timer: 2500
            })
        }
    }

    const focusHnadler = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginbox}>
                <h1>Login</h1>
                <form action='#' onSubmit={event => event.preventDefault()}>
                    <div className={styles.loginInp}>
                        <label>Email:</label>
                        <input className={styles.inp} style={errors.email && touched.email ? { border: "1px solid red" } : { border: "1px solid #999" }} name="email" type="text" value={datas.email} onChange={changeHandler} onFocus={focusHnadler} autoComplete="off" />
                        {errors.email && touched.email ? <p className={styles.danger}>{errors.email}</p> : <p className={styles.danger}>‌</p>}
                    </div>

                    <div className={styles.loginInp}>
                        <label>Password:</label>
                        <input className={styles.inp} style={errors.pass && touched.pass ? { border: "1px solid red" } : { border: "1px solid #999" }} name="pass" type="password" value={datas.pass} onChange={changeHandler} onFocus={focusHnadler} />
                        {errors.pass && touched.pass ? <p className={styles.danger}>{errors.pass}</p> : <p className={styles.danger}>‌</p>}
                    </div>
                    <div className={styles.btns}>
                        <Link to="/">Sign Up</Link>
                        <button type='submit' onClick={submitHandler}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;