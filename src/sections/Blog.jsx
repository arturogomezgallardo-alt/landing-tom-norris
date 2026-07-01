function Blog() {
    const posts = [
        {
            title: "Seguridad y Salud en el Trabajo en MYPES",
            category: "SST",
        },
        {
            title: "Estrategias de ventas para pequeñas empresas",
            category: "Ventas",
        },
        {
            title: "Cómo mejorar el clima laboral en tu empresa",
            category: "RR.HH.",
        },
    ];

    return (
        <section id="blog" className="container py-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Blog Empresarial</h2>
                <p className="text-muted">
                    Contenido educativo para mejorar la gestión de tu empresa.
                </p>
            </div>

            <div className="row">
                {posts.map((post, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body d-flex flex-column">

                                <span className="badge bg-dark mb-2 align-self-start">
                                    {post.category}
                                </span>

                                <h5 className="fw-bold">{post.title}</h5>

                                <p className="text-muted mt-2">
                                    Artículo enfocado en mejorar la gestión empresarial y la toma de decisiones.
                                </p>

                                <button className="btn btn-outline-dark mt-auto">
                                    Leer más
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Blog;