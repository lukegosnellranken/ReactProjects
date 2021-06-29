import React from 'react';

import Card from '../UI/Card';
import styles from './AddTextPost.module.css';

const AddTextPost = props => {
    const addTextPostHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card className={styles.input}>
            <form onSubmit={addTextPostHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                <label htmlFor="postText">Text</label>
                <input id="postText" type="text" />
                <button type="submit">Post</button>
            </form>
        </Card>
    );
};

export default AddTextPost;