function ServiceCard({ title, description }) {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                    <h5 className="card-title fw-bold">{title}</h5>
                    <p className="card-text text-muted">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;