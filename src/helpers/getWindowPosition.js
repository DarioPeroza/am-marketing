export default function getWindowPosition() {
    if (window.innerWidth > window.innerHeight) {
        return "landscape"
    } else {
        return "portrait"
    }
}