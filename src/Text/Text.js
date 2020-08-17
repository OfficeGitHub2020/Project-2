import React from 'react';
import styles from './Text.css'

const text = () => {
    return (
        <div  >
            <div className={styles.DivWidth}>
                <h5 className={styles.Text}>About The Webinar</h5>
                <p className={styles.Text}>Vestibulum eget tincidunt libero. Curabitur aliquet egestas leo. Donec vel mauris nibh. Aliquam volutpat placerat eros, at egestas risus ullamcorper vel.</p>
            </div>

            <div className={styles.DivWidth}>
                <h5 className={styles.Text}>You'll Learn</h5>
                <p className={styles.Text}>
                    Outline the segments and elements of your webinar
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus volutpat lacus vel elementum.
                    Sed quis nibh nisl. Nam mauris nisl, pharetra id ultrices sed, viverra in purus.
                    Quisque et consequat diam, ut fermentum arcu. In porta quam tellus, sed porta mauris dictum e
                </p>
            </div>

            <div className={styles.DivWidth}>
                <h5 className={styles.Text}>
                    About Our Guest<br/>
                    Cody Writer
                </h5>
                <p className={styles.Text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus volutpat lacus vel elementum. Sed quis nibh nisl. Nam mauris nisl, pharetra id ultrices sed, viverra in purus. Quisque et consequat diam, ut fermentum arcu. In porta quam tellus, sed porta mauris dictum et
                </p>
            </div>
        </div >
    )
}

export default text;