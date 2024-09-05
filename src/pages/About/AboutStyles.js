import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 90px;
    & h2 {
        font-size: 52px;
        margin: 0;
    }

    & p {
        font-size: 18px;
        text-align: center;     
    }    

    @media(max-width: 500px) {
        & h2 {
            font-size: 32px;

        }

        & p {
            /* width: 80%; */

        }
    }
`

export const ImgBanner = styled.img`
    width: 1600px;
    height: 700px;
    
    display: block;
    border-top-left-radius: 20px; /* Ajusta el radio según sea necesario */
    border-bottom-right-radius: 20px; /* Ajusta el radio según sea necesario */
    /* clip-path: polygon(30% 0%, 84% 0, 100% 32%, 100% 70%, 100% 100%, 9% 100%, 0 83%, 0 0); */
    clip-path: polygon(30% 0%, 88% 0, 100% 28%, 100% 70%, 100% 100%, 7% 100%, 0 83%, 0 0);

    @media (max-width: 1550px) {
        width: 500px;
        height: 300px;
    }

    @media (max-width: 500px) {
        width: 300px;
        height: 200px;
    }

    @media (max-width: 320px) {
        display: none;
    }
    `




export const SectionContact = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 20px;
    padding: 60px;
    /* margin-left: 60px;
    margin-right: 60px; */

    @media (max-width: 992px) {
        flex-direction: column;
        
    }

    @media (max-width: 500px) {
        padding: 20px;
    }
`

export const ContactLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    /* width: 50%; */



    & h2 {
        font-size: 42px;
        width: 80%;
    }

    @media (max-width: 778px) {
        width: 100%;

        & h2 {
            font-size: 32px;
            width: 80%;
        }

    }

    @media (max-width: 320px) {
        align-items: center;

        & h2 {
            text-align: center;
            width: 100%;
        }


    }

`

export const TextInfo = styled.div`
    width: 50%;
   
   & p { 
        text-align: left;

   } 

    @media (max-width: 992px) {
         width: 100%;

    }

    @media (max-width: 480px) {
        & p {
            width: 100%;
        }
    }

`

export const ButtonAbout = styled(motion.button)`
   background-color: #BF4F74;
   border-radius: 5px;
   color: white;
   padding: 20px 40px;
   
   text-align: center;
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
    padding: 20px 30px;
    font-size: 12px;
   }
`

export const CardsValuesContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 992px) {
        h2 {
            font-size: 32px;
            text-align: center;
        }    
    }   
`


export const CardsValues = styled.div`
    display: flex;
    justify-content: center;

    gap: 40px;
    padding: 30px 0;
    /* margin-left: 60px;
    margin-right: 60px; */
    flex-wrap: wrap;
    max-width: 1300px;
    width: 100%;
`
export const CardValue = styled.div`
    clip-path: polygon(30% 0%, 88% 0, 100% 28%, 100% 70%, 100% 100%, 7% 100%, 0 83%, 0 0);
    background-color: #131415;
    border-radius: 12px;
    padding: 30px 0;
    color: white;
    width: 600px;
    height: 100px;
    & h2 { 
        font-size: 24px;
        margin: 0;
        text-align: center;
    }

   & p {
    padding: 0 5px;
    font-size: 14px;
   } 

   @media (max-width: 992px) {
        width: 480px;
   }

    @media (max-width: 500px) {
          width: 300px;
    }
`