import React              from 'react';
import { makeStyles }     from '@material-ui/core/styles';
import { 
  Modal,
  Backdrop,
  Fade,
}                         from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({ open, handleClose, data }) {
    const classes = useStyles()
    const { firstName } = data

    console.log(data)
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Thank you {firstName}!</h2>
            <p id="transition-modal-description">
              your Message Will Be Sent
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}