import { AvatarProps } from './Avatar.type'
import styles from './Avatar.module.css'

export const Avatar = ({ hasBorder = true, ...props }: AvatarProps) => {
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
        />
    );
}
