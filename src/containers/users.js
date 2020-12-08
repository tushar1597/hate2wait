import React, { Component, Fragment } from "react";
import {  } from '../constants/constants';
import { connect } from 'react-redux';
import { Switch, Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { getUsersAPI,fetchMoreUsersAPI} from '../actions/util.action';
import './styles/users.css';
import LoaderButton from "../components/button/loader-button";

class Users extends Component {
    constructor(){
        super();
        this.state={
            pg_count : 0
        }
    }

    componentDidUpdate(prev_props){
        if(prev_props){

        }
    }
    componentDidMount() {
        this.props.getUsersAPI();
    }
    fetchMoreUsers = () => {
        this.props.fetchMoreUsersAPI(this.props.users,this.props.pg_count + 1)
    }
    
    render() {
        return(
        <Fragment>
            <h1>Users</h1>
            <div className="usr-container">
            <div className="card-row">
            {
                this.props.users && this.props.users.map ? this.props.users.map(({picture,name,location},index) => {
                    return(
                        <div className="card-col">
                            <div className="img-wr"> 
                            <img className="card-img" src={picture.thumbnail}></img>
                            </div>
                        <p>{name ? (name.title) +" " +  (name.first) + " " + (name.last) : ''}</p>
                        <p>{location ? location.city + ", " + location.state : ''}</p>
                        </div>
                    );
                })
             : null
        }
            </div>
            <LoaderButton loading={this.props.fetched} classes={{button: "fm-btn",loader: "loader"}} onClick={this.fetchMoreUsers}>Fetch More</LoaderButton>
            {/* <button className="fm-btn" onClick={this.fetchMoreUsers}>Fetch More</button> */}
            </div>
        </Fragment>
        )
    }
}

const mapStateToProps = (state) => (
    {
        users : state.util.users,
        fetched : state.util.fetched,
        pg_count : state.util.pg_count
    })

const mapDispatchToProps = {
    getUsersAPI,    
    fetchMoreUsersAPI,
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Users));
