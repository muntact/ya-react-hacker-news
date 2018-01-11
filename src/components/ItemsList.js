import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

const ItemsList = ({ stories, internalUrls }) => (
    <div>
        {stories.map((story, index) => (
            <ListItem {...{ ...story, index, internalUrls }} />
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