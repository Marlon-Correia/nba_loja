import React, { HTMLInputTypeAttribute } from 'react';
import { InpuT } from './styled';

type PropsInput = {
    name: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
    value: string;
    width: number;
    onChange: (e: any) => void[];
}

export const Input = (props: PropsInput) => {
    return ( 
        <InpuT
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            width={props.width}
        />
    );
}

