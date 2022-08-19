import { useRouter } from 'next/router';
import React, { useState} from 'react';
import { useAuth } from '../context/AuthProvider/useAuth';
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'

const Register = () => {
    const {signup} = useAuth();
    const router = useRouter();
    
    const [sucess, setSucess] = useState(false)
    const [show, setShow] = useState(false)
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState<string>('');
    const [emailConf, setEmailConf] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [er, setEr] = useState<string>('');

    const handleClick = () => setShow(!show)
    const handleSignUp = () => {
        if(!name || !email || !emailConf || !password){
            setEr('Preencha todos os campos');
            return ;
        } else if(email !== emailConf) {
            setEr('Os e-mails são diferentes.');
            return ;
        }
        const req = signup(email, password, name);
        if(req){
            setEr(req);
        } else {
            setSucess(true);
            setName('');
            setEmail('');
            setEmailConf('');
            setPassword("");

            router.push('/');
        }
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column', width: '30%', margin: 'auto'}}>
            <FormControl>
                <FormLabel>Primeiro Nome</FormLabel>
                <Input type='text' size='md' value={name} onChange={ e => [setName(e.target.value), setEr('')]} />
            </FormControl>
            <FormControl>
                <FormLabel>Sobrenome</FormLabel>
                <Input type='text' size='md' value={lastName} onChange={ e => [setLastName(e.target.value), setEr('')]} />
            </FormControl>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type='email' size='md' value={email} onChange={ e => [setEmail(e.target.value), setEr('')]} />
            </FormControl>
            <FormControl>
                <FormLabel>Confirme o email</FormLabel>
                <Input type='email' size='md' value={emailConf} onChange={ e => [setEmailConf(e.target.value), setEr('')]} />
            </FormControl>
            <InputGroup size='lg'>
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Insira sua Senha'
                    value={password} 
                    onChange={ e => [setPassword(e.target.value), setEr('')]}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}> {show ? 'Ocultar' : 'Exibir'} </Button>
                </InputRightElement>
            </InputGroup>
            
            <div>{er}</div>
            <Button size='lg' colorScheme='teal' variant='solid' onClick={handleSignUp}>
                Register
            </Button>
            {sucess &&
                <Alert status='success'>
                <AlertIcon />
                    Cadastrado com Sucesso!!
                </Alert>
            }
        </div>
    )
}
export default Register;