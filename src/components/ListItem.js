import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ by, descendants, id, score, time, title, type, url, index, internalUrls }) => (
    <div key={id} id={id} style={{ display: 'flex', textAlign: 'left' }}>
        <div>{index + 1}.^</div>
        <div>
            { /* TODO: put the domain after the anchor */}
            { /* TODO: anchor styling and text align. */}
            <a href={internalUrls ? url : `https://news.ycombinator.com/item?id=${id}`}>{title}</a>
            <br />
            {score} {`${score > 1 ? 'points' : 'point'}`}
            <span> by </span>
            <a href={`https://news.ycombinator.com/user?id=${by}`}>{by}</a>
            {/* TODO: add a time ago value. */}
            <span> time ago </span>
            {/* TODO: trailing links: past, web, discuss */}
            <span> |
            <a href={`${window.location.origin}/item/${id}`}>{descendants > 0 ? `${descendants} comments` : 'discuss'}</a>
            </span>
        </div>
    </div>
);

ListItem.props = {
    by: PropTypes.string.isRequired,
    // array of something 
    descendants: PropTypes.any, 
    id: PropTypes.number.isRequired, 
    score: PropTypes.number.isRequired, 
    time: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired, 
    url: PropTypes.string.isRequired, 
};

ListItem.defaultProps = {
    internalUrls: false,
};


export default ListItem;