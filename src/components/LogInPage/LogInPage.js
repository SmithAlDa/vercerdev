import React, { useState } from 'react';
import './LogInPage.css'

function LogInPage({LogIn, error}) {

    const [details, setDetails] = useState({user:"",password:""});

    const submitHandler = e => {
        e.preventDefault();
        
        LogIn(details);
    }

    return (
        <div className="container">
            <div>
                <img className="logoLog" src={require('./logo.svg').default} alt="VERCER LOGO"/>
                <form onSubmit={submitHandler}>
                <h1>Log In</h1>
                    <div  id="userLogInForm">
                        <tbody>
                            <tr>Usuario:
                                <td><input type="text" name="user" id="user" placeholder="Ingresa tu Usuario" onChange={e => setDetails({...details, user: e.target.value})} value={details.user}/></td>
                            </tr>
                            <tr>Contraseña:
                                <td><input type="password" name="password" id="password" placeholder="Ingresa tu Contraseña" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/></td>
                            </tr>
                        </tbody>
                    </div>
                    <div>
                        <button type="submit" className="btnsubmit">Log In</button>
                    </div>
                </form>
                <div>{(error !== "") ? (<div className="error">{error}</div>): ""}</div>
            </div>
        </div>
    )
}

export default LogInPage
