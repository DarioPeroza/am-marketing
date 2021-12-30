import { Component } from "react";
import firstService from "../img/icons/am-icons_brand.svg"
import secondService from "../img/icons/am-icons_scale.svg"
import thirdService from "../img/icons/am-icons_filter.svg"
class ServicesSection extends Component {
    render() {
        const {name, firstClass, WhatsappSend} = this.props
        return (
            <div className={`${firstClass} ServicesSection`} data-name={name}>
                <div className="ServicesSection-Container">
                    <div className="ServicesSection-Title">
                        <h4>Servicios</h4>
                    </div>
                    <div className="ServicesSection-Content">
                        <div className="ServicesSection-Service" onClick={() => WhatsappSend("Necesito crear una marca")}>
                            <img src={firstService} alt="Icono de marca"></img>
                            <h3>Construcción de marca</h3>
                            <p>Crea una comunidad en base a tu producto o servicio</p>
                        </div>
                        <div className="ServicesSection-Service" onClick={() => WhatsappSend("Quiero que mi página web tenga más alcance")}>
                            <img src={secondService} alt="Icono de estadística"></img>
                            <h3>Elevar alcance</h3>
                            <p>Llega a un número deseado de personas en tus redes sociales o página web</p>
                        </div>
                        <div className="ServicesSection-Service" onClick={() => WhatsappSend("Quiero tener más clientes")}>
                            <img src={thirdService} alt="Icono de embudo"></img>
                            <h3>Conversión de clientes</h3>
                            <p>Convierte las visitas de tu sitio web en clientes potenciales</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ServicesSection