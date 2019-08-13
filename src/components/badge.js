import React from 'react';

import "./styles/Badge.css";
import confLogo from '../images/badge-header.svg';
import twitter_logo from "../images/twitter-logo.png";
import Gravatar from './Gravatar';

class Badge extends React.Component{
    render(){
        return  (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la Conferencia" />
                </div>
                <div className="Badge__section-name">
                    <Gravatar className="Badge__avatar" email={this.props.email} />
                    <h1>{this.props.firstName}<br/> {this.props.lastName}</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <a href={"https://twitter.com/"+this.props.twitter} target="_blank" rel="noopener noreferrer">
                        <img src={twitter_logo} className='twitter_logo' alt="Twitter Logo" />
                        <span className='twitter__blue_font'>{this.props.twitter}</span>
                    </a>
                </div>
                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
        );
    }
}

export default Badge;
