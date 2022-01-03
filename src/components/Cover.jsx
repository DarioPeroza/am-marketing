import { Component } from "react";
import logo from "../img/logo.svg";
import whiteLogo from "../img/whiteLogo.svg";
import ReactPlayer from "react-player";
import horizontalVideo from "../video/pexels-Production-Id-4496268-1.webm";
import verticalVideo from "../video/pexels-mikhail-nilov-7989667.webm";
import getWindowPosition from "../helpers/getWindowPosition";
import getVideoResponsiveDimension from "../helpers/getResponsiveVideoDimension"

class Cover extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoWidth: "auto",
            videoHeight: "100%",
            video: verticalVideo
        }
    }
    componentDidMount() {
        this.setVideoDimensions()
        window.addEventListener("resize", (e) => {
            this.setVideoDimensions()
        })
    }
    setVideoDimensions() {
        const position = getWindowPosition()
        const video = position === "landscape"? horizontalVideo: verticalVideo;
        const container = {
            clientHeight: window.innerHeight,
            clientWidth: window.innerWidth
        }
        const {videoWidth, videoHeight} = getVideoResponsiveDimension(container, position)
        this.setState({
            position: position,
            videoWidth,
            videoHeight,
            video
        })
    }
    render() {
        const {name, firstClass, WhatsappSend} = this.props
        const {videoWidth, videoHeight, video} = this.state
        return (
            <div className={`${firstClass} Cover`} data-name={name}>
                <div className="Background-Cover-Img">
                    <ReactPlayer 
                        className="Cover-Video-Container"
                        url={video}
                        playing={true}
                        loop={true}
                        muted={true}
                        height={videoHeight}
                        width={videoWidth}
                    />
                </div>
                <div className="Background-Cover-Color"></div>
                <div className="Cover-Content">
                    <div className="Cover-Text">
                        <h1 className="Cover-Title"><strong>¡</strong>Invierte en resultados<strong>!</strong></h1>
                        <span onClick={() => WhatsappSend("¿Cómo invierto en resultados?")} className="Cover-Link"><p>Más información<strong>{" >>>"}</strong></p></span>
                    </div>
                    <div className="Cover-Img">
                        <img src={logo} alt="AM-Marketing-Logo"></img>
                        <img src={whiteLogo} alt="AM-Marketing-Logo"></img>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cover