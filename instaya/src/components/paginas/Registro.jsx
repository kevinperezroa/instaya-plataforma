import React from 'react'
import {Link} from 'react-router-dom'
import NavbarLogo from '../../components/NavbarLogo'

const Registro = () => {
    return (
        <>
            <NavbarLogo />
            <div className="row gx-0 justify-content-center formulario2">
                <div className="col-lg-8 col-xl-8">
                    <form id="contactForm" method="post" action="#">
                    <br></br>
                    <p className="cancelar mb-0 mt-0"><Link className="nav-link" to='/'>Cancelar</Link></p>
                    <div className="form-floating mb-2">
                            <input className="form-control input-box" id="nombre" type="text" placeholder="Ingresa tu nombre completo" />
                            <label htmlFor="nombre">Nombre completo</label>
                        </div>
                    
                        <div className="form-floating mb-2">
                            <input className="form-control input-box" id="usuario" type="text" placeholder="Ingresa tu nombre completo"  />
                            <label htmlFor="usuario">Ingrese su usuario</label>
                        </div>

                        <div className="form-floating mb-2">
                            <input className="form-control input-box" id="email" type="email" placeholder="name@example.com"  />
                            <label htmlFor="email">Correo electronico</label>
                        </div>

                        <div className="form-floating mb-2">
                            <input className="form-control input-box" id="password" type="password" placeholder="Ingresa tu contraseña" />
                            <label htmlFor="password">Contraseña</label>
                        </div>

                        <div className="form-floating mb-2">
                            <input className="form-control input-box" id="password-r" type="password-repeat" placeholder="Repita su contraseña"/>
                            <label htmlFor="password-repeat">Repita su contraseña</label>
                        </div>
                        <div className="d-grid"><button className="btn btn-primary mt-4" id="submitButton" type="submit">Registrarse</button></div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Registro