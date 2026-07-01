import ServiceCard from "../components/cards/ServiceCard";

const services = [
    {
        title: "Seguridad y Salud en el Trabajo",
        description:
            "Implementamos sistemas de SST para cumplir la normativa y proteger a los trabajadores.",
    },
    {
        title: "Ventas",
        description:
            "Diseñamos estrategias comerciales, procesos de atención y cierre de ventas.",
    },
    {
        title: "Marketing Empresarial",
        description:
            "Posicionamos tu marca y fortalecemos tu presencia digital.",
    },
    {
        title: "Capacitación Organizacional",
        description:
            "Capacitaciones en liderazgo, clima laboral, atención al cliente y trabajo en equipo.",
    },
    {
        title: "Asesoría Jurídica Empresarial",
        description:
            "Soporte legal preventivo, contratos y cumplimiento normativo.",
    },
    {
        title: "Inteligencia Artificial",
        description:
            "Implementamos herramientas de IA para mejorar productividad y toma de decisiones.",
    },
];

function Services() {
    return (
        <section id="services" className="container py-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Nuestros Servicios</h2>
                <p className="text-muted">
                    Soluciones integrales para impulsar el crecimiento de tu empresa.
                </p>
            </div>

            <div className="row">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default Services;