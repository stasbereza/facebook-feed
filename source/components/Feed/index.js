// Core
import React, { Component } from 'react';

// Components
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';

// Instruments
import Styles from './styles.m.css';

export default class Feed extends Component {
    state = {
        posts: [
            { id: '123', comment: 'Hi there!', created: 1533586293375 },
            { id: '456', comment: 'Hello!', created: 1533586295000 }
        ],
        spinner: false,
    };
    render () {
        const { posts, spinner } = this.state;

        const postsJSX = posts.map((post) => {
            return <Post key = { post.id } { ...post } />;
        });

        return (
            <section className = { Styles.feed }>
                <Spinner isSpinning = { spinner } />
                <StatusBar />
                <Composer />
                {postsJSX}
            </section>
        );
    }
}
