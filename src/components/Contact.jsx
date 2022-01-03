import { Component } from "react";
import whatsappLogo from "../img/icons/am-icons_Whatsapp.svg"
import instagramLogo from "../img/icons/am-icons_Instagram.svg"
import facebookLogo from "../img/icons/am-icons_Facebook.svg"
import cellphoneSvg from "../img/icons/am-icons_Cellphone.svg"

class Contact extends Component {
    render() {
        const {name, firstClass} = this.props
        return (
            <div className={`${firstClass} Contact`} data-name={name}>
                <div className="Contact-Info">
                    <a className="Contact-Link" rel="noreferrer" href="https://www.instagram.com/amservice_web/">
                        <img src={instagramLogo} alt="Enlace a Instagram" />
                        <div><p>Instagram</p></div>
                    </a>
                    <a className="Contact-Link" rel="noreferrer" href="https://www.facebook.com/AMserviceweb/">
                        <img src={facebookLogo} alt="Enlace a Facebook" />
                        <div><p>Facebook</p></div>
                    </a>
                    <a className="Contact-Link" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=584245077692&text=Quiero%20contratar%20sus%20servicios%20de%20marketing">
                        <img src={whatsappLogo} alt="Enlace a WhatsApp" />
                        <div><p>WhatsApp</p></div>
                    </a>
                    <a className="Contact-Link" rel="noreferrer" href="tel:+584245077692">
                        <img src={cellphoneSvg} alt="Enlace a Teléfono" />
                        <div><p>Teléfono</p></div>
                    </a>
                </div>
            </div>
        )
    }
}
export default Contact