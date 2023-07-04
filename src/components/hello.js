import React, { Component } from 'react';

class hello extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.firstName} {this.props.lastName} !
            </div>
        );
    }
}

export default hello;
