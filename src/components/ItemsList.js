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
                    {/* TODO: turn the by into a link. */}
                    {/* TODO: add a time ago value. */}
                    {/* TODO: trailing links: past, web, discuss */}
                    {score} {`${score > 1 ? 'points' : 'point'}`} by {by} time ago
                                {/* <span>descendants: </span><span>{descendants}</span>
                                    <span>id: </span><span>{id}</span>
                                    <span>time: </span><span>{time}</span>
                                    <span>type: </span><span>{type}</span>
                                */}
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