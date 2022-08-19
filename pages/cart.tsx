import React, { useEffect, useState } from 'react';

import {Footer} from '../components/footer';
import {CartItem} from '../components/cartItem';
import * as C from '../styles/CartStyled';
import * as H from '../components/header/styled';
import logo from '../public/images/sac.jpg';
import {ImCart} from 'react-icons/im';

import { useAuth } from '../context/AuthProvider/useAuth';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineUser } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { Button, Input } from '@chakra-ui/react';

import { Item } from '../context/AuthProvider/types';



type User = {
    email: string;
    name: string;
    password: string;
    cart: Item[]; 
}

const Cart = () => {
    const {cart, name, logOut} = useAuth();
    const router = useRouter();
    const [subTotal, setSubTotal] = useState(0);
    let somaTotal = 0;
    let frete = 10;
    

    useEffect(() => {
        if(somaTotal === 0){
            let somaFinal = cart?.map((item:Item) => ( Number(item.priceJ) * Number(item.qtJ) ))
            somaFinal?.forEach((value:number) => somaTotal += value )  
            setSubTotal(somaTotal);
        } else {
            console.log('nao deu')
        }   
    }, [cart, subTotal])

    const handleLogOut = () => {
        logOut();
        router.push('/');
        return ;
    }


    return(
        <>
            <C.Header>
                <H.AreaLogo style={{margin: '0'}}>
                    <Link href={'/'}>
                        <Image style={{cursor: 'pointer'}} src={logo} width={47} height={47}/>
                    </Link>
                </H.AreaLogo>
                
                <H.Icon style={{cursor: 'pointer', margin: '0 5%'}}>
                        {name ?
                            <>
                            <H.AreaUser>
                                <AiOutlineUser size={30} color='#000' />
                                {name ? <p>Olá,{name}</p> : <p>Login</p>}
                            </H.AreaUser>
                            <H.AreaInfo>
                                <Link href='/config'>Ir para configurações</Link>
                                <Link href='/pedidos'>Ver meus pedidos</Link>
                                <p onClick={handleLogOut}>Sair</p>
                            </H.AreaInfo>
                            </>
                                : 
                            <Link href='/login'>
                            <H.AreaUser>
                                <AiOutlineUser size={30} color='#000' />
                                {name ? <p>Olá,{name}</p> : <p>Login</p>}
                            </H.AreaUser>
                            </Link>
                            }
                    </H.Icon>
            </C.Header>
            <C.Container>
            <C.Title>
                <ImCart size={30} color='#00bb4c' /> 
                Carrinho de Compras
            </C.Title>
            <C.Info>
                <C.Product>
                    <span>Descrição</span>
                </C.Product>
                <C.Qt><span>Quantidade</span></C.Qt>
                <C.PriceArea>
                    <C.Price><span>Preço</span></C.Price>
                    <C.SubTotal><span>Total</span></C.SubTotal>
                </C.PriceArea>
                
            </C.Info>
            <C.Jerseys>
                {cart ? 
                    cart.map((item, index) => (
                        <CartItem 
                            idJ={item.idJ} 
                            size={item.sizeJ} 
                            nameJ={item.nameJ} 
                            photoJ={item.photoJ} 
                            priceJ={item.priceJ} 
                            qtJ={item.qtJ} 
                            key={index}  
                            />
                    ))
                : 
                    null
                }
            </C.Jerseys>
            <C.PagArea>
                <section className='CEP'>
                    <C.ButtonCep>
                        <Input placeholder='Digite seu cupom' />
                        <Button colorScheme='blue'>Desconto</Button>
                    </C.ButtonCep>
                    <div className='RES'>

                    </div>
                </section>
                <section className='PAY'>
                    <div className="Area-Prices">
                        <span>
                            <p className='key'>SubTotal:</p>
                            <p className="value">R${subTotal.toFixed(2).toString().replace('.', ',')}</p> 
                        </span>
                        <span>
                            <p className='key'>Frete:</p> 
                            <p className="value">R${frete.toString().replace('.', ',')}</p> 
                        </span>
                        <span>
                            <p className='key'>Total:</p> 
                            <p className="value">R${(subTotal + frete).toString().replace('.', ',')}</p> 
                        </span>
                        <p>Se possuir um cupom de desconto, utilize na proxíma página.</p>
                    </div>
                </section>
            </C.PagArea>
            </C.Container>
            <Footer />
        </>
    )
};
export default Cart;