import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar"; 
import styles from './MainLayout.module.css'

export function MainLayout({ children }: { children: ReactNode}) {
    return (
        <div className={styles.mainLayout}>
            <div className={styles.sidebar}>
                <Sidebar name="Pet Control" />
            </div>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}