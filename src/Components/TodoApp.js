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


export class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {

        return (
             <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className="TodoApp">
                <header className="TodoApp-header">
                    <img src={logo} className="TodoApp-logo" alt="logo"/>
                    <h1 className="TodoApp-title">TODO React TodoApp</h1>
                </header>

                <br/>
                <br/>
                <form onSubmit={this.handleSubmit} className="todo-form">
                    <h3>New TODO</h3>
                    <label htmlFor="text" className="right-margin">
                        Text:
                    </label>

                    <input
                        id="text"
                        onChange={this.handleTextChange}
                        value={this.state.text}>
                    </input>

                    <br/>
                    <br/>
                    <label htmlFor="priority" className="right-margin">
                        Priority:
                    </label>

                    <input
                        id="priority"
                        type="number"
                        onChange={this.handlePriorityChange}
                        value={this.state.priority}>
                    </input>
                    <br/>
                    <br/>

                    <KeyboardDatePicker
                        id="due-date"
                        selected={this.state.dueDate}
                        placeholderText="Due date"
                        onChange={this.handleDateChange}>
                    </KeyboardDatePicker>
                    <br/>
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
                <br/>
                <br/>
                <TodoList todoList={this.state.items}/>
            </div>
            </MuiPickersUtilsProvider>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

}