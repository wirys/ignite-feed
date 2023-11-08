import style from './Sidebar.module.css'
export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <img className={style.cover} src='https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=10'/>
            <div className={style.profile}>
                <strong>Wirys da cunha Francisco</strong>
                <span>Web Developer</span>
            </div>
            <footer>
            <a href='#'>Editar seu Perfil</a>
            </footer>
           
        </aside>
    )

}