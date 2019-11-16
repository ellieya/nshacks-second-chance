import React from 'react';
import RecordButton from "../components/RecordButton";
import './Home.css';

class Home extends React.Component {

    handleRecordButtonClick = (targetPage) => {
        this.props.action(targetPage);
    }

    render() {
        return <div className="home">
            <h1>Tap to speak!</h1> 
            <RecordButton action={this.handleRecordButtonClick} />
            <span className="grayed-italics" onClick={
                () => {
                    this.handleRecordButtonClick("SupportersLanding");
                    console.log("run");
                }
            }>Tap here for the Samaritan portal!</span>
        </div>
    }
}

export default Home;