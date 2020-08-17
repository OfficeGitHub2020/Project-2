import React from 'react';
import styles from './Header.css'

const header = () => {
    return (
        <div className={styles.MainDiv}>
            <img src="https://img.icons8.com/doodle/48/000000/small-business--v1.png" alt="Logo" className={styles.Logo} />
            <p className={styles.Text}>YOUR WEBCAST PROVIDER!!</p>
        </div>

    )
}

export default header;