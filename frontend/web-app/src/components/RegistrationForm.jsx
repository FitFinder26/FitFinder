import { useEffect } from "react";
import { Link} from "react-router-dom";
import './external-styles/RegistrationForm.css'
import { useOutletContext } from "react-router-dom";
export default function RegistrationForm({ usedForm, setUsedForm }){

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
    

   
    return(
        <div id="container" className="container">
            {/* <!-- FORM SECTION --> */}
            <div className="row">
                {/* <!-- SIGN UP --> */}
                <div className="col align-items-center flex-col sign-up">
                    <div className="form-wrapper align-items-center" >
                        <form onSubmit={(e)=>{e.preventDefault()}} className="form sign-up" >
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input type="text" name="text" placeholder="Username" required/>
                            </div>

                            <div className="input-group">
                                <i className='bx bxs-user'></i>
                                <input type="email" name="email" placeholder="Email" required/>
                            </div>
                       
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" name="password" placeholder="Password" required/>
                            </div>

                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" name="password" placeholder="Confirm Password" required/>
                            </div>
                            <button type="submit">
                                Sign up
                            </button>
                           

                            <p>
                                <span>
                                    Already have an account?
                                </span>
                                <Link onClick={()=>toggleRegistrationForm('login')} className="pointer">
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
                        <form onSubmit={(e)=>{e.preventDefault()}} className="form sign-in">
                            <div className="input-group">
                                <i className='bx bxs-user'></i>
                                <input  name="email" placeholder="Email" required/>
                            </div>
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input  name="password" placeholder="Password" required/>
                            </div>
                            <button type="submit">
                                login
                            </button>
                            <p>
                                <span>
                                    Don't have an account?
                                </span>
                                <Link onClick={()=>toggleRegistrationForm('signup')} className="pointer">
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
