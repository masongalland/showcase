import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: "",
            filteredNames: []
        };
        
    }
    handleChange(value){
        this.setState({userInput: value});
    }
    FilterString(str){
        var namesArr = this.state.names;

        var filtered =  namesArr.filter((name)=> name.includes(str));

        this.setState({filteredNames: filtered});




    }
    

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.names)}</span>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.FilterString(this.state.userInput)}></button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredNames)}</span>


            </div>
        );
    }
}

export default FilterString;