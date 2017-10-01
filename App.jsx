import React from 'react'
import Content from './components/Content.jsx';
import ReactDOM from 'react-dom';

const App = () => (
    <div>
        <Content text="A simple flux implementation with React" />
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));