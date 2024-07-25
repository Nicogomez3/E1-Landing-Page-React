
import { useContext } from "react";
import { HeaderStyles, LogoStyles, MenuResponsive, NavbarItemsResponsive, NavbarItemsStyles, NavbarLinksResponsive, NavbarLinksStyles, NavbarListResponsive, NavbarListStyles, NavbarResponsive, NavbarStyles } from "./HeaderStyles"
import { FiMenu } from "react-icons/fi";
import { MenuContext } from "../../Context/MenuContext";




export const Header = () => {
  const { isOpen, toggleMenu } = useContext(MenuContext);
  return (
    <>
        <HeaderStyles>
            <LogoStyles>
              <hr />
              LUXURY
              <hr />
            </LogoStyles>
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
                  <FiMenu onClick={toggleMenu} {...isOpen ? 'Cerrar' : 'Abrir'} Menú/>
                  {isOpen && (
                    <NavbarResponsive>
                      <NavbarItemsResponsive>
                        <NavbarListResponsive>
                          <NavbarLinksResponsive href="#home">Inicio</NavbarLinksResponsive>
                        </NavbarListResponsive>
                        <NavbarListResponsive>
                          <NavbarLinksResponsive href="#about">Sobre Nosotros</NavbarLinksResponsive>
                        </NavbarListResponsive>
                        <NavbarListResponsive>
                          <NavbarLinksResponsive href="#services">Productos</NavbarLinksResponsive>
                        </NavbarListResponsive>
                        <NavbarListResponsive>
                          <NavbarLinksResponsive href="#contact">Contacto</NavbarLinksResponsive>
                        </NavbarListResponsive>
                      </NavbarItemsResponsive>
                    </NavbarResponsive>
                  )}
                </MenuResponsive>
        </HeaderStyles>
    </>
  )
}

