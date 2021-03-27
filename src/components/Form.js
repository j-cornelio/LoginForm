import React          from 'react'
import { 
  makeStyles,
  Button,
}                     from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      background: 'pink'
      outline: '1px solid green'
    },
  textFld: { width: 100, height: 40, outline: '1px solid red'}   
  },
}));

const Form = () => {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="first-name" style = {styles.textFld} label="First Name" />
      <TextField id="last-name" label="Last Name" />
      <TextField id="date-birth" label="Date of Birth" />
      <TextField id="home-phone" label="Home Phone" />
      <TextField id="email" label="Email" />
      <TextField id="ssn" label="SSN" />
      <TextField id="city" label="City" />
      <TextField id="state" label="State" />
      <TextField id="zip" label="Zip" />
      <TextField id="password" label="Password" />
      <TextField id="confirm-password" label="Confirm Password" />

      <Button variant="contained" color="primary">SUBMIT</Button> 
      <Button variant="contained" color="primary">Cancel</Button> 
    </form>
  )
}

export default Form