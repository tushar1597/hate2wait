import React, { Component, Fragment } from "react";
import {  } from '../constants/constants';
import { connect } from 'react-redux';
import { Switch, Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Users from './users';

class LandingPage extends Component {
    constructor(){
        super();
        this.state={
            counter : 0
        }
    }
    componentDidUpdate(prev_props){
        
    }
    incrementCounter = () => {
        this.setState({
            counter : ++this.state.counter,
        })
    }
    componentDidMount() {
        
    }
    
    render() {
        return(
        <Fragment>
        <p>The value is {this.state.counter}</p>
        <button onClick={this.incrementCounter}>Increment</button>
        </Fragment>
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
