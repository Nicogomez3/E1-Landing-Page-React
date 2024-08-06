import { motion } from "framer-motion";
import styled from "styled-components";

export const ContactStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 100vh;
`

export const FormStyles = styled.form`
    background: url('/marissa-grootes-vdaJJbls3xE-unsplash.jpg') center/cover no-repeat;
    width: 100%;

    border-radius: 10px;
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    & h2 {
        font-size: 52px;
    }

    & input,
    & textarea{
        width: 300px;
        height: 40px;
        border: none;
        border-radius: 10px;
        border: 1px solid #ff497c;
        padding: 10px;  
    }

    @media (max-width: 1600px) {

        height: 100%;
    }

    @media (max-width: 768px) {


        & h2 {
            font-size: 32px;
        }
        
        & input,
        & textarea{
            width: 250px;
        }
    }

`
export const ButtonContact = styled(motion.button)`
   background-color: #BF4F74;
   border-radius: 5px;
   color: white;
   padding: 15px 30px;
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

`