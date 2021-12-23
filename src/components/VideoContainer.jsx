import { Component } from "react/cjs/react.production.min";
import { v4 as uuidv4 } from "uuid";
import "../css/VideoContainer.css";


class VideoContainer extends Component {
    constructor(props) {
        super(props)
        const id = uuidv4()
        const videoId = `v${id}`
        this.state = {
            video: {},
            videoId,
            duration: 10, 
            currentTime: 0.1,
            currentPercent: 0,
            loaded: 0
        }
    }
    componentDidMount() {
        const {src} = this.props
        fetch(src, {method: "GET"})
            .then(response => {
                this.setVideoInterval()
            })
    }
    componentWillUnmount() {
        window.clearInterval(this.videoInterval)
    }
    setVideoInterval() {
        const {videoId} = this.state
        const video = document.querySelector(`#${videoId}`)
        this.setState({video})
        this.videoInterval = window.setInterval(() => {
            let bufferedLenght = video.buffered.length - 1 < 0 ? 0 : video.buffered.length - 1;
            let loaded
            try {
                loaded = this.currentPercent(video.buffered.end(bufferedLenght))
            } catch (error) {
                loaded = 0
            }
            if (!video.paused) {
                this.setState({
                    duration: video.duration,
                    currentTime: video.currentTime,
                    currentPercent: this.currentPercent(video.currentTime),
                    loaded: loaded > 100? 0 : loaded,
                })
            }
        }, 10)
    }
    getVideo() {
        const {videoId} = this.state
        const {src} = this.props
        return (
            <video 
                src={src} 
                id={videoId}
                loop>
                No se puede mostrar el video
            </video>
        )
    }
    currentPercent(value) {
        const {duration} = this.state
        const percent = value / duration
        if (isNaN(percent)) {
            return 0
        } else {
            return percent.toFixed(2) * 100
        }
    }
    playVideo() {
        const {video} = this.state
        if (video.paused) {
            console.log(video.playbackRate)
            video.play()
        } else {
            video.pause()
        }
    }
    changeVideoTime(e) {
        const {video} = this.state
        video.pause()
        const X = e.clientX - e.target.parentElement.getBoundingClientRect().x
        const parentWidth = e.target.parentElement.offsetWidth
        const mouseX = X / parentWidth
        const currentPercent = mouseX * 100
        this.setState({currentPercent})
    }
    videoProgress() {
        const {currentPercent, loaded} = this.state
        try {
            return (
                <div className="Video-Control Video-Progress">
                    <div className="Video-Progress-Background"></div>
                    <div className="Video-Progress-Loaded" style={{width: `${loaded}%`}}></div>
                    <div className="Video-Progress-Status" style={{width: `${currentPercent}%`}}></div>
                    <div 
                        className="Video-Progress-Cursor" 
                        onMouseDown={(e) => this.changeVideoTime(e)} 
                        style={{left: `${currentPercent}%`}}>
                    </div>
                </div>
            )
        } catch (error) {
            console.log(error);
            return (
                <div className="Video-Control Video-Progress">
                    <div className="Video-Progress-Background"></div>
                </div>
            )
        }   
    }
    videoButtons() {
        return (
            <div className="Video-Control Video-Buttons">
                <div className="Video-Undo-Button">{"<<"}</div>
                <div className="Video-Play-Button" onClick={() => this.playVideo()}>{">"}</div>
                <div className="Video-Redo-Button">{">>"}</div>
            </div>
        )
    }
    render() {
        return (
            <div className="Video-Container">
                <div className="Video-Player">
                    {this.getVideo()}
                </div>
                <div className="Video-Controls">
                    {this.videoButtons()}
                    {this.videoProgress()}
                    <div className="Video-Control Video-Mute"></div>
                </div>
            </div>
        )
    }
}

export default VideoContainer