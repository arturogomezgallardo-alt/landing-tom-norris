import heroImage from "../assets/images/hero.png";

function Hero() {
    return (
        <section id="hero" className="container py-5">
            <div className="row align-items-center">

                <div className="col-lg-6">
                    <h1 className="display-4 fw-bold">
                        Impulsamos empresas que quieren crecer con orden, estrategia y tecnología
                    </h1>

                    <p className="lead my-4">
                        En Tom Norris brindamos soporte integral a empresarios,
                        emprendedores y organizaciones.
                    </p>

                    <a href="#contact" className="btn btn-dark me-3">
                        Solicitar diagnóstico
                    </a>

                    <a href="#services" className="btn btn-outline-dark">
                        Conocer servicios
                    </a>
                </div>

                <div className="col-lg-6">
                    <img
                        src={heroImage}
                        alt="Equipo empresarial"
                        className="img-fluid rounded shadow"
                    />
                </div>

            </div>
        </section>
    );
}

export default Hero;