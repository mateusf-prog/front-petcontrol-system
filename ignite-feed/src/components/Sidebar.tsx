import styles from './Sidebar.module.css';
import { SidebarTop } from './SidebarTop';
import { useState } from 'react';

export function Sidebar(props: { name: string }) {
    const [isLogged, setIsLogged] = useState(false);

    const menuItems = isLogged
        ? [
            { label: 'Perfil', onClick: () => {/* navega para dashboard */} },
            { label: 'Agenda', onClick: () => {/* navega para pets */} },
            { label: 'Produtos', onClick: () => { /* navega para produtos*/ } },
            { label: 'Serviços', onClick: () => { /* navega para produtos*/ } },
            { label: 'Vendas', onClick: () => { /* navega para vendas */}},
            { label: 'Histórico', onClick: () => { /* navega para historico */}},
            { label: 'Clientes', onClick: () => { /* navega para clientes */}},
            { label: 'Sair', onClick: () => setIsLogged(false)}
        ]
        : [
            { label: 'Login', onClick: () => setIsLogged(true) },
            { label: 'Cadastrar', onClick: () => {/* navega para cadastro */} }
        ];

    return (
        <aside className={styles.sidebar}>
            <SidebarTop name={props.name} />
            <ul>
                {menuItems.map((item, idx) => (
                    <li key={idx}>
                        <button onClick={item.onClick} className={styles.menuButton}>
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}