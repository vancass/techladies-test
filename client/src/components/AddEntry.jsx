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
                <form>
                    <input type="text" className="entry-textbox" onChange={this.updateState} value={this.state.entry} required/>
                    <input type="submit" className="add-btn" onClick={this.add}/>
                </form>
            </div>
        );
    }
}

export default AddEntry;