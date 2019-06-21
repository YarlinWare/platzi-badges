import React from 'react';
import { Link } from 'react-router-dom';

import twitter_logo from "../images/twitter-logo.png";
import Gravatar from './Gravatar';

import"../components/styles/BadgesList.css";

class BadgesList extends React.Component{
    render(){
        if(this.props.badges.length===0){
            return (
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new" >
                        Create new badge
                    </Link>
                </div>
            );
        }
        return(
            <ul className="list-unstyled">
                {this.props.badges.map((badge)=>{
                    return(
                        <li key={badge.id} className='Badge__section-name-list'>
                            <Gravatar className="Badge__avatar-list" email={badge.email} />
							<div>
								{badge.firstName} {badge.lastName}
								<br />
								{badge.jobTitle}
								<br />
								<img src={twitter_logo} className='twitter_logo' />
								<a href={"https://twitter.com/"+badge.twitter}>
                                    <span className='twitter__blue_font'>{badge.twitter}</span>
                                </a>
							</div>
						</li>
                    );
                })}
            </ul>
        );
    }
}

export default BadgesList;