function Audience() {
    const audience = [
        "Empresas que recién empiezan.",
        "Negocios que quieren crecer.",
        "MYPES que necesitan ordenarse.",
        "Empresarios que desean vender más.",
        "Organizaciones que buscan mejorar su clima laboral.",
        "Empresas que quieren aplicar IA de forma práctica.",
        "Negocios que necesitan soporte legal y preventivo.",
    ];

    return (
        <section className="container py-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold">¿A quién ayudamos?</h2>
                <p className="text-muted">
                    Trabajamos con organizaciones que buscan crecer de manera sostenible.
                </p>
            </div>

            <div className="row">
                {audience.map((item, index) => (
                    <div key={index} className="col-md-6 mb-3">
                        <div className="border rounded p-3 h-100">
                            ✅ {item}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Audience;