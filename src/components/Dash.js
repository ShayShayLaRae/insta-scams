import React, { Component } from 'react';
import Post from './Post';
import Add from './Add';



class Dash extends Component {
    state = {
        posts: [],
        toggleAdd: false
    }
    toggle = () => {
        this.setState((prevState) => {
            return {
                toggleAdd: !prevState.toggleAdd
            }
        })
    }
    render() {
        return (
            <div>
                <Post />
                {this.state.toggleAdd && <Add />}
            </div>
        )
    }
}

export default Dash;