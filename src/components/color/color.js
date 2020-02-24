import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './color.scss'

class ANight extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="color-wrapper">
                <div className="moon">

                </div>
                <div className="path">
                    <div className="pacman">
                        <div className="orb"></div>
                    </div>
                    <div className="ghost">
                        <div className="eyes"></div>
                        <div className="skirt"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ANight;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<ANight />, wrapper) : false;