import React from 'react';
import { Header } from '../components/header';
import { jerseys } from '../utils/jersey';
import { Props } from '../utils/jersey';

const images = () => {
    return(
        <>
        <Header />
        {jerseys.map(item => (
            <div key={item.id}>
                <p>{item.name}</p>
                {item.fotos.map(fotos => (
                    <img width={100} src={fotos} alt="" />
                ))}
            </div>
        ))}
        </>
    )
}
export default images