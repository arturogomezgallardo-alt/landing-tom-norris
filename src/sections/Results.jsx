function Results() {
    const results = [
        "Más orden interno.",
        "Mejores procesos empresariales.",
        "Mayor productividad del equipo.",
        "Mejor clima laboral.",
        "Incremento de ventas.",
        "Reducción de riesgos legales.",
        "Mayor uso de tecnología e IA.",
        "Equipos más capacitados.",
    ];

    return (
        <section className="container py-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Resultados esperados</h2>
                <p className="text-muted">
                    Lo que buscamos lograr en tu empresa.
                </p>
            </div>

            <div className="row">
                {results.map((item, index) => (
                    <div key={index} className="col-md-6 col-lg-3 mb-3">
                        <div className="p-3 border rounded shadow-sm h-100 text-center">
                            <div style={{ fontSize: "1.5rem" }}>📌</div>
                            <p className="mb-0 mt-2">{item}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Results;