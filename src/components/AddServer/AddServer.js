import React from "react";
import './AddServer.css';

class AddServer extends React.Component{
    render() {
        return (
            <div className="InputNewServer">
                <form>
                <div className="InputServer">
                    <span>Servidor: </span>
                    <input type="text" placeholder="Ingresa el nombre del servidor"/>
                </div>
                <div className="InputIP">
                    <span>Ip: </span>
                    <input type="text" placeholder="Ingresa La Dirección IP"/>
                </div>
                <div className="InputProtocol"></div>
                    <span>Protocol: </span>
                    <input type="text" placeholder="Ingresa El Numero de Certificado"/>
                <div className="PasswordNSubmit">
                    <span>Password: </span> <input type="password"/>
                    <button type="submit">Agregar Servidor</button>
                </div>
                </form>
            </div>
        )
    }
}

export default AddServer;