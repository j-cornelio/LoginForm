import React, {
  Component, 
}                           from 'react'
import { 
  Button,
  TextField,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
}                           from '@material-ui/core'
import { withStyles }       from "@material-ui/core/styles";
import TransitionsModal     from "../TransitionsModal"
import InputMask            from "react-input-mask"


const states = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Minor Outlying Islands", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "U.S. Virgin Islands", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]

const useStyles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  textFld: { 
    width: '100%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: { 
    width: 200,
    margin: 10,
    padding: 10,
    borderRadius: 20
  },
  resize: {
    fontWeight: 'bold',
  }
})


class Form extends Component {
  state = {
    firstNameError: false,
    firstNameHelperText: '',
    lastNameError: false,
    lastNameHelperText: '',
    dateBirthError: false,
    dateBirthHelperText: '',
    homePhone: '',
    homePhoneError: false,
    homePhoneHelperText: '',
    emailError: false,
    emailHelperText: '',
    socialSecurity: '',
    ssnError: false,
    ssnHelperText: '',
    cityError: false,
    cityHelperText: '',
    zipError: false,
    zipHelperText: '',
    stateSelect: '',
    stateError: false,
    passwordError: false,
    passwordHelperText: '',
    passwordConfirmError: false,
    passwordConfirmHelperText: '',
    stateHelperText: '',
    submitButton: false,
    open: false,
    value: null
  }

  handleOpen = () => {
    this.setState(() => ({open: true}))
  }

  handleClose = () => {
    this.setState(() => ({open: false}))
  }

  stringChange = (e) => {
    const {name, value} = e.target;

    if(/[^a-zA-Z]/.test(e.target.value)){
      this.setState((state, props) => ({
        [`${name}Error`]: true,
        [`${name}HelperText`]: 'please enter text'
      }))
    } else {
      this.setState({
        [`${name}Error`]: false,
        [`${name}HelperText`]: '',
      })
    }
  }

