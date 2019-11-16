import React from 'react';
import PointsDisplay from '../components/PointsDisplay';
import './SupportersHome.css';


class SupportersHome extends React.Component {
    render() {
        return (
            <div className="supporters-home">
                <span className="grayed-italics">Supporters Homepage</span>
                <PointsDisplay/>
                <button className="big-button">Your Volunteer Cards</button>
                <button className="big-button" onClick={() => this.props.action("SupportersRewards")}>Redeem Points</button>
                <button className="big-button" onClick={() => this.props.action("SupportersHelp")}>Help</button>
            </div>
        );
    }
}

export default SupportersHome;