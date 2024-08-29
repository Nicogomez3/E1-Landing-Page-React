import { motion } from "framer-motion";
import styled from "styled-components";

export const CategoriesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 8px;
`

export const CategoriesCards = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;

    width: 200px;
    padding: 8px 2px;

    background-color: #BF4F74;
    border-radius: 12px;
    cursor: pointer;

    & h2 {
        font-size: 14px;
        color: white;
    }

    & img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
`