import { Component } from "react/cjs/react.production.min";
import getSectionsHeight from "../helpers/getSectionsHeight";

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: {},
            showMenu: false
        }
    }
    componentDidMount() {
        const content = document.querySelector(".App-Content")
        this.setState({content})
    }
    swichtMenu() {
        this.setState({showMenu: !this.state.showMenu})
    }
    scrollToSection(position) {
        const {content} = this.state
        content.scrollTop = position - 56
        this.setState({content})
        this.swichtMenu()
    }
    showMenu() {
        const {showMenu} = this.state
        const show = showMenu? "Show-Menu" : "Hide-Menu";
        const sectionsNames = Object.keys(getSectionsHeight())
        const sectionsPositions = Object.values(getSectionsHeight())
        const menuList = sectionsNames.map((name, index) => {
            return (
                <li key={index} onClick={() => this.scrollToSection(sectionsPositions[index])}>{name}</li>
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
        return (
            <>
                <header className="App-Header">
                    <div className="Header-Title">
                        <h2>AM Marketing Digital</h2>
                        <p>Contáctanos para crear un proyecto</p>
                        <div className="Show-Menu-Button" onClick={() => this.swichtMenu()}>|||</div>
                    </div>
                </header>
                {this.showMenu()}
            </>
        )
    }
}

export default Header