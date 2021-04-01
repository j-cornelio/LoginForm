import { makeStyles }     from '@material-ui/core/styles'
import { 
  Typography,
  AppBar,
  Toolbar,
  IconButton,
}                         from '@material-ui/core'
import MenuIcon           from '@material-ui/icons/Menu'
import Login              from './components/loginPage/'
import Show           from './components/tutorialForm/Show'

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: 'white',
    boxShadow: '0 0 0 0',
    color: 'black',
    borderBottom: '10px solid #eee',
  },
  logo: {
    flex: 1,
    textAlign: 'center',
  },
  menu: {
    alignSelf: 'flex-start'
  }
}))


const App = () => {
  const classes = useStyles()

  return (
    // <Show />

    <>
     <AppBar className={classes.appbar} position="fixed">
        <Toolbar variant="dense">
          <IconButton className={classes.menu} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.logo} variant="h6" color="inherit">
            logo
          </Typography>
        </Toolbar>
      </AppBar>

      <Login />
    </>
  )
}

export default App;
