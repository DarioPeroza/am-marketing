import { Component } from "react/cjs/react.production.min";
class Cover extends Component {
    render() {
        return (
            <div className="Cover">
                <div className="Background-Cover-Img"></div>
                <div className="Background-Cover-Color"></div>
                <div className="Cover-Content">
                    <div className="Cover-Text">
                        <h1 className="Cover-Title"><strong>¡</strong>Invierte en resultados<strong>!</strong></h1>
                        <a href="#" className="Cover-Link"><h3>Ver presentación</h3></a>
                    </div>
                    <div className="Cover-Img">
                        <img src="../img/logo.svg" alt="AM-Marketing-Logo"></img>
                        <img src='../img/negativelogo.svg' alt="AM-Marketing-Logo"></img>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cover