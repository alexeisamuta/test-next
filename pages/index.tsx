import React, {useEffect, useState} from "react"
import {DocumentContext} from "next/document"
import Link from "next/link"
import {Timer} from "../common/components/Timer"
import {MainLayout} from "../common/components/MainLayout"
import {itemFromArrayType} from "../common/types/types"
import styles from "../common/styles/Home.module.css"

export default function Home({data: serverData}: { data: Array<itemFromArrayType> }) {

    const [data, setData] = useState(serverData)

    useEffect(() => {
        async function load() {
            const response = await fetch(`${process.env.API_URL}/data`)
            const json = await response.json()
            setData(json)
        }

        if (!serverData) {
            load()
        }
    }, [])

    if (!data) {
        return <MainLayout>
            <p>Loading ...</p>
        </MainLayout>
    }

    return (
        <MainLayout>
            <div className={styles.container}>
                <div>
                    <Timer/>
                </div>
                <h1> Displaying objects </h1>
                <div className={styles.itemsArray}>
                    {data.map(elem => (
                        <div key={elem.id} className={styles.itemArray}>
                            <Link href={`/[id]`} as={`/${elem.id}`}>
                                <a>{elem.title}</a>
                            </Link>
                            <pre>{JSON.stringify(elem, null, 2)}</pre>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    )
}

Home.getInitialProps = async (ctx: DocumentContext) => {
    if (!ctx.req) {
        return {data: null}
    }
    const response = await fetch(`${process.env.API_URL}/data`)
    const data: itemFromArrayType[] = await response.json()
    return {data}
}
