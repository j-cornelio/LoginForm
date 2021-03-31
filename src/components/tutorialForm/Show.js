import React, { Component, useState }           from 'react'
import { InputAdornment }             from '@material-ui/core'
import TextField                      from '@material-ui/core/TextField'
import { RemoveRedEye }               from '@material-ui/icons'
import PropTypes                      from 'prop-types'
import { makeStyles }                 from '@material-ui/core/styles';

// https://itnext.io/building-a-toggled-mask-password-input-component-w-react-and-material-ui-f55e6bd73434

const useStyles = makeStyles((theme) => ({
  eye: {
    cursor: 'pointer',
  },
}))

const PasswordInput = (props) => {
  const classes = useStyles()
  const [passwordIsMasked, setPWMasked] = useState(true)

  return (
    <>
      <TextField 
        {...props} 
        type={passwordIsMasked ? 'password' : 'text'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <RemoveRedEye 
                className={classes.eye}
                onClick={() => setPWMasked(!passwordIsMasked)}
              />
            </InputAdornment>
          ),
        }}
      />
    </>
  )
}//



class Tutorial extends Component {
  constructor(props) {
    super(props)

    this.state = {
      password: '',
    }
  }

  onChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const { password } = this.state

    return (
      <PasswordInput
        label="Password"
        name="password"
        value={password}
        onChange={this.onChange}
      />
    )
  }
}

export default Tutorial