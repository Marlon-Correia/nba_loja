import React from 'react';
import * as C from './styled';

export const Footer = () => {
    return(
        <C.Footer>
            <C.Cont>
                <C.AreaLinks>
                    <C.Title>Links:</C.Title>
                    <C.Item>Política de privacidade</C.Item>
                    <C.Item>Política de reembolso</C.Item>
                    <C.Item>Política de envio e entrega</C.Item>
                    <C.Item>Perguntas frequentes</C.Item>
                </C.AreaLinks>
                <C.AreaLinks>
                    <C.Title>Contatos:</C.Title>
                    <C.Item>E-mail</C.Item>
                    <C.Item>WhatsApp</C.Item>
                    <C.Item>Instagram</C.Item>
                    <C.Item>Facebook</C.Item>
                </C.AreaLinks>
                <C.AreaLinks>
                    <C.Title>aaa</C.Title>
                    <C.Item>aaa</C.Item>
                    <C.Item>aaa</C.Item>
                    <C.Item>aaa</C.Item>
                </C.AreaLinks>
            </C.Cont>
            <C.hor />
            <C.Final>
                <C.Item>© 2022 Criado por Marlon Correia</C.Item>
            </C.Final>
        </C.Footer>
    )
}