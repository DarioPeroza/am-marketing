import { Component } from "react/cjs/react.production.min";
import logo from "../img/logo.svg"
import negativeLogo from "../img/negativeLogo.svg"
class Cover extends Component {
    render() {
        const {name, firstClass} = this.props
        return (
            <div className={`${firstClass} Cover`} data-name={name}>
                <div className="Background-Cover-Img"></div>
                <div className="Background-Cover-Color"></div>
                <div className="Cover-Content">
                    <div className="Cover-Text">
                        <h1 className="Cover-Title"><strong>¡</strong>Invierte en resultados<strong>!</strong></h1>
                        <a href="https://www.youtube.com/" className="Cover-Link"><h3>Ver presentación <strong>{" <<<"}</strong></h3></a>
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