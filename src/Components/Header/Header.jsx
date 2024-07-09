
import { HeaderStyles, LogoStyles, MenuResponsive, NavbarItemsStyles, NavbarLinksStyles, NavbarListStyles, NavbarStyles } from "./HeaderStyles"
import { FiMenu } from "react-icons/fi";


export const Header = () => {
  return (
    <>
        <HeaderStyles>
            <LogoStyles>LUXURY</LogoStyles>
            <NavbarStyles>
                <NavbarItemsStyles>
                    <NavbarListStyles>
                      
                      <NavbarLinksStyles href="">Inicio</NavbarLinksStyles>
                      
                      </NavbarListStyles>
                    <NavbarListStyles>
                      
                      <NavbarLinksStyles href="">Contacto</NavbarLinksStyles>
                      
                    </NavbarListStyles>
                    <NavbarListStyles>
                      
                      <NavbarLinksStyles href="">Nosotros</NavbarLinksStyles>
                      
                      </NavbarListStyles>
                </NavbarItemsStyles>
            </NavbarStyles>
                <MenuResponsive>
                  <FiMenu/>
                </MenuResponsive>
        </HeaderStyles>
    </>
  )
}

