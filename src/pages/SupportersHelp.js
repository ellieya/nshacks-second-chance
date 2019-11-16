import React from 'react';
import './SupportersHelp.css'

class SupportersHelp extends React.Component {
    render() {
        return (
            <div className="supporters-help">
                <div className="inner-box">
                    <h1>Solving Homelessness with Love</h1>
                    <p>As New Yorkers, we have all experienced first-hand how bad our homelessness situation is. Wouldn't it be nice if, the next time you encounter one, instead of giving them money for one meal, why don't we give them the information to eat warm meals for the rest of their lives?
                    </p>
                    <h1>Rewards</h1>
                    <p>To do just that, simply go to the the Volunteer homepage, print out your cards, and distribute them! When an individual uses your referral, you will receive points that you may redeem for prizes!</p>
                </div>
                <button className="back-button" onClick={() => {
                    this.props.action("SupportersHome");
                }

                }>
                    Back
                </button>
            </div>
        );
    }
}

export default SupportersHelp;