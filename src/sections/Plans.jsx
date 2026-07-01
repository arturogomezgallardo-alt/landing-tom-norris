function Plans() {
    const plans = [
        {
            title: "Plan Inicio Empresarial",
            description:
                "Dirigido a emprendedores y negocios que necesitan una base sólida para iniciar con orden, estrategia y cumplimiento.",
        },
        {
            title: "Plan Empresa en Crecimiento",
            description:
                "Ideal para empresas que ya venden y buscan optimizar sus procesos, fortalecer su gestión y aumentar su productividad.",
        },
        {
            title: "Plan Transformación Empresarial",
            description:
                "Pensado para organizaciones que desean profesionalizar su gestión, capacitar a su equipo e incorporar inteligencia artificial.",
        },
    ];

    return (
        <section id="plans" className="container py-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Planes de Trabajo</h2>
                <p className="text-muted">
                    Soluciones adaptadas a la etapa de crecimiento de tu empresa.
                </p>
            </div>

            <div className="row">
                {plans.map((plan, index) => (
                    <div key={index} className="col-lg-4 mb-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body d-flex flex-column">
                                <h4 className="fw-bold mb-3">{plan.title}</h4>

                                <p className="text-muted flex-grow-1">
                                    {plan.description}
                                </p>

                                <a href="#contact" className="btn btn-dark me-3">
                                    Solicitar información
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Plans;