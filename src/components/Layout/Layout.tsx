import { LayoutProps } from './Layout.types'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'

import styles from './Layout.module.css'

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.layout}>
            <Header />

            <div className={styles.layoutWrapper}>
                <Sidebar />

                <main className="">
                    {children}
                </main>
            </div>
        </div>
    );
}
