import React from 'react';
import ReactDOM from 'react-dom';

// Component
    //(1) State that it manages
    //(2) Lifecycle - fetching from API
    //(3) UI

class App extends React.Component {
    render() {
        return (
        <div>
            Hello World!
            </div>
        )
    }
}

ReactDOM.render(
    //React Element
    //Where to render the Element to
    <App />, document.getElementById('app')
    )