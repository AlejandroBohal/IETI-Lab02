import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {Login} from './Components/Login';
import {TodoApp} from './Components/TodoApp';
import logo from './logo.svg';
import './App.css';
class App extends Component {

    constructor(props) {
        super(props);
        this.setUser();
        this.logIn = this.logIn.bind(this);
        this.state = {isLoggedIn:false};
        if(!localStorage.getItem("loggingStatus")) localStorage.setItem("loggingStatus","notLogged");
    }
    setUser(){
        const user = {
            uuid: "user123@mail.com",
            password: "password"
        }
        localStorage.setItem("user",JSON.stringify(user));
    }
    logIn(){
        const loggingStatus = localStorage.getItem("loggingStatus");
        switch (loggingStatus){
            case "loggedIn":
                this.setState({isLoggedIn:false});
                localStorage.setItem("loggingStatus","notLogged");
                break;
            case "notLogged":
                this.setState({isLoggedIn:true});
                localStorage.setItem("loggingStatus","loggedIn");
                break;
            default:
                break;
        }
    }
    renderRoutes(){
        const LoginView = () => {
            return  (
                this.state.isLoggedIn
                ? 
                    <h1>Already logged in</h1> 
                :
                    <Login login={this.logIn}/>
            )
        };
        const TodoAppView = () => {
            return (
                this.state.isLoggedIn
                ?
                    <TodoApp/>
                :
                    <Login login={this.logIn}/>
            )
        };
        return (
            <div>
              <Route exact path="/" component={LoginView} />
              <Route exact path="/login" component={LoginView} />
              <Route path="/todo" component={TodoAppView} />
            </div>
        );
    }
    render() {  
        
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                    <br/>
                    <br/>
                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>
                    {
                        this.renderRoutes()
                    }
                </div>
            </Router>
        );
    }
}
export default App;

