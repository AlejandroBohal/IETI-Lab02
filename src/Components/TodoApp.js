import React, {Component} from 'react';
import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers'
import 'react-datepicker/dist/react-datepicker.css';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import moment from "moment";
import logo from './logo.svg';
import './TodoApp.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TodoCard from './TodoCard';
export class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {items: []};
        this.setItems = this.setItems.bind(this)
    }
    setItems (items){
        console.log("jhkjhkjh");
        this.setState({items})
    }
    render() {
        const {items} = this.state;
        return (
             
            <div className="TodoApp">
                <header className="TodoApp-header">
                    <img src={logo} className="TodoApp-logo" alt="logo"/>
                    <h1 className="TodoApp-title">TODO React TodoApp</h1>
                </header>
                <br/>
                <br/>
                <TodoCard setItems={this.setItems} todoCount={items.length} items={items}/>
                <TodoList todoList={items}/>
            </div>
            
        );
    }

    

}
