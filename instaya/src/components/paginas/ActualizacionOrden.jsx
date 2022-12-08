import React from 'react'
import NavbarLogo from '../../components/NavbarLogo'
import {Link} from 'react-router-dom'
const ActualizacionOrden = () => {
    return (
        <>
            <NavbarLogo />
            <div className="row gx-0 justify-content-center formulario4">
                <div className="col-lg-8 col-xl-8">
                    <br></br><br></br>
                    <form id="contactForm" method="post" action="#">
                        <div className="date form-group">
                            <p><label htmlFor="fecha" className="label-form">Fecha</label>
                                <input className="fecha" id="fecha" type="text" />

                                <label htmlFor="hora" className="label-form">Hora</label>
                                <input className="hora" id="hora" type="text" />
                            </p>
                        </div>
                        
                        <label className="me-2">Estado</label>
                        <select name="select" className="w-25">
                            <option value="guardado">Guardado</option>
                            <option value="cancelado">Cancelado</option>
                            <option value="otro">Otro</option>

                        </select>


                        <div className="medidas form-group border border-2 rounded mt-4">
                            <p><label htmlFor="largo" className="label-form mt-3">Largo</label>
                                <input className="medida" id="largo" type="text" />

                                <label htmlFor="alto" className="label-form">Alto</label>
                                <input className="medida" id="alto" type="text" />
                            </p>
                            <p><label htmlFor="ancho" className="label-form">Ancho</label>
                                <input className="medida" id="ancho" type="text" />

                                <label htmlFor="peso" className="label-form">Peso</label>
                                <input className="medida" id="peso" type="text" />
                            </p>
                        </div>
                        <div className="form-floating mt-2">
                            <input className="form-control input-box" id="direccionRecogida" type="text" placeholder="Dirección de recogida" />
                            <label htmlFor="direccionRecogida">Dirección de recogida</label>
                        </div>

                        <div className="form-floating mb-1">
                            <input className="form-control input-box" id="ciudadRecogida" type="text" placeholder="Ciudad de recogida" />
                            <label htmlFor="ciudadRecogida">Ciudad de recogida</label>
                        </div>

                        <div className="form-floating mb-1">
                            <input className="form-control input-box" id="nombreDestinatario" type="text" placeholder="Nombre destinatario" />
                            <label htmlFor="nombreDestinatario">Nombre del destinatario</label>
                        </div>

                        <div className="form-floating mb-1">
                            <input className="form-control input-box" id="cedulaDestinatario" type="text" placeholder="Cédula/NIT del destinatario" />
                            <label htmlFor="cedulaDestinatario">Cédula/NIT del destinatario</label>
                        </div>

                        <div className="form-floating mb-1">
                            <input className="form-control input-box" id="direccionEntrega" type="text" placeholder="Dirección de entrega" />
                            <label htmlFor="direccionEntrega">Dirección de entrega</label>
                        </div>

                        <div className="form-floating mb-1">
                            <input className="form-control input-box" id="ciudadEntrega" type="text" placeholder="Ciudad de entrega" />
                            <label htmlFor="ciudadEntrega">Ciudad de entrega</label>
                        </div>
                        <div className="botones mt-5">
                            <Link className="btn btn-link" to="/">Cancelar</Link>
                            <button className="btn btn-primary" id="submitButton" type="submit">Actualizar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ActualizacionOrden