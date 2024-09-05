import { motion } from "framer-motion";
import { NavLink } from "react-router-dom"
import {styled } from "styled-components"



export const HeaderStyles = styled.header`
  background-color: #BF4F74;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 70px;
  max-width: 100%;

`

export const LogoStyles = styled.h1`
    font-size: 18px;
    font-weight: bold;
    color: white;
`

export const CartIconContainer = styled(motion.div)`
`


 export const NavbarStyles = styled.nav`
  display: flex;  
  align-items: center;
 `;

// export const NavbarItemsStyles = styled.ul`
//     display: flex;
//     gap: 20px;
//     align-items: center;



    
//     @media (max-width: 992px) {
//         display: none;
//     }
// `

export const NavbarItemsStyles = styled.ul`
  display: flex;
 
  list-style: none;
  padding: 10px;
  margin: 0;


  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    flex-direction: column;
    background-color: #BF4F74;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    top: 70px;
    width: 100%;
    left: 0;
    z-index: 10;
  }
`;

// export const NavbarListStyles = styled.li`
//   margin: 1rem 0;
//   @media (min-width: 768px) {
//     margin: 0 1rem;
//   }
// `;

// export const CartStyles = styled.div`
//   position: relative;
//   cursor: pointer;
//   color: white;
//   font-size: 24px;
//   span {
//     position: absolute;
//     top: -10px;
    
//     left: 55px;
//     height: 15px;
//     width: 15px;
//     text-align: center;

//     border-radius: 1rem;
//     border: 1px solid white;
//     color: #BF4F74;
//     background-color: white;
//     font-size: 0.9rem;
//   }
// `

export const CartStyles = styled.div`
   position: relative;
   cursor: pointer;
   color: white;
   font-size: 24px;
   & span {
     position: absolute;
     top: -5px;
    
     left: 13px;
     height: 15px;
     width: 15px;
     text-align: center;

     border-radius: 1rem;
     border: 1px solid white;
     color: #BF4F74;
     background-color: white;
     font-size: 0.9rem;
    }
  margin-top: 0;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;

  }
`;

export const MenuButton = styled(motion.div)`
  display: block;
  cursor: pointer;
  color: white;
  font-size: 24px;
  position: relative;
  @media (min-width: 768px) {
    display: none;
  }
`;

 export const NavbarListStyles = styled.li`
     list-style: none;
     position: relative;
     padding: 10px;
     & a:hover{
     transform:scale(2);
     opacity:1;
     filter:blur(0);
     text-decoration:none;
     color:#fff;
     padding: 5px;
  
 }

    & a:before{
     content:'';
     position:absolute;
     top:0;
     left:0;
     width:100%;
     height:100%;
     background:#ff497c;
     transition:0.5s;
     transform-origin:right;
     transform:scaleX(0);
     z-index:-1;
   
     }
  
    & a:hover:before{
         transition:transform 0.5s;
         transform-origin:left;
         transform:scaleX(1);
         border-radius: 5px;
 }
 `

// export const NavbarLinksStyles = styled(NavLink)`
//     text-decoration: none;
//     list-style: none;
//     color: white;
//     padding: 5px;
    
// `

export const NavbarLinksStyles = styled(NavLink)`
  text-decoration: none;
  color: white;
  &:hover {
    font-weight: bold;  
  }
`;


export const MenuResponsive = styled.div`
    display: none;
    font-size: 24px;
    color: white;
    @media (max-width: 992px) {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
       
    }
`

export const NavbarResponsive = styled.nav`
    position: absolute;
    top: 70px;
    right: 0;
    background-color: #BF4F74;
    padding: 20px;
    border-radius: 14px;
    height: 400px;
    z-index: 10;
    width: 100%;
   
`

export const NavbarItemsResponsive = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    height: 300px;

`
export const NavbarListResponsive = styled.li`
   list-style-type: none;
`

export const NavbarLinksResponsive = styled(NavLink)`
    text-decoration: none;
    color: white;

    &:hover {
        font-weight: bold
    }
`

