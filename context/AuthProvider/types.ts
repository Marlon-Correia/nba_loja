export interface IUser  {
    email ?: string;
    token?: string;
    name?: string;
    cart?: Item[];
}

export interface IContext extends IUser {
    signin: (email: string, password: string) => string | any;
    signup: (email: string, password: string, name: string) => string | any;
    logOut: () => void;
    addItemCart: (nameJ: any, idJ:any, sizeJ: any, priceJ: any, qtJ: any, photoJ: any) => string|any
    deleteItemCart: (id: number, size: string) => string | any 
    addQtItemCart: (id: number, size: string, qt: number) => any
}

export interface IAuthProvider {
    children: JSX.Element;
}

export type Item = {
    photoJ: string| undefined;
    nameJ: string| undefined;
    idJ: number| undefined;
    sizeJ: string| undefined;
    priceJ: number| undefined;
    qtJ: number| undefined;
}
export type IndAddress = {
    cep: number;
    street: string;
    neightbor: string;
    number: number;
}