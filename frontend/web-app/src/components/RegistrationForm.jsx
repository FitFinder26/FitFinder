import { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import './external-styles/RegistrationForm.css'
import {HashLoader} from 'react-spinners';
import { flushSync } from "react-dom";
import { useAuthContext } from "../providers/AuthProvider";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; 
import showPasswordIcon from '../assets/show-password.png'
import hidePasswordIcon from '../assets/hide-password.png'
import { Notifier } from "./Notifier";

export default function RegistrationForm({ usedForm, setUsedForm, setNavigationBlocked }){
    const [signupFormVariables, setSignupFormVariables] = useState({});
    const [loginFormVariables, setLoginFormVariables] = useState({});
    const [forgotPasswordVariables, setForgotPasswordVariables] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [loginPhase, setLoginPhase] = useState('login'); // 'login', 'sendCode', 'updatePassword'
    const [code, setCode] = useState('');
    const [errors, setErrors] = useState({
        emailAlreadyExist: false,
        wrongPassword: false,
        wrongCode: false
    });
    const {login, signup, sendCode, verifyCode, updatePassword} = useAuthContext();
    const navigate = useNavigate();

    useEffect(()=>{
        let container = document.getElementById('container')
        let timer;
        if (container){
            timer = setTimeout(() => {
                if(usedForm == 'login') container.classList.add('sign-in')
                else if(usedForm == 'signup') container.classList.add('sign-up')
            }, 200)
        }
        return ()=> clearTimeout(timer);
    }, [])
    
    useEffect(()=>{
        setLoginPhase('login');
        toggleRegistrationForm(usedForm);
    }, [usedForm]);

    const toggleRegistrationForm = (form) => {
        if (form == 'login'){
            container.classList.remove('sign-up');
            container.classList.add('sign-in');
        }
        else{
            container.classList.remove('sign-in');
            container.classList.add('sign-up'); 
        }
        setUsedForm(form);
    }

    const handleSignupFormVariables = (e) => {
        const { name, value } = e.target;
        setSignupFormVariables((prev) => ({...prev, [name]: value}));
    };

    const handleLoginFormVariables = (e) => {
        const { name, value } = e.target;
        setLoginFormVariables((prev) => ({...prev, [name]: value}));
    };

    const handleForgotPasswordVariables = (e) => {
        const { name, value } = e.target;
        setForgotPasswordVariables((prev) => ({...prev, [name]: value}));
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        // Check password strength
        const passwordTag = document.getElementById('password');
        if (signupFormVariables.password.length == 0){
            passwordTag.setCustomValidity("Please enter a password.");
            passwordTag.reportValidity();
            return;
        }
        else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};:\\|,.<>\/?]).{8,64}$/.test(signupFormVariables.password)){
            passwordTag.setCustomValidity("Password must follow the below red conditions.");
            passwordTag.reportValidity();
            return;
        }
        // Block navigation
        flushSync(() => {
            setDisabled(true);
            setNavigationBlocked(true);
        });

        // Perform signup
        try {
            const data = await signup(signupFormVariables.username, 
                    signupFormVariables.email, 
                    signupFormVariables.password);
            // check if email already exists
            if (data.status == 409)
                setErrors(prev => ({...prev, [emailAlreadyExist]: true}));
            if (data.status == 201)
                navigate('/home');
            else
                throw new Error(data.status);
        } catch (error) {
            console.error("Signup failed:", error);
        }
        // Release blocker after signup
        flushSync(() => {
            setDisabled(false);
            setNavigationBlocked(false);
        }
        );
    };

    const handleLogin = async(e) => {
        e.preventDefault();
        // Block navigation
        flushSync(() => {
            setDisabled(true);
            setNavigationBlocked(true);
        });
        // Perform login
        try {
            const data = await login(loginFormVariables.email,
                loginFormVariables.password);
            // check of password is wrong
            if (data.status == 401)
                setErrors(prev => ({...prev, [wrongPassword]: true}));
            if (data.status == 200) 
                navigate('/home');
            else 
                throw new Error(data.status);
        } catch (error) {
            console.error("Login failed:", error);
        }

        // Release blocker after login
        flushSync(() => {
            setDisabled(false);
            setNavigationBlocked(false);
        });
    };

    const handleSendCode = async(e) => {
        e.preventDefault();
        // Block navigation
        flushSync(() => {
            setDisabled(true);
            setNavigationBlocked(true);
        });
        // Perform send code
        try {
            const data = await sendCode(forgotPasswordVariables.email);
            if (data.status == 200){
                const body = data.json();
                setCode(body.code);
                Notifier.notifySuccess("Verification code sent to your email.");
                setLoginPhase('verifyCode');
            }
            else 
                throw new Error(data.status);
        } catch (error) {
            console.error("Sending code failed:", error);
            Notifier.notifyError("Failed to send verification code.");
        }

        // Release blocker after login
        flushSync(() => {
            setDisabled(false);
            setNavigationBlocked(false);
        });
    }

    const handleVerifyCode = async(e) => {
        e.preventDefault();
        // Block navigation
        flushSync(() => {
            setDisabled(true);
            setNavigationBlocked(true);
        });
        // Perform send code
        try {
            await verifyCode(forgotPasswordVariables.code);
            setLoginPhase('updatePassword');
        } catch (error) {
            console.error("Sending code failed:", error);
            Notifier.notifyError("Failed to send verification code.");
        }

        // Release blocker after login
        flushSync(() => {
            setDisabled(false);
            setNavigationBlocked(false);
        });
    }

    const handleUpdatePassword = async(e) => {
        e.preventDefault();
        // Block navigation
        flushSync(() => {
            setDisabled(true);
            setNavigationBlocked(true);
        });
        // Perform update password
        try {
            await updatePassword(forgotPasswordVariables.email,
                forgotPasswordVariables.password
            );
            Notifier.notifySuccess("Password updated successfully. You can now log in with your new password.");
            setLoginPhase('login');
        } catch (error) {
            console.error("Updating password failed:", error);
            Notifier.notifyError("Failed to update password.");
        }

        // Release blocker after login
        flushSync(() => {
            setDisabled(false);
            setNavigationBlocked(false);
        });
    }


    return(
        <div id="container" className="container">
            {/* <!-- FORM SECTION --> */}
            <div className="row">
                {/* <!-- SIGN UP --> */}
                <div className="col align-items-center flex-col sign-up">
                    <div className="form-wrapper align-items-center" >
                        <form onSubmit={handleSignup} className="form sign-up" >
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input type="text" 
                                    name="text" 
                                    placeholder="Username" 
                                    pattern="^[A-Za-z]+[A-Za-z0-9._]+$"
                                    minLength={3}
                                    maxLength={30}
                                    title="Username can only contain letters, numbers, must start with a letter and of length between 3 to 30 characters"
                                    onChange={handleSignupFormVariables}
                                    required/>
                            </div>

                            <div className="input-group">
                                <i className='bx bxs-user'></i>
                                <input type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[A-Za-z]{2,}$"
                                    title="Please enter a valid email address in the format: username@example.com"
                                    onChange={handleSignupFormVariables}
                                    required/>
                                {errors.emailAlreadyExist && <p style={{color:"red"}}>Email already exists.</p>}

                            </div>
                            
                       
                            <div className="input-group">
                                <input
                                    id="password"
                                    type={passwordVisible ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    title="Must contain 8-64 characters, with at least one uppercase, one lowercase, one number, and one special character."
                                    onChange={handleSignupFormVariables}
                                    required/>
                                <img
                                    src={passwordVisible ? showPasswordIcon : hidePasswordIcon}
                                    alt={passwordVisible ? "Show password" : "Hide password"}
                                    className="password-toggle-icon"
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                />
                            </div>
                            <div style={{display: 
                                (signupFormVariables.password==null ||
                                signupFormVariables.password.length==0) && 'none'}}>
                                <ul className="password-requirements">
                                    <li style={{color: /.{8,64}/.test(signupFormVariables.password)?"green": "red"}}>At least 8 characters and at most 64 characters</li>
                                    <li style={{color: /[A-Z]/.test(signupFormVariables.password)?"green": "red"}}>At least one uppercase letter (A-Z)</li>
                                    <li style={{color: /[a-z]/.test(signupFormVariables.password)?"green": "red"}}>At least one lowercase letter (a-z)</li>
                                    <li style={{color: /\d/.test(signupFormVariables.password)?"green": "red"}}>At least one digit (0-9)</li>
                                    <li style={{color: /[!@#$%^&*()_+\-=\[\]{};':",.<>\/?\\|]/.test(signupFormVariables.password)?"green": "red"}}>At least one special character (!@#$%^&*()_+-=[]{};':",. &lt;&gt;/?\|)</li>
                                </ul>
                            </div>

                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input
                                    name="password" 
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Confirm Password" 
                                    pattern={signupFormVariables.password}
                                    title="Your passwords must match"
                                    required/>
                                <img
                                    src={passwordVisible ? showPasswordIcon : hidePasswordIcon}
                                    alt={passwordVisible ? "Show password" : "Hide password"}
                                    className="password-toggle-icon"
                                    onClick={() => setPasswordVisible(!passwordVisible)}/>
                            </div>
                            <button type="submit" disabled={disabled}>
                                {disabled ? <HashLoader size={20} color={"#fff"} /> : "Sign up"}
                            </button>
                            <div class="divider">
                                <span>or</span>
                            </div>
                            <div className="google-signin">
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                const userInfo = jwtDecode(credentialResponse.credential);
                                console.log("Google user info:", userInfo);

                                // Example: signup/login using Google data
                                // await signup(userInfo.name, userInfo.email, userInfo.sub);
                                navigate('/home');
                                }}
                                onError={() => {
                                console.log("Google Sign In Failed");
                                }}
                            />
                            </div>

                           

                            <p>
                                <span>
                                    Already have an account?
                                </span>
                                <Link onClick={(e)=>disabled?e.preventDefault():toggleRegistrationForm('login')} className="pointer">
                                    &nbsp;&nbsp;Log in here
                                </Link>
                            </p>
                        </form>
                    </div>
                
                </div>
                {/* <!-- END SIGN UP --> */}
                {/* <!-- SIGN IN --> */}
                <div className="col align-items-center flex-col sign-in">
                    <div className="form-wrapper align-items-center">
                        <form onSubmit={handleLogin} className="form sign-in" style={{display: loginPhase!='login'&&'none', animation:loginPhase=='login'&&'fadeIn 0.5s'}}>
                            <div className="input-group">
                                <i className='bx bxs-user'></i>
                                <input  name="email" placeholder="Email" required onChange={handleLoginFormVariables}/>
                            </div>
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input  name="password" placeholder="Password" required onChange={handleLoginFormVariables}/>
                                {errors.wrongPassword && <p style={{color:"red"}}>Entered password is not correct please try again or press <strong>Forgot your Passord</strong>.</p>}
                            
                            </div>

                            <Link onClick={(e) =>{e.preventDefault(); setLoginPhase('sendCode')}} className="pointer">
                                Forgot your password?
                            </Link>
                            
                            
                            <button type="submit" disabled={disabled}>
                                {disabled ? <HashLoader size={20} color={"#fff"} /> : "Log in"}
                            </button>
                            
                            <div class="divider">
                                <span>or</span>
                            </div>
                            <div className="google-signin">
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                const userInfo = jwtDecode(credentialResponse.credential);
                                console.log("Google user info:", userInfo);

                                // Example: signup/login using Google data
                                // await signup(userInfo.name, userInfo.email, userInfo.sub);
                                navigate('/home');
                                }}
                                onError={() => {
                                console.log("Google Sign In Failed");
                                }}
                            />
                            </div>
                            
                            <p>
                                <span>
                                    Don't have an account?
                                </span>
                                <Link onClick={(e)=>disabled?e.preventDefault():toggleRegistrationForm('signup')} className="pointer">
                                    &nbsp;&nbsp;Sign up here
                                </Link>
                            </p>
                        </form>

                        {/* Forgot Password */}
                        {/* Send code phase */}
                        <form onSubmit={handleSendCode} className="form sign-in send-code-form" style={{display: loginPhase!='sendCode'&&'none', animation:loginPhase=='sendCode'&&'fadeIn 0.5s'}}>
                            <div className="input-group">
                                <i className='bx bxs-user'></i>
                                <input type="email"  name="email" placeholder="Email" required onChange={handleForgotPasswordVariables}/>
                            </div>
                            <button type="submit" disabled={disabled}>
                                {disabled ? <HashLoader size={20} color={"#fff"} /> : "Send Code"}
                            </button>
                        </form>
                        {/* Verify code phase */}
                        <form onSubmit={handleVerifyCode} className="form sign-in send-code-form" style={{display: loginPhase!='verifyCode'&&'none', animation:loginPhase=='verifyCode'&&'fadeIn 0.5s'}}>
                            <p>Please copy and past the code sent to your email in the field below.</p>
                            <div className="input-group">
                                <i className='bx bxs-user'></i>
                                <input type="text" name="code" placeholder="Code" required onChange={handleForgotPasswordVariables}/>
                                {errors.wrongCode && <p style={{color:"red"}}>The code doesn't match the one sent to your email, please try again or press resend.</p>}
                            </div>
                            <button type="submit" disabled={disabled}>
                                {disabled ? <HashLoader size={20} color={"#fff"} /> : "Verify Code"}
                            </button>
                            <p>
                                <Link onClick={handleSendCode} className="pointer">
                                    Resend 
                                </Link>
                                <span>
                                    &nbsp;code.
                                </span>
                            </p>
                        </form>
                        {/* Update password phase */}
                        <form onSubmit={handleUpdatePassword} className="form sign-in" style={{display: loginPhase!='updatePassword'&&'none', animation:loginPhase=='updatePassword'&&'fadeIn 0.5s'}}>
                            <div className="input-group">
                                <input
                                    id="password"
                                    type={passwordVisible ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    title="Must contain 8-64 characters, with at least one uppercase, one lowercase, one number, and one special character."
                                    onChange={handleForgotPasswordVariables}
                                    required/>
                                <img
                                    src={passwordVisible ? showPasswordIcon : hidePasswordIcon}
                                    alt={passwordVisible ? "Show password" : "Hide password"}
                                    className="password-toggle-icon"
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                />
                            </div>
                            <div style={{display: 
                                (forgotPasswordVariables.password==null ||
                                forgotPasswordVariables.password.length==0) && 'none'}}>
                                <ul className="password-requirements">
                                    <li style={{color: /.{8,64}/.test(forgotPasswordVariables.password)?"green": "red"}}>At least 8 characters and at most 64 characters</li>
                                    <li style={{color: /[A-Z]/.test(forgotPasswordVariables.password)?"green": "red"}}>At least one uppercase letter (A-Z)</li>
                                    <li style={{color: /[a-z]/.test(forgotPasswordVariables.password)?"green": "red"}}>At least one lowercase letter (a-z)</li>
                                    <li style={{color: /\d/.test(forgotPasswordVariables.password)?"green": "red"}}>At least one digit (0-9)</li>
                                    <li style={{color: /[!@#$%^&*()_+\-=\[\]{};':",.<>\/?\\|]/.test(forgotPasswordVariables.password)?"green": "red"}}>At least one special character (!@#$%^&*()_+-=[]{};':",. &lt;&gt;/?\|)</li>
                                </ul>
                            </div>

                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input
                                    name="password" 
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Confirm Password" 
                                    pattern={forgotPasswordVariables.password}
                                    title="Your passwords must match"
                                    required/>
                                <img
                                    src={passwordVisible ? showPasswordIcon : hidePasswordIcon}
                                    alt={passwordVisible ? "Show password" : "Hide password"}
                                    className="password-toggle-icon"
                                    onClick={() => setPasswordVisible(!passwordVisible)}/>
                            </div>
                            <button type="submit" disabled={disabled}>
                                {disabled ? <HashLoader size={20} color={"#fff"} /> : "Update Password"}
                            </button>
                        </form>
                    </div>
                    <div className="form-wrapper">
            
                    </div>
                </div>
                {/* <!-- END SIGN IN --> */}
            </div>
            {/* <!-- END FORM SECTION --> */}
            {/* <!-- CONTENT SECTION --> */}
            <div className="row content-row">
                {/* <!-- SIGN IN CONTENT --> */}
                <div className="col align-items-center flex-col">
                    <div className="text sign-in">
                        <h2>
                            Welcome back
                        </h2>
        
                    </div>
                    <div className="img sign-in">
            
                    </div>
                </div>
                {/* <!-- END SIGN IN CONTENT --> */}
                {/* <!-- SIGN UP CONTENT --> */}
                <div className="col align-items-center flex-col">
                    <div className="img sign-up">
                    
                    </div>
                    <div className="text sign-up" >
                        <h2>
                            Join with us
                        </h2>
        
                    </div>
                </div>
                {/* <!-- END SIGN UP CONTENT --> */}
            </div>
            {/* <!-- END CONTENT SECTION --> */}
        </div>
    );
};
