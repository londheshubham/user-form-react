// eslint-disable-next-line no-unused-vars
import React, {Component} from "react"
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class FormUserDetails extends Component{
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    continue = (e) =>{
        e.preventDefault()
        this.props.nextStep()
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
                    <AppBar title="Enter User Details"
                            style={{ backgroundColor: '#fff'}}
                    />
                    <TextField
                        placeholder="Enter Your First Name"
                        // floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        value={values.firstName}
                        style={{ backgroundColor: '#fff' ,marginBottom:"10px",marginTop:"10px"}}
                        label="First Name"
                        variant="outlined"
                        ref={this.myRef.current}
                    />
                    <br />
                    <TextField
                        placeholder="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        value={values.lastName}
                        style={{ backgroundColor: '#fff' ,marginBottom:"10px"}}
                        label="Last Name"
                        variant="outlined"
                    />
                    <br />
                    <TextField
                        placeholder="Enter Your Email"
                        // floatingLabelText="Email"
                        onChange={handleChange('email')}
                        value={values.email}
                        style={{ backgroundColor: '#fff' ,marginBottom:"10px"}}
                        label="Email"
                        variant="outlined"
                    />
                    <br />
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={this.continue}
                    >Continue</Button>

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails