import { Component } from "react";
import getSectionsHeight from "../helpers/getSectionsHeight";

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