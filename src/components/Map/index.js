import React, { Component, Fragment } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions as UsersActions } from '../../store/ducks/users';

import { ModalWrapper, FormModal } from './styles';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 8,
    },
    modalIsOpen: false,
    userInput: '',
  };

  componentWillReceiveProps(nextProps) {
    // console.tron.log(nextProps);
    if (!nextProps.users.error) {
      toast.success('Usuário adicionado.', {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error('Usuário não existe!', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  latitude = 0;
  longitude = 0;

  openModal = this.openModal.bind(this);
  closeModal = this.closeModal.bind(this);

  openModal(e) {
    [this.longitude, this.latitude] = e.lngLat;
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleAddUser = (e) => {
    e.preventDefault();
    this.props.addUserRequest({
      latitude: this.latitude,
      longitude: this.longitude,
      userName: this.state.userInput,
    });
    this.setState({ userInput: '' });
    this.closeModal();
  }

  render() {
    return (
      <Fragment>
        <MapGL
          {...this.state.viewport}
          onClick={this.openModal}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {
            this.props.users.data.map(user => (
              <Marker
                key={user.id}
                latitude={user.coordinates.latitude}
                longitude={user.coordinates.longitude}
                captureClick
              >
                <img
                  style={{
                  borderRadius: 100,
                  width: 48,
                  height: 48,
                  border: '5px solid #7159C1',
                }}
                  src={user.avatar_url}
                  alt={user.name}
                />
              </Marker>
            ))
          }
          <ToastContainer />
        </MapGL>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          <ModalWrapper>
            <h2>Adicionar novo usuário</h2>
            <FormModal onSubmit={this.handleAddUser}>
              <input
                placeholder="Usuário no Github"
                value={this.state.userInput}
                onChange={e => this.setState({ userInput: e.target.value })}
              />
              <button
                style={{
                    margin: 3,
                    padding: '5px 0',
                    background: 'lightgray',
                    width: '45%',
                    color: '#fff',
                    fontSize: '18px',
                    fontwWeight: 'bold',
                    textAlign: 'center',
                    border: 0,
                  }}
                onClick={this.closeModal}
              >
                  Cancelar
              </button>
              <button
                style={{
                    margin: 3,
                    padding: '5px 0',
                    background: '#59ea9a',
                    width: '45%',
                    color: '#fff',
                    fontSize: '18px',
                    fontwWeight: 'bold',
                    textAlign: 'center',
                    border: 0,
                  }}
                type="submit"
              >
                  Salvar
              </button>
            </FormModal>
          </ModalWrapper>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
