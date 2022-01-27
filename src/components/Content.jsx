import { Component } from "react";
import Cover from "./Cover";
import Contact from "./Contact";
import Features from "./Features";
import SuccessSection from "./SuccessSection";
import ServicesSection from "./ServicesSection";
import Clients from "./Clients";
import whatsappLogo from "../img/icons/am-icons_Whatsapp_Color.svg"
import whatsappCyanLogo from "../img/icons/am-cyan-icons_Whatsapp.svg"
import facebookCyanLogo from "../img/icons/am-cyan-icons_Facebook.svg"
import instagramCyanLogo from "../img/icons/am-cyan-icons_Instagram.svg"
import cyanCellphoneSvg from "../img/icons/am-cyan-icons_Cellphone.svg"
import getWindowPosition from "../helpers/getWindowPosition";

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
                    id="caracteristicas"
                    firstClass="Section" 
                    name="Características"
                    WhatsappSend={(description) => WhatsappSend(description)}
                    containerId={appId}
                />
            )
        }
    }
    showContact() {
        if (this.state.windowWidth > 800) {
            return (
                <Contact 
                    firstClass="Section" 
                    name="Contacto"
                />
            )
        }
    }
    goTo(link) {
        const a = document.createElement("a")
        a.rel = "nooponer"
        a.href = link
        a.click()
    }
    showMedias() {
        const {WhatsappSend} = this.props
        if (this.state.windowWidth > 800 || getWindowPosition() === "landscape") {
            return (
                <div onClick={() => WhatsappSend("Necesito saber sobre ")} className="WhatsApp-Fixed-Button">
                    <span>Chat</span>
                    <img src={whatsappLogo} alt="Logo de Whatsapp" />
                </div>
            )
        } else {
            return (
                <div className="Medias-Fixed-Button">
                    <img onClick={() => this.goTo("tel://+584245077692")} src={cyanCellphoneSvg} alt="Teléfono" />
                    <img onClick={() => this.goTo("https://www.instagram.com/amservice_web/")} src={instagramCyanLogo} alt="Logo de Instagram" />
                    <img onClick={() => this.goTo("https://www.facebook.com/AMserviceweb/")} src={facebookCyanLogo} alt="Logo de Facebook" />
                    <img onClick={() => WhatsappSend("Necesito saber sobre ")} src={whatsappCyanLogo} alt="Logo de Whatsapp" />
                </div>
            )
        }
    }
    render() {
        const {WhatsappSend} = this.props
        return (
            <div className="App-Content" id={appId}>
                <Cover 
                    firstClass="Section" 
                    id="inicio"
                    name="Inicio"
                    WhatsappSend={(description) => WhatsappSend(description)}
                    containerId={appId}
                    />
                {this.showFeatures()}
                <SuccessSection 
                    id="que-nos-destaca"
                    firstClass="Section" 
                    name="Que nos destaca"
                    WhatsappSend={(description) => WhatsappSend(description)}
                />
                <Clients 
                    id="opiniones"
                    firstClass="Section" 
                    name="Opiniones"
                />
                <ServicesSection 
                    id="servicios"
                    firstClass="Section" 
                    name="Servicios" 
                    WhatsappSend={(description) => WhatsappSend(description)}
                />
                {this.showContact()}
                {this.showMedias()}
            </div>
        )
    }
}
export default Content