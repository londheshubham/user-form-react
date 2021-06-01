// eslint-disable-next-line no-unused-vars
import React, {Component,useRef} from "react"
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { List, ListItem, ListItemText } from '@material-ui/core'

class Confirm extends Component{
        continue = (e) =>{
        e.preventDefault()
        //PROCESS FORM ie send to the API
        this.props.nextStep()
    }
    back = (e) =>{
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const {
            values: { firstName, lastName, email, occupation, city, bio }
        } = this.props
        console.log(firstName)
        return(
            <MuiThemeProvider>
                <React.Fragment>
                <AppBar>
                    <div>Confirm User details</div>
                </AppBar>
                    <br />
                    <div style={stylesList}>
                        <List >
                            <ListItem>
                                <ListItemText primary="First Name" secondary={firstName} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Last Name" secondary={lastName} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Email" secondary={email} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Occupation" secondary={occupation} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="City" secondary={city} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Bio" secondary={bio} />
                            </ListItem>
                        </List>
                    </div>

                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={this.back}
                        style={styles}
                    >Back</Button>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={this.continue}
                        style={styles}
                    >Confirm & Continue</Button>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Confirm

const styles = {
    display:"inline-block",
    width: "300px",
    height: "40px"
}

const stylesList = {
    margin:"auto"
}