import React from 'react';

import twitter_logo from "../images/twitter-logo.png";

import"../components/styles/BadgesList.css";

class BadgesList extends React.Component{
    render(){
        return(
            <ul className="list-unstyled">
                {this.props.badges.map((badge)=>{
                    return(
                        <li key={badge.id} className='Badge__section-name-list'>
							<img src={badge.avatarUrl} className='Badge__avatar-list' />
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