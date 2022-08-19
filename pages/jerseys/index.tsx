import * as React from 'react';
import * as C from '../../styles/StyledJerseys';

import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { Products } from '../../components/Products';
import { Select } from '@chakra-ui/react'

import {jerseys} from '../../utils/jersey'

const Jerseys = () => {
    return(
        <>
            <Header/>
            <C.Container>
                <C.LeftSide>
                    <C.Filter>
                        <C.Title>Basquete</C.Title>
                        <C.FilterArea>
                            <span>Ordenar por:</span>
                            <Select variant='outline' size='lg'>
                                <option selected>Relevância</option>
                                <option>Mais vendidos</option>
                                <option>Maior preço</option>
                                <option>Menor preço</option>
                                <option>Melhor avaliação</option>
                            </Select>
                        </C.FilterArea>
                    </C.Filter>
                </C.LeftSide>
                <C.RightSide>
                    <C.AreaProducts>
                        {jerseys.map(item => (
                            <Products item={item} />
                        ))}
                    </C.AreaProducts>
                </C.RightSide>
            </C.Container>
            <Footer />
        </>
    )
};
export default Jerseys;