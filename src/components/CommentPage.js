import React, { Component } from 'react'
import { ScaleLoader } from 'react-spinners'

import ItemsList from '../components/ItemsList'

class CommentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            errored: false,
            story: null,
            comments: [],
        };
    }

    componentDidMount() {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.item}.json?print=pretty`)
            .then((response) => response.json())
            .then((story) => {
                Promise.all(story.kids
                    .map((commentId) =>
                        fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`)
                            .then((response) => response.json())
                    )
                ).then((comments) =>{
                    this.setState({ isFetching: false, story, comments });
                })
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
        /* 
        by: "dangrossman"
        id: 16104246
        parent: 16103944
        text: "According to Google cache, the robots.txt file and sitemap, it used to be a WordPress-powered link directory that you could pay to submit a link to and purported to offer &quot;authority&quot; to boost your search engine rankings. At some point recently, they probably threw an &quot;exit&quot; or &quot;die()&quot; into the index file: all the pages are there but returning no content. The millions of links were likely created by the site&#x27;s owner&#x27;s own other sites&#x2F;domains; a spammy link network to game search engines again. There&#x27;s tons of link and content farms like this out there trying to manipulate Google search results."
        time: 1515482572
        type: "comment"
        */
        return (
            <div>
                {this.state.comments.map((comment) => (
                    <div key={comment.id}>
                        <span>by: {comment.by}</span>
                        <span>id: {comment.id}</span>
                        <span>parent: {comment.parent}</span>
                        <span>time: {comment.time}</span>
                        <span>type: {comment.type}</span>
                        <span dangerouslySetInnerHTML={{ __html: comment.text }} />
                    </div>
                    )
                )}
            </div>
        );
    }
}

export default CommentPage