  numberChange = (e) => {
    const {name, value} = e.target;
    
    if(/[^0-9-/]/.test(e.target.value)){
      this.setState({
        [`${name}Error`]: true,
        [`${name}HelperText`]: 'please enter numbers'
      })
    } else {
      this.setState({
        [`${name}Error`]: false,
        [`${name}HelperText`]: '',
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

  workSS = (data) => {
      const ss = this.state.socialSecurity
      const arr = ss.split('')
      const result = parseInt(arr.pop())

      if(!!result || result === 0){
          this.setState(() => ({ 
            ssnError: false,
            ssnHelperText: '' 
          }))
      } 
  } 

  workPhone = (data) => {
      const ss = this.state.homePhone
      const arr = ss.split('')
      const result = parseInt(arr.pop())

      if(!!result || result === 0){
          this.setState(() => ({ 
            homePhoneError: false,
            homePhoneHelperText: '' 
          }))
      } 
  } 

  onSocialSecurity = (e) => {
    this.setState({ socialSecurity: e.target.value })

    window.setTimeout(() => this.workSS(), 0)
  }

  onHomePhone = (e) => {
    this.setState({ homePhone: e.target.value })
    
    window.setTimeout(() => this.workPhone(), 0)
  }

  passwordChange = (e) => {
    const {name, value} = e.target;

    if(/[^a-zA-Z0-9!@#$%^&*()-_]/.test(value)){
      this.setState((state, props) => ({
        [`${name}Error`]: true,
        [`${name}HelperText`]: 'please enter text'
      }))
    } else {
      this.setState({
        [`${name}Error`]: false,
        [`${name}HelperText`]: '',
      })
    }
  }

  isErrorInputs = () => {
    const bool = []

    Object.values(this.state)
      .forEach((item, index) => {
        if(index < 22){
          if(typeof item !== 'string') 
            bool.push(item)
        }
      })

    const result = bool.every((item) => item === false)

    if(result) this.handleOpen()
  }

  onSubmit = (e) => {
    e.preventDefault()

    Array.from(e.target)
      .forEach((item) => {
        if(item.type !== 'button' && item.type !== 'submit'){
          if(item.value.length === 0){
            this.setState((state, props) => ({
              [`${item.name}Error`]: true,
              [`${item.name}HelperText`]: `please enter your ${item.id}`
            }))
          } 
        }
    })

    window.setTimeout(() => this.isErrorInputs(e.target), 0)
  }

  handleUSstate = (e) => {
    this.setState({
      stateSelect: e.target.value,
      stateError: false 
    })
  }
  
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
      zipError,
      zipHelperText,
      passwordError,
      passwordHelperText,
      passwordConfirmError,
      passwordConfirmHelperText,
      stateError,
      stateHelperText,
      stateSelect,
      open,
    }                            = this.state

    return (
      <form className={classes.root} noValidate autoComplete="off" onSubmit={this.onSubmit}>
        <TextField
          className={classes.textFld} 
          InputProps={{
            classes: { input: classes.resize },
          }}
          label="First Name"
          id="first name"
          name="firstName"
          error={firstNameError}
          helperText={firstNameHelperText}
          onChange={this.stringChange} 
        />
        <TextField 
          className={classes.textFld} 
          InputProps={{
            classes: { input: classes.resize },
          }}
          id="last name" 
          name="lastName"
          label="Last Name" 
          error={lastNameError}
          helperText={lastNameHelperText}
          onChange={this.stringChange} 
        />
        <TextField 
          className={classes.textFld}
          InputProps={{
            classes: { input: classes.resize },
          }}
          inputProps={{ maxLength: 10 }}
          id="date of birth" 
          name="dateBirth"
          label="Date of Birth" 
          error={dateBirthError}
          helperText={dateBirthHelperText}
          onChange={this.numberChange} 
        />
        <InputMask
          mask="(999)999-9999"
          value={this.state.homePhone}
          onChange={this.onHomePhone}
        >
          {() => <TextField 
                  className={classes.textFld} 
                  inputProps={{ 
                    classes: { input: classes.resize },
                  }}
                  id="home phone" 
                  name="homePhone"
                  label="Home Phone" 
                  error={homePhoneError}
                  helperText={homePhoneHelperText}
                />}
        </InputMask>
        <TextField 
          className={classes.textFld} 
          InputProps={{
            classes: { input: classes.resize },
          }}
          id="email" 
          name="email"
          label="Email"
          error={emailError}
          helperText={emailHelperText}
          onChange={this.emailChange}
        />
        <InputMask
          mask="999-99-9999"
          value={this.state.socialSecurity}
          onChange={this.onSocialSecurity}
        >
          {() => <TextField 
                  className={classes.textFld}
                  id="social security" 
                  name="ssn"
                  label="SSN" 
                  error={ssnError}
                  helperText={ssnHelperText}
                />}
        </InputMask>
        <TextField 
          className={classes.textFld} 
          InputProps={{
            classes: { input: classes.resize },
          }}
          id="city" 
          name="city"
          label="City" 
          error={cityError}
          helperText={cityHelperText}
          onChange={this.stringChange}
        />
        <TextField 
          id="zip code"
          name="zip" 
          label="Zip" 
          inputProps={{
            classes: { input: classes.resize }, 
            maxLength: 5
          }}
          error={zipError}
          helperText={zipHelperText}
          onChange={this.numberChange}
        />
        <FormControl error={stateError} className={classes.formControl} name="stateSelect">
            <InputLabel helpertext={stateHelperText}>State</InputLabel>
            <Select
              labelId="stateLabel"
              name="state"
              id="stateSelect"
              value={stateSelect}
              onChange={this.handleUSstate}
            >            
              {states.map((item) => <MenuItem key={item} name="MenuItem" value={item}>{item}</MenuItem>)}
            </Select>
            {stateError && <FormHelperText>Select your state from menu</FormHelperText>}
        </FormControl>
        <TextField 
          className={classes.textFld} 
          InputProps={{
            classes: { input: classes.resize },
          }}
          required
          id="password" 
          name="password" 
          type="password" 
          label="Password" 
          error={passwordError}
          helperText={passwordHelperText}
          onChange={this.passwordChange}
        />
        <TextField 
          className={classes.textFld}
          id="confirmed password"
          name="passwordConfirm"
          InputProps={{
            classes: { input: classes.resize },
          }}
          required
          type="password"
          label="Confirm Password"
          error={passwordConfirmError}
          helperText={passwordConfirmHelperText}
          onChange={this.passwordChange}
        />

        <div className={classes.buttonWrapper}>
          <Button className={classes.button} type="submit" variant="contained" color="primary">submit</Button>
          <Button className={classes.button} type="button">cancel</Button>
        </div>

        <TransitionsModal 
          handleClose={this.handleClose}
          open={open} 
        />
      </form>
    )
  }
}



export default withStyles(useStyles)(Form)