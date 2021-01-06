import React, {useEffect, useState} from "react"
import {DocumentContext} from "next/document"
import {useRouter} from "next/router"
import Link from "next/link"
import {MainLayout} from "../common/components/MainLayout"
import {itemFromArrayType} from "../common/types/types"
import styles from "../common/styles/DataFromArray.module.css"

export default function DataFromArray({singleItemData: serverSingleItemData}: { singleItemData: itemFromArrayType }) {

    const router = useRouter()
    const [singleItemData, setSingleItemData] = useState(serverSingleItemData)

    useEffect(() => {
        async function load() {
            const response = await fetch(`${process.env.API_URL}/data/${router.query.id}`)
            const data = await response.json()
            setSingleItemData(data)
        }

        if (!serverSingleItemData) {
            load()
        }
    }, [])

    if (!singleItemData) {
        return <MainLayout>
            <p>Loading ...</p>
        </MainLayout>
    }

    return <MainLayout>
        <div className={styles.item}>
            <h1>{singleItemData.title}</h1>
            <h3>{singleItemData.description}</h3>
            <Link href={"/"}><a>Back to all data</a></Link>
        </div>
    </MainLayout>
}

DataFromArray.getInitialProps = async (ctx: DocumentContext) => {
    if (!ctx.req) {
        return {singleItemData: null}
    }
    const response = await fetch(`${process.env.API_URL}/data/${ctx.query.id}`)
    const singleItemData: itemFromArrayType = await response.json()
    return {singleItemData}
}
