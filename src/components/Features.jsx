import { Component } from "react/cjs/react.production.min";
class Features extends Component {
    render() {
        const {name, firstClass} = this.props
        return (
            <div className={`${firstClass} Features`} data-name={name}>
                
            </div>
        )
    }
}
export default Features