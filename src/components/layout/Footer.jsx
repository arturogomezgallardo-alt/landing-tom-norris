function Footer() {
    return (
        <footer className="bg-dark text-light py-5 mt-5">
            <div className="container">

                <div className="row">

                    {/* Marca */}
                    <div className="col-md-4 mb-4">
                        <h4 className="fw-bold">Tom Norris</h4>
                        <p className="text-muted">
                            Estrategia, gestión e innovación para empresas que quieren crecer.
                        </p>
                    </div>

                    {/* Enlaces */}
                    <div className="col-md-4 mb-4">
                        <h5>Enlaces</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light text-decoration-none">Inicio</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Servicios</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Método</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
                            <li><a href="#" className="text-light text-decoration-none">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div className="col-md-4 mb-4">
                        <h5>Contacto</h5>
                        <p className="text-muted mb-1">📍 Lima, Perú</p>
                        <p className="text-muted mb-1">📧 contacto@tomnorris.com</p>
                        <p className="text-muted">📱 +51 999 999 999</p>
                    </div>

                </div>

                <hr className="border-secondary" />

                <div className="text-center text-muted">
                    © {new Date().getFullYear()} Tom Norris. Todos los derechos reservados.
                </div>

            </div>
        </footer>
    );
}

export default Footer;