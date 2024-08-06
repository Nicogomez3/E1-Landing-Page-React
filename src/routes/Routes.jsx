import { BrowserRouter, Routes as ReactDomRoutes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import { Layout } from '../Components/Layout/Layout'
import { About } from '../pages/About/About'
import { Contact } from '../pages/Contact/Contact'
import { Producto } from '../pages/Products/Producto'

function Routes() {
  return (
    <BrowserRouter>
        <Layout>
            <ReactDomRoutes>
                <Route path="/" element={<Home />} />

                {/* ABOUT */}
                <Route path="about" element={<About/>} />

                {/* CONTACT */}
                <Route path="contact" element={<Contact/>} />

                {/* PRODUCTS */}
                <Route path="product" element={<Producto/>} />

                {/* 404 NOT FOUND */}
                <Route path="*" element={<h1>404 NOT FOUND</h1>} />

            </ReactDomRoutes>
        </Layout>    
    </BrowserRouter>
  )
}

export default Routes
