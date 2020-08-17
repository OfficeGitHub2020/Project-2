import React from 'react';
import Form from '../Form/Form';
import Text from '../Text/Text';
import styles from './FirstSection.css'

const firstSection = () => {
    return (
        <div>
            <div className={styles.Text}>
                <Text />
            </div>
            <div className={styles.Form}>
                <Form />
            </div>
        </div>
    )
}

export default firstSection;
