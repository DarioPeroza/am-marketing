import { Component } from "react/cjs/react.production.min";
import VideoContainer from "./VideoContainer";
import getWindowPosition from "../helpers/getWindowPosition";
import horizontalVideo from "../video/pexels-Production-Id 4496268-1.webm"
import verticalVideo from "../video/pexels-mikhail-nilov-7989667.webm"
import puertoRico from "../video/Dj Goja x John Neo - Puerto Rico (Official Single).mp4"

class Features extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            position: getWindowPosition()
        }
    }
    componentDidMount() {
        this.setState({
            position: getWindowPosition()
        })
        window.addEventListener("resize", (e) => {
            this.setState({
                position: getWindowPosition()
            })
        })
         
    }
    showVideo() {
        const {position} = this.state
        if (position === "landscape") {
            return <VideoContainer src={puertoRico}></VideoContainer>
        } else {
            return <VideoContainer src={verticalVideo}></VideoContainer>
        }
    }
    render() {
        const {name, firstClass} = this.props
        return (
            <div className={`${firstClass} Features`} data-name={name}>
                <div className="Features-Title">
                    <h2><strong>¿Quieres resultados?</strong><span> Invierte con nosotros de forma segura</span></h2>
                </div>
                <div className="Features-Img"></div>
                <div className="Features-Video">
                    {this.showVideo()}
                </div>
                <div className="Features-Content Features-Main-Content">
                    <h2>Perfomance Marketing</h2>
                    <p>Cada empresa es única y diferente, y en AM Marketing Digital entendemos eso. Es por esto que adaptamos el presupuesto a tus necesidades y objetivos a fin de que obtengas campañas efectivas y rentables.</p>
                </div>
                <div className="Features-Content">
                    <h3>Marketing basado en objetivos</h3>
                    <p>Nos basamos en objetivos para un tiempo determinado, preparamos estrategias completas para cada área digital de su empresa, y alcanzar tu objetivo.</p>
                </div>
                <div className="Features-Content">
                    <h3>Asistencia profesional</h3>
                    <p>Profesionales con años de experiencia, para realizar tu proyecto y darte asesoramiento.</p>
                </div>
            </div>
        )
    }
}
export default Features