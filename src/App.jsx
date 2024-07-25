import { Footer } from "./Components/Footer/Footer"
import { Header } from "./Components/Header/Header"
import { Hero } from "./Components/Hero/Hero"
import { Producto } from "./Components/Products/Producto"
import { MenuProvider } from "./Context/MenuContext"

import { GlobalStyles } from "./GlobalStyles/GlobalStyles"


function App() {


  return (
    <>
      {/* -------Fuente Rubik------------ */}
      <style>
      @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap");
      </style>
      {/* ---------------------------------- */}
      <MenuProvider>
        <div className="app">
          <Header/>
        </div>
      </MenuProvider>
      <Hero/>
      <Producto/>
      <Footer/>
      <GlobalStyles/>
    </>
  )
}

export default App
