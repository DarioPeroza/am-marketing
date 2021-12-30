import { Component } from "react";
import logo from "../img/logo.svg";
import negativeLogo from "../img/negativeLogo.svg";
class Cover extends Component {
    render() {
        const {name, firstClass, WhatsappSend} = this.props

        return (
            <div className={`${firstClass} Cover`} data-name={name}>
                <div className="Background-Cover-Img"></div>
                <div className="Background-Cover-Color"></div>
                <div className="Cover-Content">
                    <div className="Cover-Text">
                        <h1 className="Cover-Title"><strong>¡</strong>Invierte en resultados<strong>!</strong></h1>
                        <span onClick={() => WhatsappSend("¿Cómo invierto en resultados?")} className="Cover-Link"><p>Más información<strong>{" >>>"}</strong></p></span>
                    </div>
                    <div className="Cover-Img">
                        <img src={logo} alt="AM-Marketing-Logo"></img>
                        <img src={negativeLogo} alt="AM-Marketing-Logo"></img>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cover