import { Component } from "react";
import getWindowPosition from "../helpers/getWindowPosition";
import horizontalImg from "../img/content/pexels-lukas-669619.webp"
import verticalImg from "../img/content/pexels-thirdman-7181178.webp"
import sniper from '../img/icons/am-icons_sniper.svg'
class SuccessSection extends Component {
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
    showImg() {
        const {position} = this.state
        if (position === "landscape") {
            return <img src={horizontalImg} className="SuccessSection-Img" alt="Planea y alcanza tus metas" />
        } else {
            return <img src={verticalImg} className="SuccessSection-Img" alt="Planea y alcanza tus metas" />
        }
    }
    render() {
        const {name, firstClass} = this.props
        return (
            <div className={`${firstClass} SuccessSection`} data-name={name}>
                <div className="SuccessSection-Content">
                    <img src={sniper} alt="Icono de mira"></img>
                    <h2>Planea tus objetivos</h2>
                    <p>Destacar y perdurar en internet, es algo que se ha vuelto muy dificil en los últimos años. Trabajaremos junto contigo para alcanzar los logros que requiere tu negocio</p>
                </div>
                <div className="SuccessSection-Img-Container">
                    {this.showImg()}
                </div>
            </div>
        )
    }
}
export default SuccessSection