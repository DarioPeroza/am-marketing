import { Component } from "react";
import VideoContainer from "./VideoContainer";
import horizontalVideo from "../video/pexels-Production-Id-4496268-1.webm";

class Features extends Component {
    render() {
        const {name, firstClass, WhatsappSend, containerId} = this.props
        return (
            <div className={`${firstClass} Features`} data-name={name}>
                <div className="Features-Title">
                    <h2><strong>¿Quieres resultados?</strong><span> Invierte con nosotros de forma segura</span></h2>
                </div>
                <div className="Features-Img"></div>
                <div className="Features-Video">
                    <VideoContainer 
                        src={horizontalVideo} 
                        containerId={containerId || "App-Content"}
                    />
                </div>
                <div className="Features-Content Features-Main-Content">
                    <h2>Marketing de rendimiento</h2>
                    <p>Cada empresa es única y diferente, y en AM Marketing Digital entendemos eso. Es por esto que adaptamos el presupuesto a tus necesidades y objetivos a fin de que obtengas campañas efectivas y rentables.</p>
                    <div className="WhatsApp-Button" onClick={() => WhatsappSend("Necesito una campaña publicitaria")}>Haz una campaña</div>
                </div>
                <div className="Features-Content">
                    <h3>Marketing basado en objetivos</h3>
                    <p>Nos basamos en objetivos para un tiempo determinado, preparamos estrategias completas para cada área digital de su empresa, y alcanzar tu objetivo.</p>
                </div>
                <div className="Features-Content">
                    <h3>Asistencia profesional</h3>
                    <p>Profesionales con años de experiencia, para realizar tu proyecto y darte asesoramiento.</p>
                </div>
            </div>
        )
    }
}
export default Features