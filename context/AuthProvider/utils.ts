import { IUser } from "./types";

export const postUserLocalStorage = (email:string, password:string, name:string) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_db')!);
    const hasUser = usersStorage?.filter((user:any) => user.email === email);

    if(hasUser?.length) return 'E-mail já cadastrado'

    let newUser ; 
    if(usersStorage){
        newUser = [...usersStorage, {email, password, name, cart: []}];
    }else{
        newUser = [{email, password, name, cart: []}]
    }

    localStorage.setItem('users_db', JSON.stringify(newUser));
    return 'a';
}

export const GetItem = (id:Number, size:string, user:IUser) => {
    const NewUserStorage:any = JSON.parse( localStorage.getItem('users_db') as any );
    let item = user.cart?.filter((item) => ( item.idJ === id && item.sizeJ === size ))
}

/*const deleteItemCart = (id:Number, size:string) => {
        
    const hasUser = NewUserStorage?.findIndex( (dataUser:any) => dataUser.email === user.email );
    const itemIndex:any = user.cart?.findIndex((item) => (item.idJ === id && item.sizeJ === size))
    NewUserStorage.splice(hasUser, 1);
    let newCart = user.cart?.filter((item) => user.cart?.indexOf(item) !== itemIndex)
    setUser({...user, cart: newCart});
    NewUserStorage.push({...user, cart: newCart});
    localStorage.setItem('users_db', JSON.stringify(NewUserStorage));
    return 'Item deletado com sucesso'

}

const NewUserStorage:any = JSON.parse( localStorage.getItem('users_db') as any );

const deleteItemCar = (id:Number, size:string) => {

    const hasUser = NewUserStorage?.findIndex( (dataUser:any) => dataUser.email === user.email );
    const itemIndex:any = user.cart?.findIndex((item) => (item.idJ === id && item.sizeJ === size))
    NewUserStorage.splice(hasUser, 1);
    let newUser = user;
    newUser.cart?.splice(itemIndex, 1);
    setUser(newUser);
    NewUserStorage.push(newUser);
    localStorage.setItem('users_db', JSON.stringify(NewUserStorage));









    if(user && user.cart) {
            const hasUser = NewUserStorage?.filter( (dataUser:any) => dataUser.email === user.email );
            const Index:any = user.cart?.findIndex((item) => (item.idJ === id && item.sizeJ === size))
            let JerseyAdd:Item = user.cart[Index];
            JerseyAdd.qtJ = Number(JerseyAdd.qtJ) + 1
            let Cart = user.cart.filter((item:Item) => item.idJ !== id && item.sizeJ !== size);
            Cart.push(JerseyAdd)
            setUser({...user, cart: Cart})
        }
}*/