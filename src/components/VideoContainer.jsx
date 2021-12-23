import { Component } from "react/cjs/react.production.min";
import { v4 as uuidv4 } from "uuid";
import "../css/VideoContainer.css";

const id = uuidv4()
const videoId = "v" + id
const playerId = "p" + id
const ContainerId = "c" + id

class VideoContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerWidth: 0,
            playerHeight: 0
        }
    }
    setPlayerSize() {
        let playerWidth = document.querySelector(`#${playerId}`).clientWidth
        let playerHeight = document.querySelector(`#${playerId}`).clientHeight
        this.setState({playerWidth, playerHeight})

    }
    componentDidMount() {
        window.addEventListener("load", e => {
            this.setPlayerSize()
        }, false)
        window.addEventListener("resize", e => {
            this.setPlayerSize()
        }, false)
    }
    render() {
        const {src} = this.props
        const {playerWidth, playerHeight} = this.state
        return (
            <div className="Video-Container" id={ContainerId}>
                <div className="Video-Player" id={playerId}>
                    <video src={src} id={videoId}>
                    </video>
                </div>
                <div className="Video-Controls" style={{width: playerWidth, height: playerHeight}}>
                    <div className="Video-Control Video-Buttons"></div>
                    <div className="Video-Control Video-Progress"></div>
                    <div className="Video-Control Video-Mute"></div>
                </div>
            </div>
        )
    }
}

export default VideoContainer