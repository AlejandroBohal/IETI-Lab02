import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email:"", password:"" };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        localStorage.setItem("loggingStatus", "notLogged");
    }
    handleLogin(e) {
        e.preventDefault();
        const { uuid, password: passwordStored } = JSON.parse(localStorage.getItem("user"));
        const { email, password } = this.state;
        if (uuid === email && passwordStored === password) {
            this.props.login();
        } else {
            alert("Check your password or email");
        }
    }
    handleChange({ target }) {
        this.setState({ [target.name]: target.value });
    }
    render() {
        const { email, password } = this.state;
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form onSubmit={this.handleLogin} className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email"
                                    name="email" 
                                    autoComplete="email"
                                    value={email}
                                    onChange={this.handleChange}
                                    autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={this.handleChange}
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                onClick={this.handleLogin}
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}