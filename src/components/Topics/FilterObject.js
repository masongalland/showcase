import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                },
                {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                },
                {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                }
            ],

      userInput: '',
      filteredEmployees: []
        };
        
    }
    handleChange(value){
        this.setState( {userInput: value} );
    }
    filterObjects(prop){
        var employees = this.state.unFilteredArray;
        var filtered = [];

        for(var i = 0; i < employees.length; i++){
            if(employees[i].hasOwnProperty(prop)){
                filtered.push(employees[i]);
            }
        }
        this.setState({filteredEmployees: filtered});
    }
    


    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4> 
                <span className="puzzleText">Unfiltered: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}></input>
                <button className="confirmationButton"></button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10)}</span>
            </div>
        );
    }
}

export default FilterObject;