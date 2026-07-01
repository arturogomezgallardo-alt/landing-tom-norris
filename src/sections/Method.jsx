function Method() {
    const steps = [
        {
            title: "Diagnóstico",
            description: "Analizamos la situación real de la empresa.",
        },
        {
            title: "Diseño",
            description: "Creamos una solución adaptada a las necesidades del negocio.",
        },
        {
            title: "Implementación",
            description: "Acompañamos el proceso con acciones concretas y seguimiento.",
        },
        {
            title: "Medición",
            description: "Evaluamos los resultados y proponemos mejoras continuas.",
        },
    ];

    return (
        <section id="method" className="container py-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Método Tom Norris</h2>
                <p className="text-muted">
                    No vendemos teoría. Construimos soluciones aplicables.
                </p>
            </div>

            <div className="row">
                {steps.map((step, index) => (
                    <div key={index} className="col-md-6 col-lg-3 mb-4">
                        <div className="card h-100 border-0 shadow-sm text-center">
                            <div className="card-body">
                                <div
                                    className="rounded-circle bg-dark text-white d-flex justify-content-center align-items-center mx-auto mb-3"
                                    style={{ width: "60px", height: "60px", fontSize: "1.2rem" }}
                                >
                                    {index + 1}
                                </div>

                                <h5 className="fw-bold">{step.title}</h5>

                                <p className="text-muted">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Method;