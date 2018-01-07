import React, { Component } from 'react'

import ItemsList from '../components/ItemsList';

class AskPage extends Component {
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
        fetch('https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty')
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
                    <h1>This is the Ask page</h1>
                    <p>It's fetching</p>
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
        // implicit else, has data :)

        // by: "antouank"
        // descendants: 0
        // id: 16084349
        // score: 1
        // time: 1515226016
        // title: "Intel faces class action lawsuits regarding Meltdown and Spectre"
        // type: "story"
        // url: "https://arstechnica.com/gadgets/2018/01/intel-faces-class-action-lawsuits-regarding-meltdown-and-spectre/"

        return (<ItemsList stories={stories} internalUrls={false} />);
    }
}

export default AskPage
