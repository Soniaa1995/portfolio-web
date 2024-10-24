import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
    message: string,
    senderEmail: string
}

export default function ContactFormEmail({message, senderEmail}: ContactFormEmailProps) {
  return <Html>
        <Head />
        <Preview>Nuevo mensaje de tu Portfolio</Preview>
        <Tailwind>
            <Body>
                <Container>
                    <Heading>Has recibido el siguiente mensaje</Heading>
                    <Text>{message}</Text>
                    <Hr />
                    <Text>El correo del remitente es: {senderEmail}</Text>
                </Container>
            </Body>
        </Tailwind>
  </Html>
}
