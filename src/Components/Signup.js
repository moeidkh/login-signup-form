import React, { useEffect, useState } from 'react';
import styles from '../Styles/Signup.module.css';
import { Link } from 'react-router-dom';
import { inputChecking } from './InputChecking';
import Swal from 'sweetalert2';

const Signup = () => {

    const [datas, setDatas] = useState({
        name: "",
        email: "",
        pass: "",
        confirmPass: "",
        isAccept: false,
    })
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const changeHandler = event => {
        if (event.target.name === "isAccept") {
            setDatas({ ...datas, [event.target.name]: event.target.checked });
            setTouched({ ...touched, [event.target.name]: true });
        } else {
            setDatas({ ...datas, [event.target.name]: event.target.value })
        }
    }

    useEffect(() => {
        setErrors(inputChecking(datas, "signup"));
    }, [datas, touched])

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
                name: true,
                email: true,
                pass: true,
                confirmPass: true,
                isAccept: true
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
        <div className={styles.container}>
            <div className={styles.signupContainer}>

                <h1 className={styles.signupTitle}>Sign Up</h1>

                <form action='#' className={styles.form} onSubmit={event => event.preventDefault()}>

                    <div className={styles.inpItem}>
                        <label>Name:</label>
                        <input className={styles.inp} style={errors.name && touched.name ? { border: "1px solid red" } : { border: "1px solid #999" }} name="name" type="text" value={datas.name} onChange={changeHandler} onFocus={focusHnadler} />
                        {errors.name && touched.name ? <p>{errors.name}</p> : <p>‌</p>}
                    </div>

                    <div className={styles.inpItem}>
                        <label>Email:</label>
                        <input className={styles.inp} style={errors.email && touched.email ? { border: "1px solid red" } : { border: "1px solid #999" }} name="email" type="text" value={datas.email} onChange={changeHandler} onFocus={focusHnadler} autoComplete="off" />
                        {errors.email && touched.email ? <p>{errors.email}</p> : <p>‌</p>}
                    </div>

                    <div className={styles.inpItem}>
                        <label>Password:</label>
                        <input className={styles.inp} style={errors.pass && touched.pass ? { border: "1px solid red" } : { border: "1px solid #999" }} name="pass" type="password" value={datas.pass} onChange={changeHandler} onFocus={focusHnadler} />
                        {errors.pass && touched.pass ? <p>{errors.pass}</p> : <p>‌</p>}
                    </div>

                    <div className={styles.inpItem}>
                        <label>Confirm Password:</label>
                        <input className={styles.inp} style={errors.confirmPass && touched.confirmPass ? { border: "1px solid red" } : { border: "1px solid #999" }} name="confirmPass" type="password" value={datas.confirmPass} onChange={changeHandler} onFocus={focusHnadler} />
                        {errors.confirmPass && touched.confirmPass ? <p>{errors.confirmPass}</p> : <p>‌</p>}
                    </div>
                    <div className={styles.accept}>
                        <p>I accept term of privacy policy</p>
                        <input className={styles.checkbox} name="isAccept" type="checkbox" onClick={changeHandler} />
                    </div>
                    <div className={styles.inpItem}>
                        {errors.isAccept && touched.isAccept && <p>{errors.isAccept}</p>}
                    </div>
                    <div className={styles.btns}>
                        <Link to="/login">Login</Link>
                        <button type='submit' onClick={submitHandler}>Sign Up</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Signup;