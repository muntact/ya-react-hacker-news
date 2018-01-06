import React from 'react';
import { Link } from 'react-router-dom'

const routeStyle = {
    color: 'black',
    textDecoration: 'none',
};

const activeStyle = {
    color: 'white',
};

const linkProps = {
    style: routeStyle,
    activeStyle,
};

const AppHeader = (props) => (
    <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
        <ul>
            <li><Link to="/newest" {...linkProps}>new</Link>{` | `}</li>
            <li><Link to="/newcomments" {...linkProps}>comments</Link>{` | `}</li>
            <li><Link to="/show" {...linkProps}>show</Link>{` | `}</li>
            <li><Link to="/ask" {...linkProps}>ask</Link>{` | `}</li>
            <li><Link to="/jobs" {...linkProps}>jobs</Link>{` | `}</li>
            <li><Link to="/submit" {...linkProps}>submit</Link></li>
        </ul>
    </header>
);

export default AppHeader;
