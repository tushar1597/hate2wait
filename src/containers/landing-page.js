import React, { Component, Fragment } from "react";
import {  } from '../constants/constants';
import { connect } from 'react-redux';
import { Switch, Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    componentDidUpdate(prev_props){
        
    }
    componentDidMount() {
        
    }
    
    render() {
        return(
            <h1>Home Page</h1>
        )
    }
}

const mapStateToProps = (state) => (
    {
       
    })

const mapDispatchToProps = {
    
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(LandingPage));
