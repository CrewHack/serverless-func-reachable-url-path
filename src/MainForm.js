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

        ValidatorForm.addValidationRule('isUrl', (value) => {

            const url = value;

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
          user["open"] = !user.open;
          this.setState({ user });

          console.log(user.open);  
          
          this.props.drawerToggle();
        }
    };

    handleBlur = event => {

        const { user } = this.state;

        if (event.relatedTarget && event.relatedTarget.name === "submit" || user.submitted)
        {
            return true;
        }
        else
        {
            const { name, value } = event.target;

            if (name === "url" ) {

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
        }
    }

    /*handleClick = () => {

    }*/

    handleSubmit = () => {

        const { user } = this.state;

        this.props.submit(user.url);
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
                    label="&nbsp;&nbsp;Enter email to start accepting Bitcoin"
                    onChange={this.handleChange}
                    name="url"
                    validators={['required','isUrl']}
                    errorMessages={['this field is required','Checking email validity: Please enter a valid email...']}
                    value={user.url}
                    autoComplete="off"
                    style={user.open ? {backgroundColor: "white"} : {backgroundColor: "#fffcf7"}}
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
                        {color: "#FFFFFF", backgroundColor: "#FF9900", marginTop: "6px", marginBottom: "6px", height: "50px"} 
                        :
                        {color: "#FFFFFF", backgroundColor: "#FF9900", marginTop: "6px", marginBottom: "6px", height: "50px"} 
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