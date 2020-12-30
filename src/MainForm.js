import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import isEmail from 'validator/lib/isEmail';

const isUrl = require('is-valid-http-url');

export default class MainForm extends React.Component {

    state = {
        user: {
            url: '',
            urlValid: false,
            open: false,
            submitted: false
        },
    };

    componentDidMount() {

        const { user } = this.state;

        // custom rule will have name 'isUrl'
        ValidatorForm.addValidationRule('isUrl', (value) => {

            //this.state.user.url;
            const url = value;

            // check URL here for validity
            //if (!isUrl(url))
            if (!isEmail(url))
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
        const { user } = this.state;
        const { name, value } = event.target;
        if (name === "url" && !user.open) {
          // set true as second parameter to onBlur required validation
          //this.emailRef.current.validate(value);
          console.log("focus!");

          user["open"] = !user.open;
          this.setState({ user });

          console.log(user.open);  
          
          this.props.drawerToggle();
        }
    };

    handleBlur = event => {

        const { user } = this.state;

        console.log(event);

        if (event.relatedTarget && event.relatedTarget.name === "submit" || user.submitted)
        {
            return true;
        }
        else
        {

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
        }  
    };

    handleEvent = (event) => {

        const { user } = this.state;

        if (event.type === "mousedown" || event.type === "ontouchstart") {
            user["submitted"] = true;
            this.setState({ user });

            //user["open"] = false;
            //this.setState({ user });
        }
    }

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
                    label="&nbsp;&nbsp;Enter email to begin"
                    onChange={this.handleChange}
                    name="url"
                    validators={['required','isUrl']}
                    errorMessages={['this field is required','Checking email validity: Please enter a valid email...']}
                    value={user.url}
                    autoComplete="off"
                    style={user.open ? {backgroundColor: "white"} : {backgroundColor: "#F7F9FB"}}
                    //type=i.e. "password" etc.
                />

                <Button 
                    onMouseDown={ this.handleEvent } 
                    onMouseUp={ this.handleEvent } 
                    onTouchStart={ this.handleEvent } 
                    onTouchEnd={ this.handleEvent } 
                    //tabindex="0"
                    name="submit" 
                    //onClick={this.handleClick} 
                    style={
                        user.validUrl 
                        ?
                        {color: "#FFFFFF", backgroundColor: "#FF9900", marginTop: "6px", marginBottom: "6px"} // #14a37f
                        :
                        {color: "#FFFFFF", backgroundColor: "#FF9900", marginTop: "6px", marginBottom: "6px"} // #676666
                    } 
                    fullWidth 
                    variant="contained" 
                    type="submit">
                        Accept Bitcoin Payments
                </Button>

            </ValidatorForm>
        );
    }
}