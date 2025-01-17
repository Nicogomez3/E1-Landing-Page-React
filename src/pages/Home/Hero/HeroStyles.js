import styled from "styled-components";
import { motion } from "framer-motion"

export const HeroStyles = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin-top: 60px;
    height: auto;
    padding: 50px;
    background-color: #131415;
    color: white;
`

export const HeroText = styled.div`
    max-width: 800px;

    & h2 {
        font-size: 52px;
        font-weight: 700;
        line-height: 1.15;
    }

    & p {
        font-size: 22px;
    }

    @media (max-width: 578px) {
        h2 {
            font-size: 30px;
        }

        p {
            font-size: 14px;
        }

    
    @media (max-width: 400px) {
        h2 {
            font-size: 28px;

        }

        p {
            font-size: 12px;
        }
    }    
    }
`

export const ImgBanner = styled.img`
    max-width: 22rem;
    object-fit: cover;

    @media (max-width: 992px) {
        display: none;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    padding: 10px;

    @media (max-width: 578px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        padding: 0px;
        }
`

export const ButtonBanner = styled(motion.button)`
   background-color: #BF4F74;
   border-radius: 5px;
   color: white;
   padding: 20px 10px;
   border: none;
   font-size: 16px;
   display: flex;
   align-items: center;
   border: 1px solid #BF4F74;
   gap: 5px;
   cursor: pointer;

   &:hover {
    background-color: transparent;
    color: #BF4F74;
    border: 1px solid #BF4F74;
    border-radius: 5px;
   } 

   @media (max-width: 578px) {
    padding: 10px 5px;
    font-size: 12px;
   }
`

export const BannerLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: relative;

    & hr {
        border: 1px solid white;
        height: 70px;
    }

    & a {
        color: white;
    }
    @media (max-width: 305px) {
        display: none;
    }
      

`

