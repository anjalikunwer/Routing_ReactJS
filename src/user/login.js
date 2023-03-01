import {useNavigate} from "react-router-dom";
import React,{useEffect,useState} from 'react';

const UserLogin = (props)=>
{
    const navigate = useNavigate();
    const {input,userID,userPassword,email} = props;
    if((userID == "anjali@gmail.com") && (userPassword == "anjali"))
    {
        sessionStorage.setItem("email",email);
        navigate(`/home`);
    }
    else
    {
        alert("Invalid Email ID and Password");
    }

 
    return (
        <>
            <div>
                <form className='form-control text-center'>
                    <table>
                        <th colSpan={2}>Login Page</th>
                        <tr>
                            <td><label>Email  : </label></td>
                            <td><input type='email' name="email" value={input} onChange={e=>userID} placeholder='Enter Your Email Id'/></td>
                        </tr>
                        <tr>
                            <td><label>Password  : </label></td>
                            <td><input type='password' name="password" value={input} onChange={e=>userPassword} placeholder='Enter Password'/></td>
                        </tr>
                        <tr>
                        <td colSpan={2}><input type='submit' value="Login" onClick={()=>navigate("/home")}/></td>
                        </tr>
                    </table>
                </form>
            </div>
        </>
        
    );

}

export default UserLogin;