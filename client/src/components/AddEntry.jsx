import React, {Component} from 'react';
import './AddEntry.css';

class AddEntry extends Component{
    constructor(props){
        super(props);
        this.state = {entry: ''};
        this.add = this.add.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    add(){
        this.props.addTodo(this.state.entry);
        this.setState({entry: ''});
    }

    updateState(event){
        this.setState({entry: event.target.value});
    }

    render(){
        return(
            <div className="AddEntry">
                <input type="text" className="entry-textbox" onChange={this.updateState} value={this.state.entry}/>
                <button onClick={this.add}>Add</button>
            </div>
        );
    }
}

export default AddEntry;