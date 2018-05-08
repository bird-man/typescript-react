import * as React from 'react';
import UserInterface from './UserInterface';

export default class UserComponent extends React.Component<UserInterface, {}> {

    constructor (props: UserInterface) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>User Component</h1>
                <pre>Hello, {this.props.firstName} {this.props.lastName}</pre>
                <br/>
                <pre>you were born on {this.props.dob.toDateString()}</pre>
                <br/>
                <pre>your phone # is {this.props.phone}</pre>
                <br/>
                <pre>your email is {this.props.email}</pre>
                <br/>
                <pre>your super secret id is {this.props.id}</pre>
            </div>
        )
    }
}