import { PencilLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css'

import { Avatar } from '../Avatar'

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.sidebarCover}
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.sidebarProfile}>
                <Avatar src="http://www.github.com/matheusramalho.png" />

                <strong> Matheus Ramalho </strong>
                <span> Web Developer </span>
            </div>

            <footer className={styles.sidebarFooter}>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}
