import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useAuth } from '../context/AuthProvider/useAuth';
import * as C from '../styles/StyledLogin';
import { Input } from '../components/button';
import Link from 'next/link';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const Login = () => {
    const router = useRouter();
    const { signin} = useAuth();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [er, setEr] = useState<string>('');
    const [register, setRegister]= useState("")
    const handleSignIn = () => {
        if(!email || !password){
            setEr('Preencha todos os campos');
            return ;
        }
        const req = signin(email, password);
        if(req){
            setEr(req)
            return ;
        } else {
            router.push("/")
        }
        
    }

    return(
        <>
        <Header />
        <C.Container>
            <C.LeftSide>
                <C.AreaInfo>
                    <C.Title>Entre na sua conta</C.Title>
                    <C.InputArea>
                        <Input 
                            placeholder='Digite seu email'
                            width={100}
                            type="email" 
                            name="email" 
                            value={email} 
                            onChange={ e => [setEmail(e.target.value), setEr('')]}
                        />
                        <Input 
                            placeholder='Digite sua senha'
                            width={100}
                            type="password" 
                            name="password" 
                            value={password} 
                            onChange={ e => [setPassword(e.target.value), setEr('')]}
                        />
                        <C.LabelError>{er}</C.LabelError>
                    </C.InputArea>
                    <C.Button type='button' onClick={handleSignIn}>Entrar</C.Button>
                    <C.LabelSignUp>
                        <C.Strong>
                            <Link href='/register'>
                                Esqueci minha senha
                            </Link>
                        </C.Strong>
                </C.LabelSignUp>
                </C.AreaInfo>
            </C.LeftSide>
            <C.RightSide>
                <C.AreaInfo>
                    <C.Title>Criar Conta</C.Title>
                    <Input 
                        placeholder='Digite seu email'
                        width={100}
                        type="email" 
                        name="email" 
                        value={register} 
                        onChange={ e => [setRegister(e.target.value), setEr('')]}
                    />
                    <Link href='/register'>
                        <C.Button>
                            Continuar
                        </C.Button>
                    </Link>
                </C.AreaInfo>
            </C.RightSide>
        </C.Container>
        <Footer />
        </>
        
    )
}
export default Login;
/*
        <div style={{display: 'flex', flexDirection: 'column', width: '30%', margin: 'auto'}}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={email} onChange={ e => [setEmail(e.target.value), setEr('')]} />

            <label htmlFor="pass">Senha:</label>
            <input type="password" name="pass" id="pass" value={password} onChange={ e => [setPassword(e.target.value), setEr('')]} />

            <div>{er}</div>

            <button style={{marginTop: 20}} onClick={handleSignIn} type='button'>Login</button>
        </div>
*/