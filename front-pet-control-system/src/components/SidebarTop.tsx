import styles from './SidebarTop.module.css';
import logo from '/src/images/pata.png';

export function SidebarTop({ name }: { name: string }) {
    return (
        <div className={styles.sidebartop}>
            <img src={logo} alt="Pata" className={styles.paw} />
            <p>{name}</p>
        </div>
    );
}