import React from "react"
import {MainLayout} from "../../common/components/MainLayout"
import styles from "../../common/styles/Pictures.module.css"

export default function Pictures() {
    return (
        <MainLayout>
            <h1 className={styles.title}>PICTURES</h1>
            <div className={styles.row}>
                <FirstColumnFruits/>
                <SecondColumnFruits/>
                <FirstColumnFruits/>
                <SecondColumnFruits/>
            </div>
        </MainLayout>
    )
}

const FirstColumnFruits = () => {
    return <div className={styles.column}>
        <img src="/1.jpg" alt="fruits" style={{width: "100%"}}/>
        <img src="/2.jpg" alt="fruits" style={{width: "100%"}}/>
        <img src="/3.jpg" alt="fruits" style={{width: "100%"}}/>
        <img src="/7.jpg" alt="fruits" style={{width: "100%"}}/>
    </div>
}
const SecondColumnFruits = () => {
    return <div className={styles.column}>
        <img src="/4.jpg" alt="fruits" style={{width: "100%"}}/>
        <img src="/5.jpg" alt="fruits" style={{width: "100%"}}/>
        <img src="/6.jpg" alt="fruits" style={{width: "100%"}}/>
    </div>
}