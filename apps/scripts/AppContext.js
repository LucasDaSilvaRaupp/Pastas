import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [lanches, setLanches] = useState(
        [
            {
                id: '1',
                name: 'Frango com Catupiry',
                local: 'Mini Kalzone',
                price: 10.00,
                img: 'https://admin.minikalzone.com.br/uploads/product/5/66aa85eda9dc62.40762053.png',
        
            },
            {
                id: '2',
                name: 'Frango',
                local: 'Mini Kalzone',
                price: 8.50,
                img: 'https://admin.minikalzone.com.br/uploads/product/9/66aa8788e6e364.81572054.png',
            },
            {
                id: '3',
                name: 'Brócolis',
                local: 'Mini Kalzone',
                price: 9.50,
                img: 'https://admin.minikalzone.com.br/uploads/product/14/66aa8874810357.20807074.png',
            },
            {
                id: '4',
                name: 'Galak',
                local: 'Mini Kalzone',
                price: 7.50,
                img: 'https://admin.minikalzone.com.br/uploads/product/51/66aa840b3168c2.56138611.png',
            },
        
        ]
    )

        
    return <AppContext.Provider value={{ carrinho, setCarrinho, lanches, setLanches }}>
    {children}
</AppContext.Provider>;
}