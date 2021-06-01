// eslint-disable-next-line no-unused-vars
import React, {Component} from "react"
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class FormPersonalDetails extends Component{
    continue = (e) =>{
        e.preventDefault()
        this.props.nextStep()
    }
    back = (e) =>{
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const {values,handleChange} = this.props
        return(
            <MuiThemeProvider>
                <React.Fragment>
                <AppBar style={{width : "100%",height:"20px",marginBottom:"10px"}}>
                    <div>Enter user details</div>
                </AppBar>
                <br />
                    <TextField
                        placeholder="Enter Your Occupation"
                        // floatingLabelText="First Name"
                        onChange={handleChange('occupation')}
                        value={values.occupation}
                        style={{ backgroundColor: '#fff' ,marginBottom:"10px",marginTop:"10px"}}
                        label="Occupation"
                        variant="outlined"
                    />
                    <br />
                    <TextField
                        placeholder="Enter Your City"
                        // floatingLabelText="Last Name"
                        onChange={handleChange('city')}
                        defaultValue={values.occupation}
                        style={{ backgroundColor: '#fff' ,marginBottom:"10px"}}
                        label="City"
                        variant="outlined"
                    />
                    <br />
                    <TextField
                        placeholder="Enter Your bio"
                        // floatingLabelText="Email"
                        onChange={handleChange('bio')}
                        defaultValue={values.occupation}
                        style={{ backgroundColor: '#fff' ,marginBottom:"10px"}}
                        label="Bio"
                        variant="outlined"
                    />
                    <br />
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
                    >Continue</Button>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormPersonalDetails

const styles = {
    display:"inline-block",
    width: "100px",
    height: "40px",
    textAlign: "center"
}