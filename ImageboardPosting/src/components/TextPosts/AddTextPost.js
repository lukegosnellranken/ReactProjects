import React, {useState} from 'react';

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddTextPost.module.css';

const AddTextPost = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredContent, setEnteredContent] = useState('');
    const [error, setError] = useState('');

    const addTextPostHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredContent.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter valid text content.'
            });
            return;
        }

        //console.log(enteredUsername, enteredContent);
        props.onAddTextPost(enteredUsername, enteredContent);
        setEnteredUsername('');
        setEnteredContent('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const contentChangeHandler = (event) => {
        setEnteredContent(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={addTextPostHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor="content">Text</label>
                    <input id="content" type="text" value={enteredContent} onChange={contentChangeHandler}/>
                    <button type="submit">Post</button>
                </form>
            </Card>
        </div>
    );
};

export default AddTextPost;