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

const ids = {
    mainId: "App-Content",
    features: {
        id: "que-nos-destaca",
        name: "Que nos destaca",
    },
    contact: {
        id: "contact",
        name: "Contacto",
    },
    cover: {
        id: "inicio",
        name: "Inicio",
    },
    successSection: {
        id: "objetivos",
        name: "Objetivos",
    },
    clients: {
        id: "opiniones",
        name: "Opiniones",
    },
    servicesSection: {
        id: "servicios",
        name: "Servicios",
    },
}

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
                    id={ids.features.id}
                    name={ids.features.name}
                    firstClass="Section" 
                    WhatsappSend={(description) => WhatsappSend(description)}
                    containerId={ids.mainId}
                />
            )
        }
    }
    showContact() {
        if (this.state.windowWidth > 800) {
            return (
                <Contact 
                    firstClass="Section" 
                    name={ids.contact.name}
                    id={ids.contact.id}
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
            <div className="App-Content" id={ids.mainId}>
                <Cover 
                    firstClass="Section" 
                    id={ids.cover.id}
                    name={ids.cover.name}
                    WhatsappSend={(description) => WhatsappSend(description)}
                    containerId={ids.mainId}
                    />
                {this.showFeatures()}
                <SuccessSection 
                    id={ids.successSection.id}
                    name={ids.successSection.name}
                    firstClass="Section" 
                    WhatsappSend={(description) => WhatsappSend(description)}
                />
                <Clients 
                    id={ids.clients.id}
                    name={ids.clients.name}
                    firstClass="Section" 
                />
                <ServicesSection 
                    id={ids.servicesSection.id}
                    name={ids.servicesSection.name}
                    firstClass="Section" 
                    WhatsappSend={(description) => WhatsappSend(description)}
                />
                {this.showContact()}
                {this.showMedias()}
            </div>
        )
    }
}
export default Content