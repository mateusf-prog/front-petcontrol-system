import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';

import './global.css'

export default function App() {
  return (
    <div>
      <div className={styles.wrapper}>
        <Sidebar name="Cao Limpinho"/>
        <main>
        </main>
      </div>
    </div>
  )
}
