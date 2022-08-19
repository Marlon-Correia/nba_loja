import React, { useEffect, useState } from "react";
import * as C from './styled';
import Image from "next/image";
import Link from "next/link";

import logo from '../../public/images/sac.jpg';
import search from '../../public/images/search.png';
import { Input } from '@chakra-ui/react'

import {AiOutlineUser} from 'react-icons/ai';
import {BsCart2} from 'react-icons/bs';
import {RiTruckLine} from 'react-icons/ri';
import { useAuth } from "../../context/AuthProvider/useAuth";

export const Header = () => {
    const {name, logOut, cart} = useAuth();
    console.log(cart?.length)
    const handleLogOut = () => {
        logOut();
        return ;
    }

    return(
    
        <C.Header>
            <C.ZapArea>
                <RiTruckLine size={20} color='#fff' style={{marginRight: 5}}/>
                <C.Text>Frete Grátis para todo o Brasil!</C.Text>
            </C.ZapArea>
            <C.MobileArea>
                <C.AreaLogo>
                    <Link href={'/'}>
                    <Image style={{cursor: 'pointer'}} src={logo} width={47} height={47}/>
                    </Link>
                </C.AreaLogo>
                <C.BurgerMenu>
                    <C.Line></C.Line>
                    <C.Line></C.Line>
                    <C.Line></C.Line>
                </C.BurgerMenu>
                <C.AreaNav>
                    <C.NavItem>
                        <Link href='/login'>{name ? `Olá ${name}` : 'Login'}</Link>
                    </C.NavItem>
                    <C.NavItem>
                        <Link href='/cart'>Carrinho</Link>
                    </C.NavItem>
                    <C.NavItem>
                        <Link style={{cursor: 'pointer'}} href='/'>Home</Link>
                    </C.NavItem>
                    <C.NavItem>
                        <Link href='/jerseys'>Jersey</Link>
                    </C.NavItem>
                    <C.NavItem>
                        <Link href='/bones'>Bonés</Link>
                    </C.NavItem>
                    <C.NavItem>
                        <Link href='/'>Produtos</Link>
                    </C.NavItem>
                </C.AreaNav>
            </C.MobileArea>

            <C.TopHeader>
                <C.AreaLogo>
                    <Link href={'/'}>
                    <Image style={{cursor: 'pointer'}} src={logo} width={47} height={47}/>
                    </Link>
                </C.AreaLogo>
                <C.AreaSearch>
                    <C.SearchBar>
                        <Input  
                            focusBorderColor = "none"
                            border='none'
                            type='text'
                            placeholder="O que você procura ?"
                        />
                        <C.ButtonArea>
                            <Image src={search} width={18} height={18}/>
                        </C.ButtonArea>
                    </C.SearchBar>
                </C.AreaSearch>
                <C.AreaIcons>
                    <C.Icon style={{cursor: 'pointer'}}>
                        {name ?
                            <>
                            <C.AreaUser>
                                <AiOutlineUser size={30} color='#000' />
                                {name ? <p>Olá,{name}</p> : <p>Login</p>}
                            </C.AreaUser>
                            <C.AreaInfo>
                                <Link href='/config'>Ir para configurações</Link>
                                <Link href='/pedidos'>Ver meus pedidos</Link>
                                <p onClick={handleLogOut}>Sair</p>
                            </C.AreaInfo>
                            </>
                                : 
                            <Link href='/login'>
                            <C.AreaUser>
                                <AiOutlineUser size={30} color='#000' />
                                {name ? <p>Olá,{name}</p> : <p>Login</p>}
                            </C.AreaUser>
                            </Link>
                            }
                    </C.Icon>
                    <Link href='/cart'>
                        <C.Icon style={{cursor: 'pointer'}}>
                                <C.QtCart>{cart?.length}</C.QtCart>
                                <BsCart2 size={30} color='#000' />
                        </C.Icon>
                    </Link>
                </C.AreaIcons>
            </C.TopHeader>

            <C.BottomHeader>
                <C.AreaNav>
                    <C.NavItem>
                        <Link style={{cursor: 'pointer'}} href='/'>Home</Link>
                    </C.NavItem>
                    <C.NavItem>
                        <Link href='/jerseys'>Jersey</Link>
                    </C.NavItem>
                    <C.NavItem>
                        <Link href='/bones'>Bonés</Link>
                    </C.NavItem>
                    <C.NavItem>
                        <Link href='/'>Quem Somos</Link>
                    </C.NavItem>
                    <C.NavItem>
                        <Link href='/'>Produtos</Link>
                    </C.NavItem>
                </C.AreaNav>
            </C.BottomHeader>
        </C.Header>
    )
}