import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';

import * as C from '../styles/StyledHome';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Franquias } from '../utils/franquias';
import {Logos} from '../components/logos';

import Banner from '../public/images/image.jpg';
import Caps from '../public/images/caps.jpg';
import Jerseys from '../public/images/jerseys.jpg';
import Nav from '../public/images/navBar.jpg';
import Link from 'next/link';
import { useAuth } from '../context/AuthProvider/useAuth';

const Home: NextPage = () => {
  const { name } = useAuth();
  console.log(name);
  return (
    <>
      <Header />
      <C.Container>
        <C.Carousel>
          <Image src={Banner} width={1320} height={400} style={{borderRadius: 3}} />
          <Image src={Nav} width={1000} height={56} style={{marginTop: 10}} />
        </C.Carousel>
        <C.ConfArea>
          <C.title>Coleções de Conferência</C.title>
          <C.AreaBanner>
            <Link href='/bones'>
              <C.Item>
                <Image src={Caps} width={557} height={444} />
              </C.Item>
            </Link>
            <Link href='/jerseys'>
              <C.Item>
                <Image src={Jerseys} width={500} height={444} />
              </C.Item>
            </Link>
          </C.AreaBanner>
        </C.ConfArea>
        <C.FranqArea>
          <C.title>Encontre os itens da sua franquia favorita aqui:</C.title>
          <C.AreaLogo>
            {Franquias.map(item => (
                  <Logos item={item} />
            ))}
          </C.AreaLogo>
        </C.FranqArea>
      </C.Container>
      <Footer />
    </>
  )
}

export default Home
