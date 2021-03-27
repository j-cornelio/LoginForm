import React          from 'react'
import { 
  Typography
}                     from '@material-ui/core';


const Header = () =>  
  <>
    <Typography variant="h4" color="red">Simple Registration</Typography>
    <Typography variant="h6">
    	We've completed most of your registration based on the information we have on file for you.
    	Please ensure this information is corret and choose a password.  
    	That's all you need to do!
    </Typography>
  </>


export default Header