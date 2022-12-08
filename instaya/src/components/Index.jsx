import veinte from '../assets/img/24-7.png';
import rapido from '../assets/img/rapido.png';
import tiempo from '../assets/img/tiempo.png';

const Index = () =>{
    return(
        <section className="py-5" id="features">
        <div className="container px-5 my-5">
            <div className="row gx-5">
                <div className="col-lg-10 ms-5">
                    <div className="row gx-5 row-cols-2 row-cols-md-3">
                        <div className="col mb-5 h-100 main-text">
                            <div className=""><img src={rapido} alt="rapido" width="250px"/></div>
                            <h2 className="h5">Confiabilidad</h2>
                            <p className="mb-0">Tu pedido siempre llegará intacto</p>
                        </div>
                        <div className="col mb-5 h-100 main-text">
                            <div className=""><img src={veinte} alt="24-7" width="110px"/></div>
                            <h2 className="h5">Disponibilidad 24/7</h2>
                            <p className="mb-0">Estamos disponibles para tí 24 horas al día los siete días a la semana</p>
                        </div>
                        <div className="col mb-5 h-100 main-text">
                            <div className=""><img src={tiempo} alt="a-tiempo" width="90px"/></div>
                            <h2 className="h5">Entregas a tiempo</h2>
                            <p className="mb-0">Siempre nos encargamos de entregar nuestros pedidos a tiempo</p>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Index