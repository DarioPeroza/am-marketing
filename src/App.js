import { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content'
import getSectionsHeight from "./helpers/getSectionsHeight";
import getValidString from "./helpers/getValidString"
import './css/normalize.css'
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: {}
    }
    this.scrollToSection = this.scrollToSection.bind(this)
  }
  componentDidMount() {
    const content = document.querySelector("html")
    this.setState({content})
  }
  scrollToSection(name) {
    const {content} = this.state
    const validName = getValidString(name)
    const preSections = getSectionsHeight()
    const sections = {}
    for (const key in preSections) {
      const validKey = getValidString(key)
      sections[validKey] = preSections[key]
    }
    const position = sections[validName] || 0
    content.scrollTo(0, position)
    this.setState({content})
    if (this.state.showMenu) {
        this.swichtMenu()
    }
  }
  WhatsappSend(description) {
      const link = document.createElement("a")
      link.rel = "nooponer"
      let web = "web"
      let text = description? description.replaceAll(" ", "%20"): "Quiero%20contratar%20sus%20servicios%20de%20marketing";
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        web = "api"
      } 
      link.href = `https://${web}.whatsapp.com/send/?phone=584245077692&text=${text}`
      link.click()
  }
  render() {
    return (
      <div className="App">
        <Header scrollToSection={(e) => this.scrollToSection(e)} WhatsappSend={(description) => this.WhatsappSend(description)} />
        <Content getValidString={getValidString} scrollToSection={(e) => this.scrollToSection(e)} WhatsappSend={(description) => this.WhatsappSend(description)} />
      </div>
    );
  }
}

export default App;
