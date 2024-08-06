import { BannerLinks, ButtonBanner, ButtonContainer, HeroStyles, HeroText, ImgBanner } from "./HeroStyles"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";



export const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
    
       <HeroStyles>
           <HeroText>
                <h2>Vivi una experiencia multimedia como Nucba antes</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quos ducimus modi quo ex eveniet harum ad ut sapiente consequuntur!</p>
                <ButtonContainer>
                  <ButtonBanner whileTap={{ scale: 0.95}} onClick={() => navigate('/product')}>
                    Ver mas productos
                    <GoArrowRight/>
                  </ButtonBanner>
                  <ButtonBanner whileTap={{ scale: 0.95}} onClick={() => navigate('/about')}>
                    Sobre Nosotros
                    <GoArrowRight/>
                  </ButtonBanner>
                </ButtonContainer>

            </HeroText> 
            
            <ImgBanner src="/Headphone.png" alt="" />
            <BannerLinks>
              <hr />
              <a href="">
                <FaFacebookF/>
              </a>
              <a href="">
                <FaInstagram/>
              </a>
              <a href="">
                <FaXTwitter/>
              </a>
              <a href="">
                <FaYoutube/>
              </a>
              <hr />
            </BannerLinks>
        </HeroStyles> 
      
    </>
  )
}

