import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const isUrl = require('is-valid-http-url');

export default class MainForm extends React.Component {

    state = {
        user: {
            url: '',
            urlValid: false,
            open: false
        },
    };

    componentDidMount() {

        const { user } = this.state;

        // custom rule will have name 'isUrl'
        ValidatorForm.addValidationRule('isUrl', (value) => {

            //this.state.user.url;
            const url = value;

            // check URL here for validity
            if (!isUrl(url))
            {
                user["validUrl"] = false;
                this.setState({ user });

                return false; // not valid
            }

            user["validUrl"] = true;
            this.setState({ user });

            return true; // valid
        });
    }

    componentWillUnmount() {
        // remove rule when it is not needed
        ValidatorForm.removeValidationRule('isUrl');
    }

    handleChange = (event) => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    handleFocus = event => {
        const { name, value } = event.target;
        if (name === "url") {
          // set true as second parameter to onBlur required validation
          //this.emailRef.current.validate(value);
          console.log("focus!");

          const { user } = this.state;
          user["open"] = !user.open;
          this.setState({ user });

          console.log(user.open);  
          
          this.props.drawerToggle();
        }
    };

    handleBlur = event => {

        console.log(event);

        if (event.relatedTarget && event.relatedTarget.name === "submit")
        {
            return true;
        }

        const { name, value } = event.target;

        if (name === "url" ) {
          // set true as second parameter to onBlur required validation
          //this.emailRef.current.validate(value);

          console.log("blur!");

          const { user } = this.state;
          user["open"] = !user.open;
          this.setState({ user });

          console.log(user.open);

          this.props.drawerToggle();
        }
    };

    handleClick = () => {

        console.log("handle click here");

    }

    handleSubmit = () => {
        // your submit logic

        console.log("handle submit here");

        this.props.submit();
    }

    render() {
        const { user } = this.state;

        return (
            <ValidatorForm
                style={{marginTop: "-8px"}}
                onSubmit={this.handleSubmit}
            >
                <TextValidator 
                    inputProps={{
                        autoCapitalize: 'none',
                    }}
                    fullWidth 
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    id="standard-basic"
                    label="&nbsp;&nbsp;Enter URL to measure power"
                    onChange={this.handleChange}
                    name="url"
                    validators={['required','isUrl']}
                    errorMessages={['this field is required','Checking URL validity: Please enter a valid URL...']}
                    value={user.url}
                    autoComplete="off"
                    style={user.open ? {backgroundColor: "white"} : {backgroundColor: "#F7F9FB"}}
                    //type=i.e. "password" etc.
                />

                <Button 
                    name="submit" 
                    onClick={this.handleClick} 
                    style={
                        user.validUrl 
                        ?
                        {color: "#FFFFFF", backgroundColor: "#14a37f", marginTop: "6px", marginBottom: "6px"}
                        :
                        {color: "#FFFFFF", backgroundColor: "#676666", marginTop: "6px", marginBottom: "6px"}
                    } 
                    fullWidth 
                    variant="contained" 
                    type="submit">
                        Measure URL power
                </Button>

            </ValidatorForm>
        );
    }
}