// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {

    constructor() {
        super() 
        this.state = {
            timesClicked: 0
        }
    }

    clickedButton = () => {
        this.setState( () => {
            return {timesClicked: this.state.timesClicked += 1
            }
        })
    }

    render() {
        return (
            <button onClick={this.clickedButton}>{this.state.timesClicked}</button>
        )
    }
}
