import React, { 
  useState,
  Component, 
}                           from 'react'
import { 
  makeStyles,
  Button,
  TextField,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
}                           from '@material-ui/core'
import { withStyles }       from "@material-ui/core/styles";


var arr = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Minor Outlying Islands", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "U.S. Virgin Islands", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]

const useStyles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  textFld: { 
    width: '100%'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
})


class Form extends Component {
  state = {
    firstNameError: false,
    firstNameHelperText: '',
    lastNameError: false,
    firstNameHelperText: '',
    dateBirthError: false,
    dateBirthHelperText: '',
    homePhoneError: false,
    homePhoneHelperText: '',
    emailError: false,
    emailHelperText: '',
    ssnError: false,
    ssnHelperText: '',
    cityError: false,
    cityHelperText: '',
    passwordError: false,
    passwordHelperText: '',
    passwordConfirmError: false,
    passwordConfirmHelperText: '',
    stateSelect: '',
    stateError: false,
    stateHelperText: '',
  }

  stringChange = (e) => {
    if(/[^a-zA-Z]/.test(e.target.value)){
      this.setState({
        [`${e.target.name}Error`]: true,
        [`${e.target.name}HelperText`]: 'please enter text'
      })
    } else {
      this.setState({
        [`${e.target.name}Error`]: false,
        [`${e.target.name}HelperText`]: '',
      })
    }
  }

  numberChange = (e) => {
    if(/[^0-9-\/]/.test(e.target.value)){
      this.setState({
        [`${e.target.name}Error`]: true,
        [`${e.target.name}HelperText`]: 'please enter numbers'
      })
    } else {
      this.setState({
        [`${e.target.name}Error`]: false,
        [`${e.target.name}HelperText`]: '',
      })
    }
  }

  phoneNumber = (e) => {
    if(/[^0-9 -]/.test(e.target.value)){
      this.setState({
        homePhoneError: true,
        homePhoneHelperText: 'please enter numbers'
      })
    } else {
      this.setState({
        homePhoneError: false,
        homePhoneHelperText: '',
      })
    }
  }

  emailChange = (e) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!emailRegex.test(e.target.value)){
      this.setState({
        emailError: true,
        emailHelperText: 'please enter complete email'
      })
    } else {
      this.setState({
        emailError: false,
        emailHelperText: '',
      })
    }
  }

  submit = (e) => {
    e.preventDefault()

    Array.from(e.target)
      .forEach((item) => {
        if(item.value.length === 0){
          this.setState({
            [`${item.name}Error`]: true,
            [`${item.name}HelperText`]: `please enter ${item.name}`
          })
        } else {
          this.setState({
            [`${item.name}Error`]: false,
            [`${item.name}HelperText`]: '',
          })
        }
    })

    if(this.state.stateSelect.length === 0){
      this.setState({stateError: true})
    } else {
      this.setState({stateError: false})
    }
  }

  handleState = (e) => this.setState({stateSelect: e.target.value})
  
  
  render(){
    const { classes } = this.props
    const { 
      firstNameError,
      firstNameHelperText,
      lastNameError,
      lastNameHelperText,
      dateBirthError,
      dateBirthHelperText,
      homePhoneError,
      homePhoneHelperText,
      emailError,
      emailHelperText,
      ssnError,
      ssnHelperText,
      cityError,
      cityHelperText,
      passwordError,
      passwordHelperText,
      passwordConfirmError,
      passwordConfirmHelperText,
      stateError,
      stateHelperText,

      stateSelect,
    } = this.state

    return (
      <form className={classes.root} noValidate autoComplete="off" onSubmit={this.submit}>
        <TextField
          className={classes.textFld} 
          label="First Name"
          name="firstName"
          error={firstNameError}
          helperText={firstNameHelperText}
          onChange={this.stringChange} 
          // onChange={(e)=>setName(e.target.value)}
        />
        <TextField 
          className={classes.textFld} 
          name="lastName" 
          label="Last Name" 
          error={lastNameError}
          helperText={lastNameHelperText}
          onChange={this.stringChange} 
        />
        <TextField 
          className={classes.textFld} 
          name="dateBirth" 
          label="Date of Birth" 
          inputProps={{ maxlength: 10 }}
          error={dateBirthError}
          helperText={dateBirthHelperText}
          onChange={this.numberChange} 
        />
        <TextField 
          className={classes.textFld} 
          name="homePhone" 
          label="Home Phone" 
          error={homePhoneError}
          helperText={homePhoneHelperText}
          onChange={this.phoneNumber} 
        />
        <TextField 
          className={classes.textFld} 
          name="email" 
          label="Email"
          error={emailError}
          helperText={emailHelperText}
          onChange={this.emailChange}
        />
        <TextField 
          className={classes.textFld} 
          name="ssn" 
          label="SSN" 
          inputProps={{ maxlength: 10 }}
          error={ssnError}
          helperText={ssnHelperText}
          onChange={this.numberChange}
        />
        <TextField 
          className={classes.textFld} 
          name="city" 
          label="City" 
          error={cityError}
          helperText={cityHelperText}
          onChange={this.stringChange}
        />
        <TextField 
          name="zip" 
          label="Zip" 
          inputProps={{ maxlength: 5 }}
          name="zip"
          // error={'xxx'}
          // helperText={emailHelperText}
          onChange={this.emailChange}
        />
        <FormControl error={stateError} className={classes.formControl} name="stateSelect">
            <InputLabel helperText={stateHelperText}>State</InputLabel>
            <Select
              labelId="stateLabel"
              id="stateLabel"
              name="stateSelect"
              value={stateSelect}
              onChange={this.handleState}
            >            
              {arr.map((item) => <MenuItem name="MenuItem" value={item}>{item}</MenuItem>)}
            </Select>
        </FormControl>
        <TextField 
          className={classes.textFld} 
          name="password" 
          type="password" 
          label="Password" 
          error={passwordError}
          helperText={passwordHelperText}
        />
        <TextField 
          className={classes.textFld} 
          name="passwordConfirm"
          type="password"  
          label="Confirm Password" 
          error={passwordConfirmError}
          helperText={passwordConfirmHelperText}
        />

        <Button type="submit" variant="contained" color="primary">Login</Button>

      </form>
    )
  }
}



export default withStyles(useStyles)(Form)