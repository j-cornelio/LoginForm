import { makeStyles }     from '@material-ui/core/styles';
import { 
  Typography,
  AppBar,
  Toolbar,
  Menu,
  IconButton,
}                         from '@material-ui/core';
import MenuIcon           from '@material-ui/icons/Menu';
import Login              from './components/loginPage/'
import { green } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
    },
    flexGrow: 1,
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }
}))


const App = () => {
  const classes = useStyles()

  // return (
  //   <div className={classes.root}>
  //     <Typography>{'down(sm): red'}</Typography>
  //     <Typography>{'up(md): blue'}</Typography>
  //     <Typography>{'up(lg): green'}</Typography>
  //   </div>
  // )

  return (
    <>
     <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
      <Login />
    </>
  )
}

export default App;
