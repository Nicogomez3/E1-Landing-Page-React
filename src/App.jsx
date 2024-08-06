

import { GlobalStyles } from "./GlobalStyles/GlobalStyles"
import Routes from "./routes/Routes"


function App() {


  return (
    <>
      {/* -------Fuente Rubik------------ */}
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap");
      </style>
      {/* ---------------------------------- */}
      <Routes/>
      <GlobalStyles/>
    </>
  )
}

export default App
