import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className="navbar navbar-expand-lg fixed-top"
            style={{
                backgroundColor: scrolled ? "#111" : "#fff",
                transition: "0.3s",
                boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.2)" : "none",
            }}
        >
            <div className="container">

                {/* Logo */}
                <a className="navbar-brand fw-bold" href="#hero">
                    <span style={{ color: "#C8A75B", fontWeight: "800", fontSize: "1.4rem" }}>
                        TN
                    </span>
                </a>

                {/* Toggle */}
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links */}
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav mx-auto">

                        {[
                            ["Inicio", "#hero"],
                            ["Nosotros", "#about"],
                            ["Servicios", "#services"],
                            ["Método", "#method"],
                            ["Blog", "#blog"],
                            ["Contacto", "#contact"],
                        ].map(([name, link], i) => (
                            <li key={i} className="nav-item">
                                <a
                                    className="nav-link"
                                    href={link}
                                    style={{ color: scrolled ? "#fff" : "#111" }}
                                >
                                    {name}
                                </a>
                            </li>
                        ))}

                    </ul>

                    {/* CTA */}
                    <a
                        href="https://wa.me/51999999999"
                        className="btn"
                        style={{
                            backgroundColor: "#C8A75B",
                            color: "#111",
                            fontWeight: "600",
                        }}
                    >
                        <FaWhatsapp className="me-2" />
                        Diagnóstico
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;