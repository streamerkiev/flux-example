import AppDispatcher from './AppDispatcher';
import { EventEmitter } from 'events';

let _articles = [];

class AppStore extends EventEmitter {

    constructor() {
        super();

        this.dispatchToken = AppDispatcher.register(this.dispatcherCallback.bind(this));
    }

    emitChange() {
        this.emit('STORE_CHANGE');
    }

    getArticles() {
        return _articles;
    }

    submitArticle(article) {
        _articles.push(article);
    }

    removeArticle(key) {
        _articles.splice(key,1);
    }

    addChangeListener(callback) {
        this.on('STORE_CHANGE', callback);
    }

    removeChangeListener(callback) {
        this.removeListener(callback);
    }

    dispatcherCallback(action) {
        switch (action.actionType) {
            case 'SUBMIT_ARTICLE':
                this.submitArticle(action.value);
                break;

            case 'REMOVE_ARTICLE':
                this.removeArticle(action.value);
        }

        this.emitChange();

        return true;
    }
}

export default new AppStore();

