import { motion } from "framer-motion";
import styled from "styled-components";

export const SectionCard = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 & h2 {
    font-size: 52px;
    margin-top: 90px;
    text-align: center;

    @media (max-width: 578px) {
        font-size: 32px;
    }
 }

`

export const CardContainer = styled.div`
    max-width: 1300px;
    display: flex;
    padding: 30px 0;
    gap: 40px;
    flex-wrap: wrap;
    /* margin: 50px 0; */
    width: 100%;
    justify-content: center;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #131415;
    border-radius: 12px;
    padding: 30px;
    width: 300px;
    height: 400px;
    text-align: center;
    & p {
        color: white;
    }

    @media (max-width: 400px) {
        width: 250px;
        height: 400px;
    }

    @media (max-width: 310px) {
        width: 200px;
    }
    `

    export const ImageCard = styled.img`
        width: 120px;
    `
    export const InfoCard = styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
        color: white;

        & h2 {
            font-size: 18px;
        }

        & span {
            background-color: steelblue;
            border-radius: 16px;
            padding: 7px;
            text-align: center;
        }
`

export const SpanPrice = styled.span`
        background-color: steelblue;
        border-radius: 16px;
        padding: 7px;
        text-align: center;
        color: white;
`

export const ButtonSection = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
`
export const ButtonContainer = styled.div`
    display: flex;
    gap: 30px;

    @media (max-width: 400px) {
        flex-direction: column;
        gap: 5px;
    }
`

export const ButtonCard = styled(motion.button)`
 background: ${props => props.$primary ? "#BF4F74" : "transparent"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.40em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  cursor: pointer;

  @media (max-width: 400px) {

    margin: 0;
  }
`;

export const ButtonContainerProduct = styled.div`
    display: flex;
    gap: 20px;
    padding: 10px;

    @media (max-width: 578px) {
        flex-direction: column;
        /* align-items: flex-start; */
        gap: 10px;}
`

export const ButtonProduct = styled(motion.button)`
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
    padding: 20px 20px;
    font-size: 12px;
   }
`

