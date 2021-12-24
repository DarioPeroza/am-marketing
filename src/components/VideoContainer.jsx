import { Component } from "react/cjs/react.production.min";
import { v4 as uuidv4 } from "uuid";
import ReactPlayer from "react-player";
import playSvg from "../img/playButton.svg";
import undoSvg from "../img/undoButton.svg";
import redoSvg from "../img/redoButton.svg";
import volumeSvg from "../img/volume.svg";
import noVolumeSvg from "../img/noVolume.svg";
import "../css/VideoContainer.css";


class VideoContainer extends Component {
    constructor(props) {
        super(props)
        const id = uuidv4()
        this.state = {
            playing: false,
            volume: 0.8,
            muted: false,
            currentTime: 0,
            secondsLoaded: 0,
            duration: 0,
            loadedPercent: 0,
            timePercent: 0,
        }
        this.videoId = `v${id}`
    }
    componentDidMount() {
        this.setState({duration: this.player.getDuration()})
        window.addEventListener("resize", () => {
            this.setState({duration: this.player.getDuration()})
        }, false)
    }
    componentWillUnmount() {
        clearInterval(this.videoInterval)
    }
    advanceVideo(second) {
        const {currentTime} = this.state
        this.player.seekTo(currentTime + second)
    }
    swichtPlayPause() {
        const {playing} = this.state
        this.setState({playing: !playing})
        if (!playing) {
            const duration = this.player.getDuration()
            this.videoInterval = setInterval(() => {
                const currentTime = this.player.getCurrentTime()
                const secondsLoaded = this.player.getSecondsLoaded()
                const loadedPercent = secondsLoaded / duration * 100
                const timePercent = currentTime / duration * 100
                this.setState({
                    loadedPercent: isNaN(loadedPercent)? 0: loadedPercent,
                    timePercent: isNaN(timePercent)? 0: timePercent,
                    currentTime,
                    secondsLoaded
                })
            },100)
        } else {
            clearInterval(this.videoInterval)
        }
    }
    swichtMute() {
        this.setState({muted: !this.state.muted})
    }
    videoProgress() {
        const {loadedPercent, timePercent} = this.state
        return (
            <div className="Video-Control Video-Progress">
                <div className="Video-Progress-Background"></div>
                <div className="Video-Progress-Loaded" style={{width: `${loadedPercent}%`}}></div>
                <div className="Video-Progress-Status" style={{width: `${timePercent}%`}}></div>
                <div className="Video-Progress-Cursor" style={{marginLeft: `calc(${timePercent}% - 10px)`}}></div>
            </div>
        )
    }
    videoButtons() {
        return (
            <div className="Video-Control Video-Buttons">
                <div className="Video-Undo-Button">
                    <img src={undoSvg} alt="Play Button" onClick={ () => this.advanceVideo(-5) }/>
                </div>
                <div className="Video-Play-Button" onClick={() => this.swichtPlayPause()}>
                    <img src={playSvg} alt="Play Button" />
                </div>
                <div className="Video-Redo-Button">
                    <img src={redoSvg} alt="Play Button" onClick={ () => this.advanceVideo(5) }/>
                </div>
            </div>
        )
    }
    videoMute() {
        const {muted} = this.state
        return (
            <div className="Video-Control Video-Mute">
                <img src={muted? noVolumeSvg: volumeSvg} alt="Volume Mute" onClick={() => this.swichtMute()}/>
            </div>
        )
    }
    ref = player => {
      this.player = player
    }
    render() {
        const {src, videoId} = this.props
        const {playing, volume, muted} = this.state
        return (
            <div className="Video-Container">
                <div className="Video-Player-Container">
                    <ReactPlayer 
                        ref={this.ref}
                        playing={playing}
                        muted={muted}
                        volume={volume}
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