import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #BF4F74;
    color: white;
    padding: 20px;
`

export const FooterItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    list-style: none;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const FooterLinks = styled.a`
    text-decoration: none;
    color: white;
`