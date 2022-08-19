import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import * as C from './styled';

type Props ={
    item : {
        id: number;
        logo: StaticImageData;
        width:number;
        height: number;
    }
    
}
export const Logos = ({item}: Props) => {
    return(
        <Link href={`/jerseys/${item.id}`}>
            <C.Item key={item.id}>
                <Image src={item.logo} alt="logo" width={item.width} height={item.height} style={{cursor: 'pointer'}} />
            </C.Item>
        </Link>
    )
}