import React, { useState } from 'react';
import * as C from './styled';
import { AiOutlineMinus } from 'react-icons/ai';
import { MdOutlineAdd } from 'react-icons/md';
import { useAuth } from '../../context/AuthProvider/useAuth';

export const CartItem = ({idJ,nameJ,photoJ,priceJ,qtJ,size}: any) => {
    const {deleteItemCart, addQtItemCart} = useAuth();

    const handleDecreQt = () => { 
        
    }
    const handleAddQt = () => { 
        addQtItemCart(idJ,size,qtJ)
    }

    const deleteI = () => {
        let res = deleteItemCart(idJ, size)
        alert(res)
    }
    return(
        <>
        <C.Container key={idJ}>
            <C.DescArea>
                <img src={photoJ} width={130} height={130} />
                <C.Infos>
                    <p>{nameJ}</p>
                    <span>Tamanho: {size}</span>
                </C.Infos>
            </C.DescArea>
            <C.QtArea>
                <div style={{display: 'flex'}}>
                    <C.ChangeValue onClick={handleDecreQt}>
                        <AiOutlineMinus size={13}  />
                    </C.ChangeValue>
                    <C.ChangeValue>
                        {qtJ}
                    </C.ChangeValue>
                    <C.ChangeValueA onClick={handleAddQt}  >
                        <MdOutlineAdd size={15} />
                    </C.ChangeValueA>
                </div>
                <span onClick={deleteI} style={{color: '#f00', margin: '5px 0', cursor: 'pointer', fontSize: 14}}>Remover item</span>
            </C.QtArea>
            <C.PriceArea>
                <span>R${priceJ.toString().replace('.', ',')}</span>
                <span>R${(priceJ * qtJ).toString().replace('.', ',')} </span>
            </C.PriceArea>
        </C.Container>
        </>
    )
};