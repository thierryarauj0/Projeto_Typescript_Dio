import { Box, Container, Stack, Icon, Link, Text } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={5}>
      <Container maxW="container.xl">
        <Stack direction={['column', 'row']} spacing="6" justify="space-between" align="center">
          <Text>© {new Date().getFullYear()} Minha Empresa. Todos os direitos reservados.</Text>
          <Stack direction="row" spacing="6">
            <Link href="https://www.facebook.com" isExternal>
              <Icon as={FaFacebook} w={6} h={6} />
            </Link>
            <Link href="https://www.twitter.com" isExternal>
              <Icon as={FaTwitter} w={6} h={6} />
            </Link>
            <Link href="https://www.linkedin.com" isExternal>
              <Icon as={FaLinkedin} w={6} h={6} />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
