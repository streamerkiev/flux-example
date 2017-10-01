import React from 'react'
import Button from './Button.jsx';
import List from './List.jsx'
import AppActions from '../lib/AppActions';
import AppStore from '../lib/AppStore'

class Content extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            message: ''
        };

        this.handleAdd = this.handleAdd.bind(this);
        this.onListArticles = this.onListArticles.bind(this);
    }

    componentDidMount() {
        AppStore.addChangeListener(this.onListArticles);
    }

    onListArticles() {
        this.listArticles();
    }

    listArticles() {
        this.setState({
            articles: AppStore.getArticles()
        });
    }

    handleAdd() {
        let textInput = document.getElementById('textInput');
        let textInputValue = textInput.value;

        if (textInputValue.length) {
            AppActions.submitArticle(textInputValue);

            textInput.value = '';
        }
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this.onListArticles);
    }

    render() {
        return (
            <div>
                {this.props.text}
                <br />
                <br />
                Enter text : <input type="text" name="textInput" id="textInput" />

                <Button handleClick={this.handleAdd} text="SUBMIT" />
                <br />

                <List articles={this.state.articles} listHeader="Submitted Articles" />
            </div>
        );
    }

}

export default Content;