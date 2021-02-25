import React from "react";
import { Link } from "react-router-dom";
import  "./style.module.scss";

const Login = () => {
  return (
    <div>
      <h1>Login page</h1>
      <Link to={"/home"}>Homepage</Link>
      
       <div className="login"> 
        <h1 className="login_heading">Welcome to Jay Enterprise</h1>

            <div className="login_box">
                <div className="login_box--heading">Login</div>
                <hr/>
                <div className="login_box--form">
                    
                  

                    <p className="login_box--form--ep">User Id <span>*</span></p>
                    <input type="email" 
                    placeholder="Email ID" 
                    className="login_box--form--email input"/>
                    <br/>
                    <p className="login_box--form--pp">Password<span>*</span></p>
                    <input type="password" 
                    placeholder="Password" 
                    className="login_box--form--password input"/>

                    <p class="error">this is error message</p>
                   

                    <div className=" login_box--form--btn btn-red">Login</div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Login;
