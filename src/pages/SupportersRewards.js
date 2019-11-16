import React from 'react';
import PointsDisplay from '../components/PointsDisplay';
import './SupportersRewards.css';

class SupportersRewards extends React.Component {
    render() {
        return (
            <div className="supporters-rewards">
                <PointsDisplay />
                <h1>Rewards</h1>
                    <table>
                        <tr>
                            <td>
                                $5 Amazon Gift Card
                            </td>
                            <td>
                                500pts
                            </td>
                        </tr>
                        <tr>
                        <td>
                            Nintendo Switch Raffle
                            </td>
                            <td>
                                50pts
                            </td>
                        </tr>
                    </table>
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

export default SupportersRewards;