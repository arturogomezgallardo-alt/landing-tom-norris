function Contact() {
    return (
        <section id="contact" className="container py-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Contacto</h2>
                <p className="text-muted">
                    Escríbenos y te responderemos lo antes posible.
                </p>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-6">

                    <form className="p-4 border rounded shadow-sm">

                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" placeholder="Tu nombre" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Correo</label>
                            <input type="email" className="form-control" placeholder="Tu correo" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Mensaje</label>
                            <textarea
                                className="form-control"
                                rows="4"
                                placeholder="¿En qué podemos ayudarte?"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-dark w-100">
                            Enviar mensaje
                        </button>

                    </form>

                </div>
            </div>
        </section>
    );
}

export default Contact;