import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/badge';

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName="Cristian" 
                                lastName="Caballero" 
                                jobTitle="Web Developer"
                                twitter="DevCrsCaballero"
                                avatarUrl="https://i.stack.imgur.com/UWqTW.jpg?s=328&g=1"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;