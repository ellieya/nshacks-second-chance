import React from 'react';
import mic from '../img/mic.png';
import './RecordButton.css';

class RecordButton extends React.Component {
    render() {
        return <div className="record-button" onClick={
            () => {
                this.props.action("Results");
            }
        }>
            <img src={mic} alt="Record button" />
        </div>
    }
}

export default RecordButton;