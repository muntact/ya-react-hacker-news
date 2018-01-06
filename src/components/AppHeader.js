import React from 'react';
import { NavLink } from 'react-router-dom'

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
        <h1 className="App-title">YA React HN Clone</h1>
        <NavLink to="/newest" {...linkProps}>new</NavLink>{` | `}
        <NavLink to="/newcomments" {...linkProps}>comments</NavLink>{` | `}
        <NavLink to="/show" {...linkProps}>show</NavLink>{` | `}
        <NavLink to="/ask" {...linkProps}>ask</NavLink>{` | `}
        <NavLink to="/jobs" {...linkProps}>jobs</NavLink>{` | `}
        <NavLink to="/submit" {...linkProps}>submit</NavLink>
    </header>
);

export default AppHeader;
