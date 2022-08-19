import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import * as C from '../../styles/StyledIndJer';
import {MdOutlineAdd} from 'react-icons/md';
import {AiOutlineMinus} from 'react-icons/ai';

import {PropsJersey} from '../../utils/jersey';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { useAuth } from '../../context/AuthProvider/useAuth';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'

const IndShirt = () => {
    const {addItemCart} = useAuth();
    const router = useRouter();
    const {id} = router.query;

    const [qt, setQt] = useState(1);
    const [size, setSize] = useState<string | null>();
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(0);
    const [actualJersey, setActualJersey] = useState<PropsJersey>();

    useEffect(() => {
        const getJersey = async (id: any) => {
            setLoading(true)
            const res = await fetch(`http://localhost:3000/api/jerseys/${id}`)
            const Jersey: PropsJersey = await res.json();
            setActualJersey(Jersey)
            setLoading(false)
        }
        getJersey(id);
    }, [id]);

    const handleDecreQt = () => { if(qt >= 2) setQt(qt - 1) }
    const handleAddQt = () => { if(qt <= 50) setQt(qt + 1)  }

    const AddJersey = () => {
        if(size){
            let Adding = addItemCart(actualJersey?.name, actualJersey?.id, size, actualJersey?.preco, qt, actualJersey?.fotos[0])
            if(Adding) alert(Adding)
            setQt(1);
        } else {
            alert('Preencha o campo de tamanho')
        }
        
    }

    return(
        <>
        <Header />
        <C.Container>
            <C.AreaPictures>
                {actualJersey?.fotos.map((foto, index) => (
                    <img key={index} src={foto} alt='jersey' width={100} height={100} onClick={() => {setIndex(index)}} />
                ))}
            </C.AreaPictures>
            <C.AreaMain>
                <img src={actualJersey?.fotos[index]} alt='big jersey' />
            </C.AreaMain>
            <C.AreaInfo>
                    <C.ContInfo>
                        <C.Name>{actualJersey?.name}</C.Name>
                        <C.PriceArea>
                            <C.Price>R${actualJersey?.preco.toString().replace('.', ',')}</C.Price>
                            <p>Em até 12x de {(220 / 12).toFixed(2).toString().replace('.', ',')}</p>
                        </C.PriceArea>
                        <C.SelectArea>
                            <p>Tamanhos</p>
                            <C.InfoSelect onChange={e => setSize(e.target.value)}>
                                <option selected>Selecionar...</option>
                                {actualJersey?.tamanho.map((item, index) => (
                                    <option value={item} key={index}>{item}</option>
                                ))}
                            </C.InfoSelect>
                        </C.SelectArea>
                        <C.QtArea>
                            <p>Quantidade</p>
                            <C.ChangeArea>
                                <C.ChangeValue onClick={handleDecreQt}>
                                    <span><AiOutlineMinus size={13}  /></span>
                                </C.ChangeValue>
                                <C.ChangeValue>
                                    <p>{qt}</p>
                                </C.ChangeValue>
                                <C.ChangeValue onClick={handleAddQt}>
                                    <span><MdOutlineAdd size={15} /></span>
                                </C.ChangeValue>
                            </C.ChangeArea>
                            
                        </C.QtArea>
                        <C.Button onClick={AddJersey}>
                            Adicionar ao Carrinho
                        </C.Button>
                    </C.ContInfo>
            </C.AreaInfo>
        </C.Container>
        <Footer />
        </>
        
    )
};
export default IndShirt;
