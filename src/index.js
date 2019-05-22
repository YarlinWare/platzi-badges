import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import Badge from './components/badge';

const container = document.getElementById('app');

ReactDOM.render(
    <Badge 
        firstName="Cristian" 
        lastName="Caballero" 
        jobTitle="Web Developer"
        twitter="DevCrsCaballero"
        avatarUrl="https://i.stack.imgur.com/UWqTW.jpg?s=328&g=1"
    />
    , container);