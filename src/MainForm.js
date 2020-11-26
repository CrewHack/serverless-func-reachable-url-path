import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const isUrl = require('is-valid-http-url');

export default class MainForm extends React.Component {

    state = {
        user: {
            url: '',
            open: false
        },
    };

    componentDidMount() {
        // custom rule will have name 'isUrl'
        ValidatorForm.addValidationRule('isUrl', (value) => {

            //this.state.user.url;
            const url = value;

            // check URL here for validity
            if (!isUrl(url))
            {
              return false; // not valid
            }

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
        const { name, value } = event.target;
        if (name === "url") {
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

    handleSubmit = () => {
        // your submit logic
    }

    render() {
        const { user } = this.state;

        return (
            <ValidatorForm
                style={{marginTop: "-8px"}}
                onSubmit={this.handleSubmit}
            >
                <TextValidator 
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
                    //type="password"
                    style={user.open ? {backgroundColor: "white"} : {backgroundColor: "#F7F9FB"}}
                />

                <Button style={{color: "#FFFFFF", backgroundColor: "#14a37f", marginTop: "6px", marginBottom: "6px"}} fullWidth variant="contained" type="submit">Measure URL power</Button>

            </ValidatorForm>
        );
    }
}