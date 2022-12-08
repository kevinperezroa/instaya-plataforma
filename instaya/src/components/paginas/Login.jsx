import React from 'react'
import NavbarLogo from '../../components/NavbarLogo'
const Login = () => {
    return (
        <>
            <NavbarLogo />
            <div className="row gx-0 justify-content-center formulario">
                <div className="col-lg-8 col-xl-8 mt-5">

                    <form id="contactForm" method="post" action="#">
                        <div className="form-floating mb-3">
                            <input className="form-control input-box" id="email" type="email" placeholder="name@example.com" />
                            <label htmlFor="email">Correo electronico</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control input-box" id="password" type="password" placeholder="Ingresa tu contraseña" />
                            <label htmlFor="name">Contraseña</label>
                        </div>
                        <div className="d-grid"><button className="btn btn-primary" id="submitButton" type="submit">Iniciar sesión</button></div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login