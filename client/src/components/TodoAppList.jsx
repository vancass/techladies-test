import React, {Component} from 'react';
import './TodoAppList.css';
import Todo from './Todo.jsx';
import AddEntry from './AddEntry.jsx';

class TodoAppList extends Component{
    constructor(props){
        super(props);
        this.state={todo_notdone: ['test to-do', 'todo2'], todo_done: ['done1','don2']};
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(newEntry){
        this.setState({todo:[...this.state.todo, newEntry]});
    }

    removeTodo(entry){
        const filteredEntries = this.state.todo.filter(name => {
            return name !== entry;
        });

        this.setState({todo: filteredEntries});
    }

    renderList(){
        return(
            this.state.map(name=>(
                name.map(name2=>(
                    <Todo key={name2} entry={name2} removeTodo={this.removeTodo}/>
                )
            ))
        ));
    }

    checked(){

    }

    render(){
        return(
            <div className="TodoAppList">
                <AddEntry addTodo={this.addTodo}/>
                {this.renderList()}
            </div>
        );
    }

}

export default TodoAppList;