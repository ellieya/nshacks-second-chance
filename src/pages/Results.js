import React from 'react';
import './Results.css';

class Results extends React.Component {

    constructor(prop) {
        super(prop);
        this.results = [];

        this.state = {
            ready: false
        }
    }

    componentDidMount() {
        fetch('https://nshacks2019.herokuapp.com/resources/shelter')
            .then((response) => response.json())
            .then((myJSON) => {
                this.results.push(myJSON);
                console.log(this.results.length);
                this.setState({
                    ready: true
                }
                )
            })
            .catch((error) => console.log(error));
    }

    processTableRows = () => {
        let list = [];
        let stringHolder;
        console.log(this.results.length);
        this.results.forEach((entry) => {
            stringHolder = entry.type;
            list.push(
                <tr>
                    <td>
                        {stringHolder.toUpperCase() + " - " + entry.name}<br />
                        {entry.addressNumber + " " + entry.streetName}<br />
                        {entry.phoneNumber}
                    </td>
                </tr>)
        })
        return list;
    }

    render() {
        if (this.state.ready)
            return (
                <div className="results">
                    <h1>Results</h1>
                    <table>
                        {this.processTableRows()}
                    </table>
                    <button className="back-button" onClick={() => {
                        this.props.action("Home");
                    }

                    }>
                        Back
                </button>
                </div>
            );
        else {
            return <div></div>
        }
    }
}

export default Results;