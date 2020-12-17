import React, { createContext, useState, useRef } from 'react';
import { GetDBFirebase } from '../tools/firebaseFactory';
import { Link } from 'react-router-dom';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
    
    const [DBContext] = useState(GetDBFirebase());
    const [cart, setCart] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(0);

    const [error, setError] = useState(false);
    const [continueBtn, setContinueBtn] = useState(true);
    const [orderSummary, setOrderSummary] = useState({
        name: '',
        phone: '',
        mail: '',
        repeatedMail: '',
    });

    const nameInput = useRef('');
    const phoneInput = useRef('');
    const mailInput = useRef('');
    const repeatedMailInput = useRef('');
    const { name, phone, mail, repeatedMail } = orderSummary;

    const addToCart = (selectedItem, quantity) => {
        const checkItem = (item) => item.id === selectedItem.id;
        const indexItem = cart.findIndex(checkItem);
        if (indexItem === -1) {
            setCart([...cart, selectedItem]);
            itemQuantity(selectedItem, quantity);
            itemTotalPrice(quantity);
        } else {
            cart[indexItem].quantity += quantity;
            itemTotalPrice(quantity);
        }
    };

    function itemQuantity(selectedItem, quantity) {
        selectedItem.quantity = quantity;
    }

    function itemTotalPrice(quantity) {
        const itemCount = itemsInCart + quantity;
        setItemsInCart(itemCount);
    }

    function totalPrice() {
        return cart.reduce(
            (total, item) => total + item.quantity * item.price,
            0
        );
    }

    const changeInput = (e) => {
        setOrderSummary({
            ...orderSummary,
            [e.target.name]: e.target.value,
        });
    };

    const validateSubmit = (e) => {
        e.preventDefault();
        if (
            name.trim() === '' ||
            phone.trim() === '' ||
            mail.trim() === '' ||
            repeatedMail.trim() === '' ||
            mail !== repeatedMail
        ) {
            setError(true);
            name === ''
                ? (nameInput.current.style.border = '1px solid #b44a4a')
                : (nameInput.current.style.border = '');
            phone === ''
                ? (phoneInput.current.style.border = '1px solid #b44a4a')
                : (phoneInput.current.style.border = '');
            mail === ''
                ? (mailInput.current.style.border = '1px solid #b44a4a')
                : (mailInput.current.style.border = '');
            repeatedMail === ''
                ? (repeatedMailInput.current.style.border = '1px solid #b44a4a')
                : (repeatedMailInput.current.style.border = '');
            return;
        }
        setError(false);
        setContinueBtn(false);
        nameInput.current.style.border = '';
        phoneInput.current.style.border = '';
        mailInput.current.style.border = '';
        repeatedMailInput.current.style.border = '';
    };

    const sumItems = (item) => {
        let total = [item]
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2);
        return total;
    };

    const sumTotal = (cart) => {
        let total = cart
            .reduce((total, item) => (total += item.price * item.quantity), 0)
            .toFixed(2);
        return total;
    };

    const createOrder = async () => {
        const orders = DBContext.collection('orders');

        const clientData = {
            name,
            phone,
            mail,
        };
        const newOrder = {
            client: clientData,
            items: cart,
            total: cart.length,
        };
        try {
            const { id } = await orders.add(newOrder);
            alert(`¡Su orden n°: ${id}, ha sido creada con éxito!`);
            updateStock(newOrder);
        } catch (err) {
            console.log('Error');
        } finally {
            cleanAll();
            goInit();
        }
    };

    const goInit = () => {
        return <Link to="/" />;
    };

    const updateStock = (newOrder) => {
        for (let i = 0; i < newOrder.items.length; i++) {
            const item = DBContext.collection('items').doc(
                newOrder.items[i].id
            );

            item.get()
                .then((doc) => {
                    if (!doc.exists) {
                        console.log('producto inexistente');
                    }
                    const itemStock = doc.data();

                    item.update({ stock: itemStock.stock - 1 });
                })
                .catch((error) => console.log(error))
                .finally(() => {});
        }
    };

    function removeTotalQuantity() {
        const number = itemsInCart - 1;
        setItemsInCart(number);
    }

    function deleteItem(itemDeleted) {
        const newList = [...cart];
        const compareIds = (item) => item.id === itemDeleted.id;
        const itemIndex = cart.findIndex(compareIds);
        if (itemIndex !== -1 && newList[itemIndex].quantity >= 2) {
            newList[itemIndex].quantity = newList[itemIndex].quantity - 1;
        } else {
            newList.splice(itemIndex, 1);
        }
        setCart(newList);
        removeTotalQuantity();
    }

    function cleanAll() {
        setCart([]);
        setItemsInCart(0);
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                cleanAll,
                deleteItem,
                itemsInCart,
                totalPrice,
                sumItems,
                sumTotal,
                nameInput,
                phoneInput,
                mailInput,
                repeatedMailInput,
                error,
                continueBtn,
                orderSummary,
                changeInput,
                validateSubmit,
                createOrder,
                setCart,
                setItemsInCart,
                setError,
                setContinueBtn,
                setOrderSummary,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
