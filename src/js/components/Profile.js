import React from "react"
import {connect} from "react-redux"
import {browserHistory} from 'react-router'

import Image from 'react-bootstrap/lib/Image'

import {fetchProfile} from "../actions/profileActions"

@connect((store) => {
    return {
         profile : store.profile.profile 
    };
})

export default class Profile extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchProfile());
    }

    render() {
        return (
            <div>
                <h3>{this.props.profile.name} {this.props.profile.lastName}</h3>
                <Image className = 'icon-friends-posts' src={this.props.profile.photo} role="button"/> 
                <h4>{this.props.profile.jobTitle}</h4>  
                <h4>{this.props.profile.compnay}</h4>                                   
            </div>
        )
    }
}
