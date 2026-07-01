function CTA() {
    return (
        <section className="py-5 bg-dark text-white">
            <div className="container text-center">

                <h2 className="fw-bold mb-3">
                    Tu empresa puede crecer con más orden, estrategia y tecnología
                </h2>

                <p className="text-light mb-4">
                    Agenda un diagnóstico empresarial con Tom Norris y descubre qué áreas puedes mejorar desde hoy.
                </p>

                <a
                    href="https://wa.me/51999999999"
                    className="btn btn-warning fw-bold px-4 py-2"
                    style={{ backgroundColor: "#C8A75B", border: "none" }}
                >
                    Solicitar diagnóstico por WhatsApp
                </a>

            </div>
        </section>
    );
}

export default CTA;