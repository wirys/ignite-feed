import { Post } from "./Post"
import { Header } from "./components/Header";
import './global.css';
import style from './App.module.css';
import { Sidebar } from "./components/SideBar";
function App() {

  return (
    <>
      <Header />
      <div className={style.wrapper}>
      <Sidebar/>
        <main>   <Post author='Wirys' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus neque minus autem nostrum? Deleniti magni officiis dolor atque odit expedita nobis repellendus accusantium repudiandae, eaque eligendi earum officia consectetur?
'/></main>
      </div>

      <h1>Olá Mundo</h1>
   
    </>
  )
}
export default App
