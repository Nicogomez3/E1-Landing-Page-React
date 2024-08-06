import { useNavigate } from "react-router-dom"
import { ImgBanner, AboutStyles, SectionContact, ContactLinks, TextInfo, CardsValues, CardValue, CardsValuesContainer, ButtonAbout,  } from "./AboutStyles"

export const About = () => {
  const navigate = useNavigate();

  return (
    <>
    {/* 45:12 */}
    <AboutStyles>
      <h2>Nosotros</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
     
      <ImgBanner src="/contactBanner.jpg" alt="" />
      <SectionContact>
        <ContactLinks>
          <h2>Comparti tus dudas o comentarios con nosotros</h2>
          <ButtonAbout whileTap={{scale: 0.95}} onClick={() => navigate('/contact')}> Contactanos </ButtonAbout>
        </ContactLinks>
        <TextInfo>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique deleniti ea tempore quisquam
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo nihil sequi, consequatur laborum quaerat vitae similique non tempore eaque!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique soluta voluptas, atque in rem alias vitae ducimus? Laborum iste eum, quia, repellat omnis maiores debitis eligendi libero placeat corporis perferendis!</p>
        </TextInfo>
      </SectionContact>
      <CardsValuesContainer>
          <h2>Nuestros principales valores</h2>
          <CardsValues>
          
          <CardValue>
            <h2>Colaboracion</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officiis labore dignissimos nam iure dolorem?</p>
          </CardValue>
          <CardValue>
            <h2>Transparencia</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officiis labore dignissimos nam iure dolorem?</p>
          </CardValue>
          <CardValue>
            <h2>Calidad</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officiis labore dignissimos nam iure dolorem?</p>
          </CardValue>
          <CardValue>
            <h2>Integridad</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officiis labore dignissimos nam iure dolorem?</p>
          </CardValue>
        </CardsValues>  
      </CardsValuesContainer>
    
    </AboutStyles>    
    </>
  )
}

