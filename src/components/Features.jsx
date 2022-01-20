import { Component } from "react";
import VideoContainer from "./VideoContainer";
import horizontalVideo from "../video/Horizontal-Cover-Video.mp4";
import whatsappLogo from "../img/icons/am-icons_Whatsapp.svg"

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
                    <p>Lleve su consultorio al siguiente nivel. Gestionamos sus campañas de publicidad basándonos en su especialidad médica, y objetivos que requiera.</p>
                    <div 
                        className="WhatsApp-Button" 
                        onClick={() => WhatsappSend("Necesito una campaña publicitaria")}
                        >
                        <img src={whatsappLogo} alt="Logo de Whatsapp"/>
                        ¡Escríbenos, ya!
                    </div>
                </div>
                <div className="Features-Content">
                    <h3>Mejor organización</h3>
                    <p>Organiza de manera sencilla y detallada a tus pacientes. Agenda visitas médicas, y protege información delicada</p>
                </div>
                <div className="Features-Content">
                    <h3>Marketing basado en objetivos</h3>
                    <p>Nos basamos en objetivos para un tiempo determinado, preparamos estrategias completas para cada área digital de su empresa, y alcanzar tu objetivo.</p>
                </div>
            </div>
        )
    }
}
export default Features