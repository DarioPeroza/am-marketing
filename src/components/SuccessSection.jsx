import { Component } from "react";
import sniper from '../img/icons/am-icons_sniper.svg'
import whatsappLogo from "../img/icons/am-icons_Whatsapp.svg"

class SuccessSection extends Component {
    render() {
        const {name, firstClass, WhatsappSend} = this.props
        return (
            <div className={`${firstClass} SuccessSection`} data-name={name}>
                <div className="SuccessSection-Content">
                    <img src={sniper} alt="Icono de mira"></img>
                    <h2>Planea tus objetivos</h2>
                    <p>Destacar y perdurar en internet, es algo que se ha vuelto muy dificil en los últimos años. Trabajaremos junto contigo para alcanzar los logros que requiere tu negocio</p>
                    <div 
                        className="WhatsApp-Button" 
                        onClick={() => WhatsappSend("Necesito una campaña publicitaria")}
                        >
                        <img src={whatsappLogo} alt="Logo de Whatsapp"/>
                        Quiero destacar
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