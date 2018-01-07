import React, { Component } from 'react'

import ItemsList from '../components/ItemsList';

class ShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            errored: false,
            stories: [],
        };
    }

    componentDidMount() {
        // TODO: move this to services:....
        // call the api https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty
        fetch('https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty')
            .then((response) => response.json())
            .then((storyIds) => Promise.all(storyIds.slice(0, 25)
                .map((storyId) =>
                    fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
                        .then((response) => response.json())
                ))
            )
            .then((stories) => {
                this.setState({ isFetching: false, stories });
            })
            .catch((err) => {
                console.log('it err\'d!', err);
                this.setState({ isFetching: false, errored: true });
            })
    }

    render() {
        const { isFetching, errored, stories } = this.state;

        if (isFetching) {
            return (
                <div>
                    <h1>This is the Show page</h1>
                    <p>It's fetching</p>
                </div>
            );
        } else if (errored) {
            return (
                <div>
                    <h1>This is the Show page</h1>
                    <p>It errored</p>
                </div>
            );
        }
        // implicit else, has data :)
        return (<ItemsList stories={stories} />);
    }
}

export default ShowPage
