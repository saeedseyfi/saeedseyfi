import React from 'react'
import Image from 'next/image'

import styles from './index.module.scss'

export const Intro = () => (
    <main className={styles.main}>
        <div className={styles.frame}>
            <div className={styles.grid}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt="Saeed Seyfi" width={200} height={200}/>
                </div>

                <div className={styles.info}>
                    <h1 className={styles.title}>Saeed Seyfi</h1>
                    <h2 className={styles.subtitle}>JavaScript Engineer</h2>

                    <a href="mailto:me@saeedseyfi.com">me@saeedseyfi.com</a>
                </div>
            </div>
        </div>
    </main>
);
