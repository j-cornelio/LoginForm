import React                    from 'react'
import { 
  makeStyles,
}                               from '@material-ui/core';
import Form                     from './Form';
import Heading                  from './Heading';


const useStyles = makeStyles((theme) => ({
  root: {
      padding: theme.spacing(5)
  },
}))

export default () => {
  const classes = useStyles()

  return (
      <div className={classes.root}>
        <Heading />
        <Form />
      </div>
  )
}


