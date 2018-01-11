import React, { Component } from 'react'
import { ScaleLoader } from 'react-spinners'

import ListItem from '../components/ListItem'

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
        const { isFetching, errored, comments, story } = this.state;

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

        return (
            <div>
                {/* omit index prop required. */}
                <ListItem {...{ ...story, index: 0, internalUrls: false }} />
                <div><br />This is where the input thing goes :X<br /><br /></div>
                {comments.map((comment) => (
                    [(<div key={comment.id} id={comment.id} style={{ display: 'flex', textAlign: 'left' }}>
                        <div>^</div>
                        <div>
                            <a href={`https://news.ycombinator.com/user?id=${comment.by}`}>{comment.by}</a>
                            <span> time ago </span>
                        </div>
                    </div>),
                    (<div key={comment.id} style={{ textAlign: 'left', marginLeft: '20px' }}>
                        <span dangerouslySetInnerHTML={{ __html: comment.text }} />
                    </div>)]
                    )
                )}
            </div>
        );
    }
}

export default CommentPage
