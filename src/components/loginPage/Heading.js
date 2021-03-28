import React          from 'react'
import { makeStyles }     from '@material-ui/core/styles';
import { 
  Typography
}                     from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: 30,
    marginTop: 20,
    fontWeight: 'bold'
  },
  subhead: {
    marginBottom: 30
  },
}))

const Header = () =>  {
  const classes = useStyles()

  return(
	  <div style={{marginTop: 30}}>
	    <Typography className={classes.header} variant="h4">Simple Registration</Typography>
	    <Typography className={classes.subhead} variant="h6">
	    	We've completed most of your registration based on the information we have on file for you.
	    	Please ensure this information is corret and choose a password.  
	    	That's all you need to do!
	    </Typography>
	  </div>
  )
}


export default Header