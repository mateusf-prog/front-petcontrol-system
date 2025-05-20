import styles from './Button.module.css'

export function Button( { content }: { content: string} ) {
    return (
        <button className={styles.button} content={content} />
    );
}