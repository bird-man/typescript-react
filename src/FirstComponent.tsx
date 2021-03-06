import * as React from 'react';

let Logo = 'https://logrocket.com/img/logo.png';

export default class FirstComponent extends React.Component <{}> {

    render() {
        return(
            <div>
                {/* React components must have a wrapper node/element */}
                <h1>A Simple React Component Example with Typescript</h1>
                <div>
                    <img src={Logo} />
                </div>
                <p>I am a component which shows the logrocket logo.  For more info on Logrocket, please visit <a href="https://logrocket.com">https://logrocket.com</a></p>
            </div>
        )
    }
}