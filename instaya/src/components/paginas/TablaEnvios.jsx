import React from "react";
import {Link} from 'react-router-dom'
import NavbarLogo from '../../components/NavbarLogo'
import { useEffect, useState } from "react";

export const TablaEnvios = () => {
    const[Ordenes, setOrdenes] =useState(null)

    useEffect(() => {

    })

    return (
        <>
          <NavbarLogo />
            <div id="cont__tabla-estado">
                <div>
                    <h2 className="display-8 fw-bolder text-purple mt-4">Lista de ordenes</h2>

                </div>
                <div id="cont__tabla-estado1" className="m-0 row justify-content-center">
                    <table className="table table-striped mt-5 w-75">
                        <thead>
                            <tr>
                                <th scope="col">Codigo</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Ciudad de entrega</th>
                                <th scope="col">Direccion de entrega</th>
                                <th scope="col">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/*{Ordenes != null ? Ordenes.map((Ordenes, index)) => {
                            return(*/}

                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Cra 23C No 98 - 12</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div>
                    <button type="submit" className="btn btn-secondary mt-5" id="botonf3">
                        Crear Orden
                    </button>
                </div>
            </div>


        </>
    );
};

export default TablaEnvios