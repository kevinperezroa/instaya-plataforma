import React from 'react'
import NavbarLogo from '../../components/NavbarLogo'
import {Link} from 'react-router-dom'
const CreacionOrden = () => {
    return (
        <>
            <NavbarLogo />
            <div className="row gx-0 justify-content-center formulario3">
                <div className="col-lg-8 col-xl-8">
                    <form id="contactForm" method="post" action="#">
                        <div className="date form-group mt-5">
                            <p><label htmlFor="fecha" className="label-form me-2 fw-bolder">Fecha</label>
                            <input type="date"/>

                                <label className="ms-3 me-2 fw-bolder">Hora</label>
                                <input type="time"/>
                            </p>

                        </div>
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
                        <div className="form-floating mb-2">
                            <input className="form-control input-box" id="direccionRecogida" type="text" placeholder="Dirección de recogida" />
                            <label htmlFor="direccionRecogida">Dirección de recogida</label>
                        </div>

                        <div className="form-floating mb-2">
                            <input className="form-control input-box" id="ciudadRecogida" type="text" placeholder="Ciudad de recogida" />
                            <label htmlFor="ciudadRecogida">Ciudad de recogida</label>
                        </div>

                        <div className="form-floating mb-2">
                            <input className="form-control input-box" id="nombreDestinatario" type="text" placeholder="Nombre destinatario" />
                            <label htmlFor="nombreDestinatario">Nombre del destinatario</label>
                        </div>

                        <div className="form-floating mb-2">
                            <input className="form-control input-box" id="cedulaDestinatario" type="text" placeholder="Cédula/NIT del destinatario" />
                            <label htmlFor="cedulaDestinatario">Cedula/NIT del destinatario</label>
                        </div>

                        <div className="form-floating mb-2">
                            <input className="form-control input-box" id="direccionEntrega" type="text" placeholder="Dirección de entrega" />
                            <label htmlFor="direccionEntrega">Dirección de entrega</label>
                        </div>

                        <div className="form-floating mb-2">
                            <input className="form-control input-box" id="ciudadEntrega" type="text" placeholder="Ciudad de entrega" />
                            <label htmlFor="ciudadEntrega">Ciudad de entrega</label>
                        </div>
                        <div className="botones mt-4">
                        <Link className="btn btn-link ms-2" to="/">Cancelar</Link>
                            <button className="btn btn-primary" id="submitButton" type="submit">Crear orden</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreacionOrden