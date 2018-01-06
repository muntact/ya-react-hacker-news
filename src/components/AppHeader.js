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
        <Link to="/newest" {...linkProps}>new</Link>{` | `}
        <Link to="/newcomments" {...linkProps}>comments</Link>{` | `}
        <Link to="/show" {...linkProps}>show</Link>{` | `}
        <Link to="/ask" {...linkProps}>ask</Link>{` | `}
        <Link to="/jobs" {...linkProps}>jobs</Link>{` | `}
        <Link to="/submit" {...linkProps}>submit</Link>
    </header>
);

export default AppHeader;
