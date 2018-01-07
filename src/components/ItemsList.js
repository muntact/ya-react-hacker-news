import React from 'react';
import PropTypes from 'prop-types';

const ItemsList = ({ stories, internalUrls }) => (
    <div>
        {stories.map(({ by, descendants, id, score, time, title, type, url }, index) => (
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
                    <a href={`https://news.ycombinator.com/item?id=${id}`}>{descendants > 0 ? `${descendants} comments` : 'discuss'}</a> 
                    </span>
                </div>
            </div>
        ))}
    </div>
);

ItemsList.props = {
    internalUrls: PropTypes.boolean,
};

ItemsList.defaultProps = {
    internalUrls: false,
};


export default ItemsList;