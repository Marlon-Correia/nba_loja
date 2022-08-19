import React from 'react';
import * as C from './styled';
import Image from 'next/image'
import Link from 'next/link';

type Props ={
    item : {
        id: number;
        name: string;
        preco: number;
        tamanho: string[];
        fotos: string[];
    }
    
}
export const Products = ({item}: Props) => {
    return(
        <Link href={`/jerseys/${item.id}`}>
        <C.Item key={item.id}>
            <C.ImageArea>
                <img src={item.fotos[0]} alt="logo" width={280} height={280} style={{cursor: 'pointer'}} />
            </C.ImageArea>
            <C.InfoArea>
                <C.Name>{item.name}</C.Name>
                <C.Preço>R${item.preco.toString().replace('.', ',')}</C.Preço>
            </C.InfoArea>
        </C.Item>
        </Link>
    )
}