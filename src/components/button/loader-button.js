import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { Switch, Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class LoaderButton extends Component {
    
    
    render() {
        if(this.props.loading){
            return(
                <p className={this.props.classes && this.props.classes.loader ? this.props.classes.loader : ''}>loading...</p>
            )
        }else{
            return(
            <button className={this.props.classes  && this.props.classes.button ? this.props.classes.button : ''} onClick={this.props.onClick}>{this.props.children}</button>
                )
        }
        
    }
}

export default LoaderButton;
