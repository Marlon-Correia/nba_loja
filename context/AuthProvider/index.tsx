import React, { createContext, useState, useEffect } from "react";
import { IAuthProvider, IContext, Item, IUser } from "./types";
import { postUserLocalStorage } from "./utils";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) => {
    const [user, setUser] = useState<IUser| null>();
    
    useEffect(() => {
        const userActual = localStorage.getItem('user_actual');
        const userStorage = localStorage.getItem('users_db');
        if(userActual && userStorage){
            const hasUser = JSON.parse(userStorage)?.filter(
                (user:any) => user.email === JSON.parse(userActual).email
            );
            if(hasUser) setUser(hasUser[0])
            console.log(user)
        }
    }, []);

    const signin = (email: string, password:string) => {
        const usersStorage = JSON.parse(localStorage.getItem('users_db')!);
        const hasUser = usersStorage?.filter((user: any) => user.email === email);
    
        if(hasUser?.length){
    
            if(hasUser[0].email === email && hasUser[0].password === password){
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_actual", JSON.stringify({email, token}));
                setUser(hasUser[0]);
                return ;
            } else {
                return 'Email ou senha incorretos!';
            };
        }
        else {
            return 'Usuário não cadastrado!';
        };
    };

    const signup = (email: string, password: string, name: string) => {
        postUserLocalStorage(email, password, name);
    }

    const logOut = () => { 
        setUser(null) 
        localStorage.removeItem("user_actual");
    }
    
    const addItemCart = (nameJ: any, idJ:number, sizeJ: string, priceJ: number, qtJ:any, photoJ:any) => {
        const userStorage:any = localStorage.getItem('users_db');
        if(user){
            const Cart: any = user?.cart;
            const hasJersey = Cart.filter((jersey:Item) => {
                if(jersey.idJ === idJ && jersey.sizeJ === sizeJ) return jersey
            });
            if(hasJersey.length > 0){
                hasJersey[0].qtJ += qtJ;
                return ;
            } else {
                Cart?.push({nameJ, idJ, sizeJ, priceJ, qtJ, photoJ})
            }
            const AtUser = {...user, cart: Cart}
            setUser(AtUser)
            const NewUserStorage = JSON.parse(userStorage)
            const hasUser = NewUserStorage?.findIndex( (dataUser:any) => dataUser.email === user.email );
            NewUserStorage.splice(hasUser, 1);
            NewUserStorage.push(user)
            localStorage.setItem('users_db', JSON.stringify(NewUserStorage));
            return 'Adicionado com sucesso';
        } else {
            return 'Esteja logado para adicionar itens ao carrinho'
        }
    }
    
    const deleteItemCart = (id:Number, size:string) => {
        const NewUserStorage:any = JSON.parse( localStorage.getItem('users_db') as any );
        if(user) {
            const hasUser = NewUserStorage?.findIndex( (dataUser:any) => dataUser.email === user.email );
            const itemIndex:any = user.cart?.findIndex((item) => (item.idJ === id && item.sizeJ === size))
            NewUserStorage.splice(hasUser, 1);
            let newCart = user.cart?.filter((item) => user.cart?.indexOf(item) !== itemIndex)
            setUser({...user, cart: newCart});
            NewUserStorage.push({...user, cart: newCart});
            localStorage.setItem('users_db', JSON.stringify(NewUserStorage));
            return 'Item deletado com sucesso'
        }
    }

    const addQtItemCart = (id:Number, size:string, qt: number) => {
        const NewUserStorage:any = JSON.parse( localStorage.getItem('users_db') as any );
        if(user && user.cart) {
            const hasUser = NewUserStorage?.filter( (dataUser:any) => dataUser.email === user.email );
            const Index:any = user.cart?.findIndex((item) => (item.idJ === id && item.sizeJ === size))
            let newCart = user.cart.map((item:Item) => {
                if(item.idJ === id && item.sizeJ === size){
                    item.qtJ = Number(item.qtJ) + 1
                    return item
                } else {
                    return item
                }
            })
            setUser({...user, cart: newCart})
        }
    }
 
    return(
        <AuthContext.Provider value={{...user, signin, logOut, signup, addItemCart, deleteItemCart, addQtItemCart}}>
            {children}
        </AuthContext.Provider>
    )
}

