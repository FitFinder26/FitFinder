import { use, useEffect, useState } from "react";
import { Link} from "react-router-dom";
import './external-styles/RegistrationForm.css'
import { updateFormVariables, login, signup } from "../../../shared/components/RegistrationFormLogic";
import {HashLoader} from 'react-spinners';
import { flushSync } from "react-dom";

export default function RegistrationForm({ usedForm, setUsedForm, setNavigationBlocked }){
    const [signupFormVariables, setSignupFormVariables] = useState({});
    const [loginFormVariables, setLoginFormVariables] = useState({});
    const [disabled, setDisabled] = useState(false);

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
        setSignupFormVariables((prev) => updateFormVariables(e, prev));
    };

    const handleLoginFormVariables = (e) => {
        setLoginFormVariables((prev) => updateFormVariables(e, prev));
    };

    const handleSignup = async (e) => {
        // Block navigation
        flushSync(() => {
            setDisabled(true);
            setNavigationBlocked(true);
        });

        // Perform signup
        await signup(e, signupFormVariables);
                
        // Release blocker after signup
        flushSync(() => {
            setDisabled(false);
            setNavigationBlocked(false);
        }
        );
    };

    const handleLogin = async(e) => {
        // Block navigation
        flushSync(() => {
            setDisabled(true);
            setNavigationBlocked(true);
        });
        // Perform login
        await login(e, loginFormVariables);

        // Release blocker after login
        flushSync(() => {
            setDisabled(false);
            setNavigationBlocked(false);
        });
    };

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
                                    pattern="^[A-Za-z0-9._]+$"
                                    title="Username can only contain letters, numbers, underscores (_), and dots (.)"
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
                            </div>
                       
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" 
                                    name="password" 
                                    placeholder="Password"
                                    minLength="6"
                                    title="Password must be at least 6 characters long" 
                                    onChange={handleSignupFormVariables}
                                    required/>
                            </div>

                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" 
                                    name="password" 
                                    placeholder="Confirm Password" 
                                    pattern={signupFormVariables.password}
                                    title="Your passwords must match"
                                    required/>
                            </div>
                            <button type="submit" disabled={disabled}>
                                {disabled ? <HashLoader size={20} color={"#fff"} /> : "Sign up"}
                            </button>
                           

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
                        <form onSubmit={handleLogin} className="form sign-in">
                            <div className="input-group">
                                <i className='bx bxs-user'></i>
                                <input  name="email" placeholder="Email" required onChange={handleLoginFormVariables}/>
                            </div>
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input  name="password" placeholder="Password" required onChange={handleLoginFormVariables}/>
                            </div>
                            <button type="submit" disabled={disabled}>
                                {disabled ? <HashLoader size={20} color={"#fff"} /> : "Log in"}
                            </button>
                            <p>
                                <span>
                                    Don't have an account?
                                </span>
                                <Link onClick={(e)=>disabled?e.preventDefault():toggleRegistrationForm('signup')} className="pointer">
                                    &nbsp;&nbsp;Sign up here
                                </Link>
                            </p>
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
