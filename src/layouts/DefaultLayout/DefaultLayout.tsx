import { ReactNode } from 'react'

import styles from './DefaultLayout.module.css'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

type LayoutProps = {
    children: ReactNode
}

export const DefaultLayout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.layout}>
            <Header />

            <div className={styles.layoutWrapper}>
                <Sidebar />

                <main className=""> {children} </main>
            </div>
        </div>
    )
}
