import { Component } from "react";
import rightArrow from "../img/icons/am-icons_right-arrow.svg";
import leftArrow from "../img/icons/am-icons_left-arrow.svg";
import edcLogo from "../img/icons/am-icons_Edc.svg";
import lusoLogo from "../img/icons/am-icons_Luso.svg";
import cecorLogo from "../img/icons/am-icons_Cecor.svg";
const clientsImg = [
    <img src={edcLogo} alt="EDC Logo"></img>,
    <img src={lusoLogo} alt=""></img>,
    <img src={cecorLogo} alt="Cecor Logotipo"></img>
]
const clients = [
    <blockquote>
        <p>"Estoy muy sorprendido, por lo que aquí en Costa Rica tardan 1 semana, ellos lo hicieron en 3 días. Estoy muy contento por el resultado"</p>
        <em>Francisco Solano</em>
        <strong>EDC seguridad electrónica</strong>
    </blockquote>,
    <blockquote>
        <p>"Estoy muy contento con el resultado de la campaña, fue excelente y ganadora. Pudimos alcanzar los objetivos trazados y estoy muy satisfecho con el servicio prestado"</p>
        <em>Ingeniero José F. Rodrigues</em>
        <strong>Presidente del club luso</strong>
    </blockquote>,
    <blockquote>
        <p>"La página web fue perfecta, muy buen diseño y profesionalidad. Excelente trabajo con los posts en las redes sociales de la empresa"</p>
        <em>Ingeniero Carlos Cerda</em>
        <strong>Director de proyectos Cecor</strong>
    </blockquote>
]
class Clients extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentClientCard: 0,
            maxCards: clients.length - 1
        }
    }
    changeCard(number) {
        const {currentClientCard, maxCards} = this.state
        const newCard = currentClientCard + number
        const nextCard = newCard > maxCards? 0: newCard < 0? maxCards: newCard;
        this.setState({
            currentClientCard: nextCard
        })
    }
    render() {
        const {name, firstClass} = this.props
        const {currentClientCard} = this.state
        return (
            <div className={`${firstClass} ClientsSection`} data-name={name}>
                <div className="Client-Card">
                    <div className="Client-Logo">
                        {clientsImg[currentClientCard]}
                    </div>
                    {clients[currentClientCard]}
                    <div className="ClientsCard-Buttons">
                        <div onClick={(e) => this.changeCard(1)}><img src={leftArrow} alt="Icono de flecha"/></div>
                        <div onClick={(e) => this.changeCard(-1)}><img src={rightArrow} alt="Icono de flecha"/></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Clients