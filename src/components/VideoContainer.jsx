import { Component } from "react/cjs/react.production.min";
import { v4 as uuidv4 } from "uuid";
import ReactPlayer from "react-player";
import "../css/VideoContainer.css";


class VideoContainer extends Component {
    constructor(props) {
        super(props)
        const id = uuidv4()
        this.state = {
        }
        this.videoId = `v${id}`
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    videoProgress() {
        return (
            <div className="Video-Control Video-Progress">
                <div className="Video-Progress-Background"></div>
                <div className="Video-Progress-Loaded" style={{width: `${50}%`}}></div>
                <div className="Video-Progress-Status" style={{width: `${25}%`}}></div>
                <div className="Video-Progress-Cursor"></div>
            </div>
        )
    }
    videoButtons() {
        return (
            <div className="Video-Control Video-Buttons">
                <div className="Video-Undo-Button">{"<<"}</div>
                <div className="Video-Play-Button">{">"}</div>
                <div className="Video-Redo-Button">{">>"}</div>
            </div>
        )
    }
    videoMute() {
        return <div className="Video-Control Video-Mute">Mute</div>
    }
    render() {
        const {src, videoId} = this.props
        return (
            <div className="Video-Container">
                <div className="Video-Player-Container">
                    <ReactPlayer 
                        className="Video-Player" 
                        height={""}
                        width={""}
                        url={src} 
                        id={videoId} 
                        loop={true}>
                    </ReactPlayer>
                </div>
                <div className="Video-Controls">
                    {this.videoButtons()}
                    {this.videoProgress()}
                    {this.videoMute()}
                </div>
            </div>
        )
    }
}

export default VideoContainer