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
import TransitionsModal     from "../TransitionsModal";


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
    zipError: false,
    zipHelperText: '',
    passwordError: false,
    passwordHelperText: '',
    passwordConfirmError: false,
    passwordConfirmHelperText: '',
    stateSelect: '',
    stateError: false,
    stateHelperText: '',
    submitButton: false,
    noErrorState: false,
    noErrorOnInputs: false,
    submit: false,
    open: false,
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  stringChange = (e) => {
    if(/[^a-zA-Z]/.test(e.target.value)){
      this.setState({
        [`${e.target.id}Error`]: true,
        [`${e.target.id}HelperText`]: 'please enter text'
      })
    } else {
      this.setState({
        [`${e.target.id}Error`]: false,
        [`${e.target.id}HelperText`]: '',
      })
    }
  }

  numberChange = (e) => {
    if(/[^0-9-/]/.test(e.target.value)){
      this.setState({
        [`${e.target.id}Error`]: true,
        [`${e.target.id}HelperText`]: 'please enter numbers'
      })
    } else {
      this.setState({
        [`${e.target.id}Error`]: false,
        [`${e.target.id}HelperText`]: '',
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

  isErrorInputs = () => {
    const bool = []

    Object.values(this.state)
      .forEach((item, index) => {
        if(index < 18){
          if(typeof item !== 'string') 
            bool.push(item)
        }
      })

    const result = bool.every((item) => item === false)

    // console.log('BOOLEANS ===> ', bool)
    // console.log('******** RESULT ******** ', result)

    if(result && this.state.submit) this.handleOpen()
  }

  onSubmit = (e) => {
    e.preventDefault()

    Array.from(e.target)
      .forEach((item) => {
        if(item.type !== 'button' && item.type !== 'submit'){
          if(item.value.length === 0){
      console.log('item --- ', item)

            this.setState((state, props) => ({
              [`${item.name}Error`]: true,
              [`${item.name}HelperText`]: `please enter your ${item.name}`
            }))
          } else {
            this.setState((state, props) => ({
              [`${item.name}Error`]: false,
              [`${item.name}HelperText`]: '',
            }))
          }
        }
    })

    this.isErrorInputs(e.target)

    this.setState(() => ({submit: true}))
  }

  handleState = (e) => {
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
      noErrorState,
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
          helpertext={firstNameHelperText}
          onChange={this.stringChange} 
          // onChange={(e)=>setName(e.target.value)}
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
          helpertext={lastNameHelperText}
          onChange={this.stringChange} 
        />
        <TextField 
          className={classes.textFld}
          InputProps={{
            classes: { input: classes.resize },
          }}
          id="date of birth" 
          name="dateBirth"
          label="Date of Birth" 
          inputProps={{ maxLength: 10 }}
          error={dateBirthError}
          helpertext={dateBirthHelperText}
          onChange={this.numberChange} 
        />
        <TextField 
          className={classes.textFld} 
          inputProps={{ maxLength: 13 }}
          InputProps={{
            classes: { input: classes.resize },
          }}
          id="home phone" 
          name="homePhone"
          label="Home Phone" 
          error={homePhoneError}
          helpertext={homePhoneHelperText}
          onChange={this.phoneNumber} 
        />
        <TextField 
          className={classes.textFld} 
          InputProps={{
            classes: { input: classes.resize },
          }}
          id="email" 
          name="email"
          label="Email"
          error={emailError}
          helpertext={emailHelperText}
          onChange={this.emailChange}
        />
        <TextField 
          className={classes.textFld}
          id="social security" 
          name="ssn" 
          InputProps={{
            classes: { input: classes.resize },
          }}
          label="SSN" 
          inputProps={{ maxLength: 10 }}
          InputProps={{
            classes: { input: classes.resize },
          }}
          error={ssnError}
          helpertext={ssnHelperText}
          onChange={this.numberChange}
        />
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
          helpertext={zipHelperText}
          onChange={this.numberChange}
        />
        <FormControl error={stateError} className={classes.formControl} name="stateSelect">
            <InputLabel helpertext={stateHelperText}>State</InputLabel>
            <Select
              labelId="stateLabel"
              name="state"
              id="stateSelect"
              value={stateSelect}
              onChange={this.handleState}
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
          helpertext={passwordHelperText}
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
          helpertext={passwordConfirmHelperText}
        />

        {/*<p>noErrorState: {JSON.stringify(this.state.noErrorState)}</p>*/}

        <div className={classes.buttonWrapper}>
          <Button className={classes.button} type="submit" variant="contained" color="primary">submit</Button>
          <Button className={classes.button} type="button">cancel</Button>
        </div>

        <TransitionsModal 
          handleClose={this.handleClose}
          open={open} 
        />
        <pre>{JSON.stringify(this.state, null, 2) }</pre>
      </form>
    )
  }
}



export default withStyles(useStyles)(Form)