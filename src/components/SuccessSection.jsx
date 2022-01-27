import { Component } from "react";
import sniper from '../img/icons/am-icons_sniper.svg'
import whatsappLogo from "../img/icons/am-icons_Whatsapp.svg"

class SuccessSection extends Component {
    render() {
        const {id, name, firstClass, WhatsappSend} = this.props
        return (
            <div id={id} className={`${firstClass} SuccessSection`} data-name={name}>
                <div className="SuccessSection-Content">
                    <img src={sniper} alt="Icono de mira"></img>
                    <h2>Planea tus objetivos</h2>
                    <p>Destacar y perdurar en internet, es algo que se ha vuelto muy dificil en los últimos años. Trabajaremos juntos para alcanzar las metas que desee como profesional de la salud</p>
                    <div 
                        className="WhatsApp-Button" 
                        onClick={() => WhatsappSend("Necesito una campaña publicitaria")}
                        >
                        <img src={whatsappLogo} alt="Logo de Whatsapp"/>
                        ¡Contáctanos ahora!
                    </div>
                </div>
                <div className="SuccessSection-Img-Container">
                    <div className="SuccessSection-Img"></div>
                </div>
            </div>
        )
    }
}
export default SuccessSection