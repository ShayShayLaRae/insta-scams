import React from 'react';
import logo from '../assets/Instamilligram.svg'
import './Header.css';
import {connect} from 'react-redux';


const Header = (props) => {
    return (
        <header>
            {props.profile_img &&<div className='profile-pic'><img src={props.profile_img} alt=''/></div>}
            <img src={logo} alt='insta logo reverse'/>
            <div className='logout'></div>
        </header>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps)(Header);