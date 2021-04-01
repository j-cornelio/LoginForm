import React, { useState }            from 'react'
import { InputAdornment }             from '@material-ui/core'
import TextField                      from '@material-ui/core/TextField'
import { RemoveRedEye }               from '@material-ui/icons'
import PropTypes                      from 'prop-types'
import { makeStyles }                 from '@material-ui/core/styles'

// https://itnext.io/building-a-toggled-mask-password-input-component-w-react-and-material-ui-f55e6bd73434

const useStyles = makeStyles((theme) => ({
  eye: {
    cursor: 'pointer',
  }
}))

const PasswordInput = (props) => {
  const classes = useStyles()
  const [passwordIsMasked, setPWMasked] = useState(true)
  console.clear()
console.log('props ---> ', props)
  return (
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
        )
      }}
    />
  )
}//



const Show = () => {
  const [password, setPassword] = useState('')

  const onChange = value => {
    setPassword(value)
  }

    return (
      <PasswordInput
        label="Password"
        name="password"
        value={password}
        onChange={(e) => onChange(e.target.value)}
      />
    )
}

export default Show