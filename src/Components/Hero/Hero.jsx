import { BannerLinks, ButtonBanner, HeroStyles, HeroText, ImgBanner } from "./HeroStyles"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";



export const Hero = () => {
  return (
    <>
    
       <HeroStyles>
           <HeroText>
                <h2>Vivi una experiencia multimedia como Nucba antes</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quos ducimus modi quo ex eveniet harum ad ut sapiente consequuntur!</p>
                <ButtonBanner whileTap={{ scale: 0.95}}>
                  Ver mas productos
                  <GoArrowRight/>
                </ButtonBanner>
            </HeroText> 
            
            <ImgBanner src="../../../public/Headphone.png" alt="" />
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

