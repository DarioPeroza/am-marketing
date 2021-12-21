import { Component } from "react/cjs/react.production.min";
import Cover from "./Cover";
import Features from "./Features";

class Content extends Component {
    render() {
        return (
            <div className="App-Content">
                <Cover firstClass="Section" name="Inicio"></Cover>
                <Features firstClass="Section" name="Características"></Features>
            </div>
        )
    }
}
export default Content