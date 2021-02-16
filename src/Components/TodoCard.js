
import React, { Component } from 'react'
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers'
import 'react-datepicker/dist/react-datepicker.css';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

export class TodoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '', priority: 0,
         dueDate: new Date(),
         todoCount:0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    render() {
        const {text,priority,dueDate,todoCount} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="todo-form" autoComplete="off">
                <Card>
                    <CardContent>
                        <h3>Add ToDo</h3>
                        <TextField
                            id="text"
                            name="text"
                            onChange={this.handleChange}
                            value={text}
                            helperText="Whats to be done?"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}/>
                        <br/>
                        <br/>                
                        <TextField
                            id="priority"
                            name="priority"
                            type="number"
                            onChange={this.handleChange}
                            helperText="Priority"
                            value={priority}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <br/>
                        <br/>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                id="due-date"
                                value={dueDate}
                                showTodayButton={true}
                                format="MM/dd/yyyy"
                                label="Due date"
                                onChange={this.handleDateChange}>
                            </KeyboardDatePicker>
                        </MuiPickersUtilsProvider>
                        <br/>
                        <br/>
                    </CardContent>
                    <CardActions style={{ justifyContent: "center" }}>
                        <Button 
                            variant="contained" 
                            color="primary"
                            type="submit"
                            onClick={this.handleSubmit}>
                            Add #{todoCount + 1}
                        </Button>
                    </CardActions>
                </Card>
            </form>
            <br/>
        </div>
        )
    }
    handleChange({target}) {
        this.setState({ 
            [target.name]: target.value 
        });
    }
    handleDateChange(date){
        this.setState({
            dueDate:date
        })
    };
    handleSubmit(e) {
        e.preventDefault();
        const {text,priority,dueDate} = this.state;
        const {items,setItems} = this.props;
        const newItem = {
            text,
            priority,
            dueDate,
        };
        this.setState({
            text: '',
            priority: '',
            dueDate: new Date()
        });
        setItems([...items,newItem]);
    }
}

export default TodoCard
