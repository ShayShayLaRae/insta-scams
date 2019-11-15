import React, { Component } from 'react';
import Swal from 'sweetalert2';

class Add extends Component {
  state = {
    title: '',
    imgUrl: '',
    content: ''
  }
  
  render() {
    return (
      <div>
        <input placeholder='Title' type='text' />
        <input placeholder='Image URL' type='text' />
        <div>
          <img src={this.state.imgUrl} alt=''/>
        </div>
        <textarea placeholder='say something'/>
        <button>Post</button>
      </div>
    );
  }
}

export default Add;