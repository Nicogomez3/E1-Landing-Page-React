
import { MenuProvider } from "../../Context/MenuContext"
import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"
import styled from "styled-components";

// const LayoutContainer = styled.div`
//     min-height: 100vh;
//     height: auto;
//     width: 100%;

 

//     & p {
//         text-align: center;
//     }

// `;

// const ContentContainer = styled.div`
//     height: calc(100vh - 120px);
// `;





export const Layout = ( {children} ) => {
  return (
    <>
    <div>
        <MenuProvider>
            <div className="app">
            <Header/>
            </div>
        </MenuProvider>
        <div>
            {children}
        </div>
        <Footer/>
    </div>



    </>
  )
}

