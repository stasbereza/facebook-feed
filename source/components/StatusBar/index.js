// Core
import React, { Component } from 'react';

// Components
import { Consumer } from 'components/HOC/withProfile';

// Instruments
import Styles from './styles.m.css';

export default class StatusBar extends Component {
    render () {
        return (
            <Consumer>
                {({ avatar, currentUserFirstName, currentUserLastName }) => (
                    <section className = { Styles.statusBar }>
                        <button>
                            <img src = { avatar } />
                            <span>{ currentUserFirstName }</span>
                            &nbsp;
                            <span>{ currentUserLastName }</span>
                        </button>
                    </section>
                )}
            </Consumer>
        );
    }
}
