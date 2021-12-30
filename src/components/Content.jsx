import { Component } from "react";
import Cover from "./Cover";
import Features from "./Features";
import SuccessSection from "./SuccessSection";
import ServicesSection from "./ServicesSection";
import Clients from "./Clients";
import whatsappLogo from "../img/icons/am-icons_Whatsapp.svg"

class Content extends Component {
    render() {
        const {WhatsappSend} = this.props
        return (
            <div className="App-Content" id="App-Content">
                <Cover 
                    firstClass="Section" 
                    name="Inicio"
                    WhatsappSend={(description) => WhatsappSend(description)}
                    />
                <Features 
                    firstClass="Section" 
                    name="Características"
                    WhatsappSend={(description) => WhatsappSend(description)}
                />
                <SuccessSection 
                    firstClass="Section" 
                    name="¿Por qué nosotros?"
                />
                <Clients 
                    firstClass="Section" 
                    name="Opiniones"
                />
                <ServicesSection 
                    firstClass="Section" 
                    name="Servicios" 
                    WhatsappSend={(description) => WhatsappSend(description)}
                />
                <div onClick={() => WhatsappSend("Necesito saber sobre ")} className="WhatsApp-Fixed-Button">
                    <img src={whatsappLogo} alt="Logo de Whatsapp" />
                </div>
            </div>
        )
    }
}
export default Content