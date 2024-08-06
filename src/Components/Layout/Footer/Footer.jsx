import { FooterContainer, FooterItems, FooterLinks } from "./FooterStyles"


export const Footer = () => {
  return (
    <>
        <FooterContainer>
            <FooterItems>
               
                    <FooterLinks href="">Condiciones de uso</FooterLinks>
              
                    <FooterLinks href="">Terminos</FooterLinks>
             
                    <FooterLinks to="/contact">Contacto</FooterLinks>
                
            </FooterItems>
            <p> Todos los derechos reservados</p>
        </FooterContainer>
    </>
  )
}

