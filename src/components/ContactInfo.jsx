import { Component } from "react";
class ContactForm extends Component {
    render() {
        const {name, firstClass} = this.props
        return (
            <div className={`${firstClass} ContactInfo`} data-name={name}>
                <div className="InfoContainer">
                    <div className="ContactInfo-Contact">
                        <a href="https//www.instagram.com">Instagram</a>
                    </div>
                    <div className="ContactInfo-Contact">                            
                        <a href="https//www.facebook.com">Facebook</a>
                    </div>
                    <div className="ContactInfo-Contact">                            
                        <p>+58 424-5962051</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactForm