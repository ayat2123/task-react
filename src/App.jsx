

import { Footer } from "./component.jsx/Footer";
import { Header } from "./component.jsx/Header";
import { Msection } from "./component.jsx/Msection";
import { Navbar } from "./component.jsx/Navbar";
import { Titlebar } from "./component.jsx/Titlebar";
import styles from"../src/component.jsx/Container.module.css";


 function App(){
  return(
    <div className={styles.container}>
      <Titlebar/>
      <Navbar/>
      <Header/>
      <Msection/>
      <Footer/>
    </div>
  )
}
export default App;