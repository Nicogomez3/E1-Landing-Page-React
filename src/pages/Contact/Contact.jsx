
import { ButtonContact, ContactStyles, FormStyles } from "./ContactStyles"

export const Contact = () => {
  return (
    <>

    <ContactStyles>
     
        <FormStyles>
           <h2>Contacto</h2>
            <input type="text" placeholder="Nombre" name="" id="" />
            <input type="text" placeholder="Apellido" name="" id="" />
            <input type="email" placeholder="Correo" name="" id="" />
            <textarea name="" id=""  placeholder="Asunto"></textarea>
            <ButtonContact whileTap={{ scale: 0.95}}>Enviar</ButtonContact>
        </FormStyles>
    </ContactStyles>
    </>
  )
}

