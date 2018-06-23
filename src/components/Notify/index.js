import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

//
class Notify extends Component {
    notify = () => toast('User Not Exists');

    render() {
      return (
        <div>
          <button onClick={this.notify}>Notify !</button>
          <ToastContainer autoClose={5000} />
        </div>
      );
    }
}


export default Notify;
