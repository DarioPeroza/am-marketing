import { Component } from "react";
import getSectionsHeight from "../helpers/getSectionsHeight";
import instagramLogo from "../img/icons/am-cyan-icons_Instagram.svg"
import facebookLogo from "../img/icons/am-cyan-icons_Facebook.svg"
import whatsappLogo from "../img/icons/am-cyan-icons_Whatsapp.svg"

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false
        }
    }
    swichtMenu() {
        this.setState({showMenu: !this.state.showMenu})
    }
    toSection(name) {
        const {scrollToSection} = this.props
        scrollToSection(name)
        if (this.state.showMenu) {
            this.swichtMenu()
        }
    }
    showMenu() {
        const {showMenu} = this.state
        const show = showMenu? "Show-Menu" : "Hide-Menu";
        const sectionsNames = Object.keys(getSectionsHeight())
        const menuList = sectionsNames.map((name, index) => {
            return (
                <li key={index} onClick={() => this.toSection(name)}>{name}</li>
            )
        })

        return (
            <div className={`${show} Header-Menu`}>
                <ul className="Header-Menu-List">
                    {menuList}
                </ul>
                <div className="Header-Menu-Medias-Social">
                    <a rel="noreferrer" href="https://www.instagram.com/amservice_web/">
                        <img src={instagramLogo} alt="Logo de Instagram" />
                    </a>
                    <a rel="noreferrer" href="https://www.facebook.com/AMserviceweb/">
                        <img src={facebookLogo} alt="Logo de Facebook" />
                    </a>
                    <a rel="noreferrer" href="https://api.whatsapp.com/send/?phone=584245077692&text=Quiero%20contratar%20sus%20servicios%20de%20marketing">
                        <img src={whatsappLogo} alt="Logo de Whatsapp" />
                    </a>
                </div>
            </div>
        )
    }
    render() {
        const {WhatsappSend} = this.props
        return (
            <>
                <header className="App-Header">
                    <div className="Header-Title">
                        <h2>AM Marketing Digital</h2>
                        <p onClick={() => WhatsappSend("Quiero empezar un proyecto de marketing")}>Escríbenos para crear un proyecto</p>
                        <div className="Show-Menu-Button" onClick={() => this.swichtMenu()}>|||</div>
                    </div>
                </header>
                {this.showMenu()}
            </>
        )
    }
}

export default Header