import React from 'react';

import Card from './Card';

import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onConfirm}>
            <Card classname={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <button type="submit" onClick={props.onConfirm}>Okay</button>
            </footer>
        </Card>
        </div>
    );
};

export default ErrorModal;