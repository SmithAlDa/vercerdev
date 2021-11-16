import React from "react";

class ViewServers extends React.Component {
    render () {
        return (
            <div className="ViewServers">
                <h1>Servidores</h1>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Usuario</th>
                        <th scope="col">Estatus</th>
                        <th scope="col">Servidor</th>
                        <th scope="col">IP</th>
                        <th scope="col">App</th>
                        <th scope="col">Certificado</th>
                        <th scope="col">Registro</th>
                        <th scope="col">Caducidad</th>
                        <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Activo</td>
                        <td>1</td>
                        <td>111.111.111</td>
                        <td>2</td>
                        <td>EV SSL</td>
                        <td>13/11/2020</td>
                        <td>13/11/2021</td>
                        <td>smithaldavalos@gmail.com</td>
                        </tr>
                        </tbody>
                    </table>
            </div>
        )
    }
}

export default ViewServers;