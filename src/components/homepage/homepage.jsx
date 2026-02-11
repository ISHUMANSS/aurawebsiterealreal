import "./homepage.css";
import { useEffect, useState } from "react";
import auraoldlogo from "../../assets/site_icon.png";
import auranewlogo from "../../assets/auranewlogo.png";

function HomePage() {
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
        // Trigger glitch after 1 second
        const timer = setTimeout(() => {
            setGlitch(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="HomePage">
            <div className={`logo-container ${glitch ? "glitch-active" : ""}`}>
                <img src={auraoldlogo} alt="AURA old Logo" className="logo old" />
                <img src={auranewlogo} alt="AURA new Logo" className="logo new" />
            </div>
        </div>
    );
}

export default HomePage;
