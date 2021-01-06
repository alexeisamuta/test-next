import React from "react"
import Link from "next/link"
import style from "../styles/MainLayout.module.css"

export function MainLayout({children}) {
    return (
        <>
            <nav className={style.nav}>
                <Link href={"/"}><a>Home</a></Link>
                <Link href={"/pictures"}><a>Pictures</a></Link>
            </nav>
            <main className={style.main}>
                {children}
            </main>
        </>
    )
}