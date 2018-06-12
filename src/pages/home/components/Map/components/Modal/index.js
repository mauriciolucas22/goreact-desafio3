import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TextFields from './components/TextField';

import { Actions as UsersActions } from '../../../../../../store/ducks/users';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {
  static propTypes = {
    setModalVisible: PropTypes.func.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    modalVisible: PropTypes.bool.isRequired,
  }

  state = {
    textInput: '',
  }

  onChange = (e) => {
    this.setState({ textInput: e.target.value });
  }

  handleClickOk = () => {
    // this.props.setModalVisible(true);
    const { latitude, longitude } = this.props;
    this.props.addUserRequest({
      latitude,
      longitude,
      userName: this.state.textInput,
    });
  };

  handleClose = () => {
    this.props.setModalVisible(false);
  };

  // <Button onClick={this.handleClickOpen}>Slide in alert dialog</Button>
  render() {
    return (
      <div>
        <Dialog
          open={this.props.modalVisible}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {'Digite um nome de usuário'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <TextFields onChange={this.onChange} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancelar
            </Button>
            <Button type="submit" onClick={this.handleClickOk} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modalVisible: state.users.modalVisible,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AlertDialogSlide);
