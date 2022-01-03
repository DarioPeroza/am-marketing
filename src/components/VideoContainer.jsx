import { Component } from "react/cjs/react.production.min";
import { v4 as uuidv4 } from "uuid";
import ReactPlayer from "react-player";
import pauseSvg from "../img/icons/am-icons_pause.svg";
import playSvg from "../img/icons/am-icons_play.svg";
import advanceSvg from "../img/icons/am-icons_advance.svg";
import backSvg from "../img/icons/am-icons_back.svg";
import volumeSvg from "../img/icons/am-icons_volume.svg";
import muteSvg from "../img/icons/am-icons_mute.svg";
import getResponsiveVideoDimension from "../helpers/getResponsiveVideoDimension"
import getWindowPosition from "../helpers/getWindowPosition";
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
            loadedPercent: 0,
            timePercent: 0,
            displayControls: true,
            height: "100%",
            width: "auto"
        }
        this.videoId = `v${id}`
    }
    componentWillUnmount() {
        clearInterval(this.videoInterval)
    }
    componentDidMount() {
        this.setVideoDimensions()
    }
    setVideoDimensions() {
        const position = getWindowPosition()
        const container = document.querySelector(".Video-Container")
    }
    advanceVideo(second) {
        const {currentTime} = this.state
        const newTime = currentTime + second < 1? 0: currentTime + second;
        this.setState({currentTime: newTime})
        this.player.seekTo(newTime)
        this.setPercent()
    }
    setPercent() {
        const duration = this.player.getDuration()
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
    }
    swichtPlayPause() {
        const {playing} = this.state
        this.setState({playing: !playing})
        if (!playing) {
            const {containerId} = this.props
            const container = document.querySelector(`#${containerId}`)
            this.setState({
                displayControls: false
            })
            container.onscroll = () => {
                this.setState({
                    playing: false,
                    displayControls: true
                })
            }
            this.videoInterval = setInterval(() => {
                this.setPercent()
            },100)
        } else {
            clearInterval(this.videoInterval)
        }
    }
    swichtMute() {
        this.setState({muted: !this.state.muted})
    }
    moveTime(e) {
        const newPercent = e.target.value
        const newTime = newPercent * this.player.getDuration() / 100 < 1? 0: newPercent * this.player.getDuration() / 100;
        this.player.seekTo(newTime)
        this.setState({currentTime: newTime})
        this.setPercent()
    }
    videoProgress() {
        const {loadedPercent, timePercent} = this.state
        const statusWidth = timePercent < 50? `calc(${timePercent}% + 5px)`: `calc(${timePercent}% - 4px)`;
        const value = timePercent
        return (
            <div className="Video-Control Video-Progress">
                <div className="Video-Progress-Background"></div>
                <div className="Video-Progress-Loaded" style={{width: `${loadedPercent}%`}}></div>
                <div className="Video-Progress-Status-Background" style={{width: statusWidth}}></div>
                <input 
                    type="range"
                    onChange={e => this.moveTime(e)}
                    value={value}
                    className="Video-Progress-Status">
                </input>
            </div>
        )
    }
    videoButtons() {
        const {playing} = this.state
        return (
            <div className="Video-Control Video-Buttons">
                <div className="Video-Undo-Button">
                    <img src={backSvg} alt="Back Button" onClick={ () => this.advanceVideo(-5) }/>
                </div>
                <div className="Video-Play-Button" onClick={() => this.swichtPlayPause()}>
                    <img src={playing? pauseSvg: playSvg} alt="Play Button" />
                </div>
                <div className="Video-Redo-Button">
                    <img src={advanceSvg} alt="Advance Button" onClick={ () => this.advanceVideo(5) }/>
                </div>
            </div>
        )
    }
    videoMute() {
        const {muted} = this.state
        return (
            <div className="Video-Control Video-Mute">
                <img src={muted? muteSvg: volumeSvg} alt="Volume Mute" onClick={() => this.swichtMute()}/>
            </div>
        )
    }
    showVideoControls() {
        const {displayControls, width, height} = this.state
        const className = displayControls? `Video-Controls`: `Video-Controls Video-Controls-Hide`;
        return (
            <div 
                className={className} 
                style={{width: width, height: height}}
                >
                {this.videoButtons()}
                {this.videoProgress()}
                {this.videoMute()}
            </div>
        )
    }
    videoContainerClick() {
        if (this.state.playing) {
            this.setState({displayControls: true})
        }
    }
    mouseEnter() {
        this.setState({displayControls: true})
    }
    mouseLeave() {
        if (this.state.playing && this.state.displayControls) {
            setTimeout(() => {
                this.setState({displayControls: false})
            }, 500)
        }
    }
    ref = player => {
      this.player = player
    }
    render() {
        const {src, videoId} = this.props
        const {playing, volume, muted, width, height} = this.state
        return (
            <div 
                className="Video-Container"
                onClick={() => this.videoContainerClick()}
                onMouseEnter={() => this.mouseEnter()}
                onMouseLeave={() => this.mouseLeave()}>
                <div 
                    className="Video-Player-Container"
                    style={{width: width, height: height}}
                >
                    <ReactPlayer 
                        width={width}
                        height={height}
                        ref={this.ref}
                        playing={playing}
                        muted={muted}
                        volume={volume}
                        className="Video-Player" 
                        url={src} 
                        id={videoId} 
                        loop={true}>
                    </ReactPlayer>
                </div>
                {this.showVideoControls()}
            </div>
        )
    }
}

export default VideoContainer