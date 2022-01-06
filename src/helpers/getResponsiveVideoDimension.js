export default function getVideoResponsiveDimension(container, position = "landscape") {
    if (typeof container !== "object" || !container) {
        return {videoWidth: 0, videoHeight: 0}
    }
    let videoWidth = "auto";
    let videoHeight = container.clientHeight;
    const width = position === "landscape"? 1920: 1080;
    const height = position === "landscape"? 1080: 1920;
    const calculateWidth =  container.clientHeight / height * width
    if (container.clientWidth > calculateWidth) {
        videoWidth = container.clientWidth;
        videoHeight = "auto";
    }
    return ({videoHeight, videoWidth})
}