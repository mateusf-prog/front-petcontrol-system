import styles from './SidebarTop.module.css';
import paw from '/src/images/pata.png';

export function SidebarTop({ name }: { name: string }) {
    return (
        <div className={styles.sidebartop}>
            <img src={paw} alt="Pata" className={styles.paw} />
            <p>{name}</p>
        </div>
    );
}