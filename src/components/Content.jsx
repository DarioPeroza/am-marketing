import { Component } from "react";
import Cover from "./Cover";
import Contact from "./Contact";
import Features from "./Features";
import SuccessSection from "./SuccessSection";
import ServicesSection from "./ServicesSection";
import Clients from "./Clients";
import whatsappLogo from "../img/icons/am-icons_Whatsapp_Color.svg"

const appId = "App-Content"

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowWidth: window.innerWidth
        }
    }
    componentDidMount() {
        window.addEventListener("resize", () => {
            this.setState({windowWidth: window.innerWidth})
        })
    }
    showFeatures() {
        if (this.state.windowWidth > 800) {
            const {WhatsappSend} = this.props
            return (
                <Features 
                    firstClass="Section" 
                    name="Características"
                    WhatsappSend={(description) => WhatsappSend(description)}
                    containerId={appId}
                />
            )
        }
    }
    render() {
        const {WhatsappSend} = this.props
        return (
            <div className="App-Content" id={appId}>
                <Cover 
                    firstClass="Section" 
                    name="Inicio"
                    WhatsappSend={(description) => WhatsappSend(description)}
                    containerId={appId}
                />
                {this.showFeatures()}
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
                <Contact 
                    firstClass="Section" 
                    name="Contacto"
                />
                <div onClick={() => WhatsappSend("Necesito saber sobre ")} className="WhatsApp-Fixed-Button">
                    <span>Chat</span>
                    <img src={whatsappLogo} alt="Logo de Whatsapp" />
                </div>
            </div>
        )
    }
}
export default Content