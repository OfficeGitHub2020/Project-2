import React, { Component } from 'react';
import styles from './MainPage.css'
import Header from '../Header/Header'
import FirstSection from '../FirstSection/FirstSection'

class MainPage extends Component {
    render() {
        return (
            <main>
                <Header/>
                {/* <div className={styles.Text}>Header with logo</div> */}

                <div className={styles.Text}>
                    <h1>Create The Ultimate Webinar Landing Page</h1>
                    <h3>Dive deep into what drives webinar success with Cody Writer, author of The Ultimate Guide To Webinar Landing Pages</h3>
                </div>

                <FirstSection />
            </main >
        )
    }
}

export default MainPage;