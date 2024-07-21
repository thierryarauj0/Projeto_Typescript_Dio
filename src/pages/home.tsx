import React, { useState, useContext, useEffect } from 'react';
import { Box, Center, Input } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { Card } from '../components/FormLogin/Card';
import { login } from '../services/login';
import { AppContext } from '../components/AppContext';
import CustomButton from '../components/FormLogin/CustomButton';
import { changeLocalStorage } from '../services/storage';

const Home = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(AppContext);

    useEffect(() => {
      const user = localStorage.getItem('user');
      if (user && JSON.parse(user).isLoggedIn) {
          setIsLoggedIn(true);
          navigate('/conta/1');
      }
  }, [setIsLoggedIn, navigate]);

    const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password);
        if (!loggedIn) {
            alert('Email ou senha inválidos');
        } else {
            setIsLoggedIn(true);
            changeLocalStorage({ login: true });
            navigate('/conta/1');
        }
    };

    return (
        <>
            <Card>
                <Box
                    backgroundColor="white"
                    boxShadow="dark-lg"
                    borderRadius="25px"
                    p="15"
                    width="full"
                    maxW="md"
                >
                    <Center>
                        <h1>Faça o Login</h1>
                    </Center>

                    <Input
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        mb="4"
                    />
                    <Input
                        placeholder="Senha"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        mb="4"
                    />
                    <Center>
                        <CustomButton
                            onClick={() => validateUser(email, password)}
                            colorScheme="green"
                            width="100%"
                        >
                            Entrar
                        </CustomButton>
                    </Center>
                </Box>
            </Card>
            <Footer />
        </>
    );
};

export default Home;
