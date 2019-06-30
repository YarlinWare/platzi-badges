import React from 'react';
import { Link } from 'react-router-dom';

import twitter_logo from "../images/twitter-logo.png";
import Gravatar from './Gravatar';

import"../components/styles/BadgesList.css";

class BadgesListItem extends React.Component {
    render() {
      return (
            <div className="BadgesListItem">
                <Gravatar className="Badge__avatar-list" email={this.props.badge.email} />
                <div>
                    {this.props.badge.firstName} {this.props.badge.lastName}
                    <br />
                    {this.props.badge.jobTitle}
                    <br />
                    <img src={twitter_logo} className='twitter_logo' />
                    {/*<a href={"https://twitter.com/"+this.props.badge.twitter} target="_blank">*/}
                        <span className='twitter__blue_font'>{this.props.badge.twitter}</span>
                    {/*</a>*/}
                </div>
            </div>
        );
    }
}

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
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                                <BadgesListItem badge={badge}/>
                            </Link>
						</li>
                    );
                })}
            </ul>
        );
    }
}

export default BadgesList;