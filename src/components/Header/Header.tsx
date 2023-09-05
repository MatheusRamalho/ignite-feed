import styles from './Header.module.css'

import igniteLogo from '../../assets/ignite-logo-simbol.svg'

export const Header = () => {
    return (
        <div className={styles.header}>
            <img src={igniteLogo} alt="Ignite simbol" />

            <strong> Ignite feed </strong>
        </div>
    )
}
