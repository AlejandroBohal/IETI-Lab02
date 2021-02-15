import React, {Component} from 'react';
import {TodoList} from "./TodoList";
import 'react-datepicker/dist/react-datepicker.css';
import TodoCard from './TodoCard';
export class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {items: []};
        this.setItems = this.setItems.bind(this)
    }
    setItems (items){
        this.setState({items})
    }
    render() {
        const {items} = this.state;
        return (
             
            <div className="TodoApp">
                <TodoCard setItems={this.setItems} todoCount={items.length} items={items}/>
                <TodoList todoList={items}/>
            </div>
            
        );
    }

    

}
