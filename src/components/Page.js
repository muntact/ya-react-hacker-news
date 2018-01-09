import React, { Component } from 'react'
import { ScaleLoader } from 'react-spinners'

import ItemsList from '../components/ItemsList'

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            errored: false,
            stories: [],
        };
    }

    componentDidMount() {
        fetch(`https://hacker-news.firebaseio.com/v0/${this.props.api}.json?print=pretty`)
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
                <div style={{ marginTop: '10px' }}>
                    <ScaleLoader color={'#000'} loading />
                </div>
            );
        } else if (errored) {
            return (
                <div>
                    <h1>This is the Ask page</h1>
                    <p>It errored</p>
                </div>
            );
        }
        return (<ItemsList stories={stories} internalUrls={false} />);
    }
}

export default Page
