import React from 'react';

import Card from '../UI/Card';
import styles from './TextPostsList.module.css';

const TextPostsList = props => {
    return (
        <Card className={styles.textposts}>
        <ul>
            {props.textPosts.map(textPost => (
                <li key={textPost.id}>
                    {textPost.username} ({textPost.content})
                </li>
            ))}
        </ul>
        </Card>
    );
};

export default TextPostsList;