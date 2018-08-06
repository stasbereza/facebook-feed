// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// Components
import { Consumer } from 'components/HOC/withProfile';

// Instruments
import Styles from './styles.m.css';

export default class Post extends Component {
    static propTypes = {
        comment: PropTypes.string.isRequired,
        created: PropTypes.number.isRequired,
    }
    render () {
        const { comment, created } = this.props;

        return (
            <Consumer>
                {({ avatar, currentUserFirstName, currentUserLastName }) => (
                    <section className = { Styles.post }>
                        <img src = { avatar } />
                        <a>{`${currentUserFirstName} ${currentUserLastName}`}</a>
                        <time>{moment.unix(created).format('MMMM D h:mm:ss a')}</time>
                        <p>{comment}</p>
                    </section>
                )}
            </Consumer>
        );
    }
}
