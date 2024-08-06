
import { useContext, useEffect, useRef } from "react";
import { HeaderStyles, LogoStyles, MenuResponsive, NavbarItemsResponsive, NavbarItemsStyles, NavbarLinksResponsive, NavbarLinksStyles, NavbarListResponsive, NavbarListStyles, NavbarResponsive, NavbarStyles } from "./HeaderStyles"
import { FiMenu } from "react-icons/fi";
import { MenuContext } from "../../../Context/MenuContext";




export const Header = () => {
  const { isOpen, toggleMenu } = useContext(MenuContext);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    console.log('Clicked outside');
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      console.log('Closing menu');
      toggleMenu(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);


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
                      
                      <NavbarLinksStyles to="/">Inicio</NavbarLinksStyles>
                      
                      </NavbarListStyles>
                    <NavbarListStyles>
                      
                      <NavbarLinksStyles to="/contact">Contacto</NavbarLinksStyles>
                      
                    </NavbarListStyles>
                    <NavbarListStyles>
                      
                      <NavbarLinksStyles to="/about">Nosotros</NavbarLinksStyles>
                      
                      </NavbarListStyles>
                    <NavbarListStyles>
                      
                      <NavbarLinksStyles to="/product">Productos</NavbarLinksStyles>
                      
                      </NavbarListStyles>
                </NavbarItemsStyles>
            </NavbarStyles>
                <MenuResponsive ref={menuRef}>
                <div onClick={() => toggleMenu(!isOpen)}>
                  <FiMenu />
                </div>
                  {isOpen && (
                    <NavbarResponsive>
                      <NavbarItemsResponsive>
                        <NavbarListResponsive>
                          <NavbarLinksResponsive to="/">Inicio</NavbarLinksResponsive>
                        </NavbarListResponsive>
                        <NavbarListResponsive>
                          <NavbarLinksResponsive to="/about">Nosotros</NavbarLinksResponsive>
                        </NavbarListResponsive>
                        <NavbarListResponsive>
                          <NavbarLinksResponsive to="/product">Productos</NavbarLinksResponsive>
                        </NavbarListResponsive>
                        <NavbarListResponsive>
                          <NavbarLinksResponsive to="/contact">Contacto</NavbarLinksResponsive>
                        </NavbarListResponsive>
                      </NavbarItemsResponsive>
                    </NavbarResponsive>
                  )}
                </MenuResponsive>
        </HeaderStyles>
    </>
  )
}

