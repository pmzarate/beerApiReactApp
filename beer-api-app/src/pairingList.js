import React, { Component } from 'react'

class PairingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           'food_pairing': [],
        };
    }   
     render() {
        return (
            <div>
              {beers.food_pairing.map()}  
            </div>
        )
    }
}

export default PairingList;
