import Link from 'next/link'
import Image from 'next/image'
import styles from '../../../styles/Layout/Footer.module.scss'

export default function Icon({ imageSrc, imageAlt, widthAndHeight }) {
    return (
        <Image
            src={imageSrc}
            alt={imageAlt}
            width={widthAndHeight}
            height={widthAndHeight}
            className={styles.icon}
        />
    )
}
