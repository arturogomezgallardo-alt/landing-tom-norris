function WhyUs() {
    return (
        <section className="container py-5">
            <div className="row align-items-center">

                <div className="col-lg-6 mb-4">
                    <img
                        src="https://placehold.co/600x400"
                        alt="Equipo de consultoría"
                        className="img-fluid rounded shadow"
                    />
                </div>

                <div className="col-lg-6">
                    <h2 className="fw-bold mb-4">¿Por qué elegir Tom Norris?</h2>

                    <p className="text-muted">
                        Integramos áreas que normalmente trabajan por separado para ofrecer
                        una solución empresarial completa y estratégica.
                    </p>

                    <ul className="list-group list-group-flush mt-4">
                        <li className="list-group-item">
                            ✔ Gestión empresarial y estrategia.
                        </li>
                        <li className="list-group-item">
                            ✔ Asesoría jurídica preventiva.
                        </li>
                        <li className="list-group-item">
                            ✔ Psicología organizacional y clima laboral.
                        </li>
                        <li className="list-group-item">
                            ✔ Marketing y ventas.
                        </li>
                        <li className="list-group-item">
                            ✔ Seguridad y Salud en el Trabajo.
                        </li>
                        <li className="list-group-item">
                            ✔ Inteligencia Artificial aplicada a los negocios.
                        </li>
                    </ul>

                    <p className="mt-4 fw-semibold">
                        No entregamos soluciones aisladas; desarrollamos estrategias
                        integrales para que tu empresa crezca con orden, innovación y
                        sostenibilidad.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default WhyUs;