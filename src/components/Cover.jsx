import { Component } from "react";
import ReactPlayer from "react-player";
import horizontalVideo from "../video/Horizontal-Doctors-Cover-Video.mp4";
import verticalVideo from "../video/Vertical-Doctors-Cover-Video.mp4";
import getWindowPosition from "../helpers/getWindowPosition";
import getVideoResponsiveDimension from "../helpers/getResponsiveVideoDimension"
import playSvg from "../img/icons/am-cyan-icons_play.svg"

class Cover extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoWidth: "auto",
            videoHeight: "100%",
            video: verticalVideo,
            playing: false
        }
    }
    componentDidMount() {
        const container = document.querySelector(".Cover-Video-Container")
        this.setVideoDimensions(container)
        window.addEventListener("resize", () => {
            this.setVideoDimensions(container)
        })
    }
    setVideoDimensions(container) {
        const position = getWindowPosition()
        const video = position === "landscape"? horizontalVideo: verticalVideo;
        const {videoWidth, videoHeight} = getVideoResponsiveDimension(container, position)
        this.setState({
            position: position,
            videoWidth,
            videoHeight,
            video
        })
    }
    swichtPlay() {
        this.setState({playing: !this.state.playing})
        const container = document.querySelector(".Cover-Video-Container")
        this.setVideoDimensions(container)
    }
    videoDimensions() {
        const position = getWindowPosition()
        if (this.state.playing) {
            if (position === "portrait") {
                return {"height": "100%"}
            } else {
                return {"right": "0%"}
            }
        }
        return {}
    }
    showTextContainer() {
        const position = getWindowPosition()
        if (this.state.playing && position === "landscape") {
            return {marginLeft: "-80%"}
        } 
        return {transitionTimingFunction: "cubic-bezier(0.17, 0.8, 0.88, 0.86)"}
    }
    showVideoBackground() {
        const position = getWindowPosition()
        if (position === "landscape" && !this.state.playing) {
            return <div className="Video-Cover-Background"/>
        }
    }
    render() {
        const {name, firstClass, WhatsappSend, id} = this.props
        const {videoWidth, videoHeight, video, playing} = this.state
        return (
            <div id={id} className={`${firstClass} Cover`} data-name={name}>
                <div className="Cover-Content">
                    <div 
                        className="Cover-Video-Container" 
                        onClick={() => this.swichtPlay()}
                        style={this.videoDimensions()}
                        >
                        <div className={!playing? "Cover-Video-Play-Button": "Cover-Video-Play-Button-Hide"}>
                            <img src={playSvg} alt="Play button" />
                        </div>
                        {this.showVideoBackground()}
                        <ReactPlayer 
                            url={video}
                            playing={playing}
                            loop={true}
                            width={videoWidth}
                            height={videoHeight}
                            stopOnUnmount={true}
                            />
                    </div>
                    <div className="Cover-Text-Container" style={this.showTextContainer()}>
                        <div className="Cover-Text">
                            <h1 className="Cover-Title"><strong>¡</strong>Consigue más pacientes<strong>!</strong></h1>
                            <span onClick={() => WhatsappSend("Deseo saber más sobre sus servicios para trabajadores sanitarios")} className="Cover-Link"><p>Más información<strong>{" >>>"}</strong></p></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cover