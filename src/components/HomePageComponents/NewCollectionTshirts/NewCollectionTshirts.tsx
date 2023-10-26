import Button from '@components/ui/Button/Button';
import styles from './NewCollectionTshirts.module.scss'

const NewCollectionTshirts = () => {
    return (
        <section className={styles.newCollectionTshirts}>
            <div className={styles.newCollectionTshirts__backgroundImage}>
                <div className={styles.blackWrapper}>

                </div>
            </div>
            <div className={styles.newCollectionTshirts__wrapper}>
                <p className={styles.title}>NEW COLLECTION</p>
                <h1 className={styles.firstTagline}>Be different in your own way!</h1>
                <h2 className={styles.secondTagline}>Find your unique style.</h2>
                <Button children='Shop Collection' size='default'/>
            </div>
        </section>
    )
}

export default NewCollectionTshirts;