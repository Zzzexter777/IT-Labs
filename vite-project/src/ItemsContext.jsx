import React, { createContext, useContext, useState } from "react";

const ItemsContext = createContext(null);

export const useItemsContext = () => {
    const context = useContext(ItemsContext);
    if (context) return context;
    throw new Error("ItemsContext must be used within Provider!");
};

export const ItemsContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleAddItem = () => {
        if (inputValue.trim() === "") return;

        const newItem = {
            id: Date.now(),
            text: inputValue.trim(),
        };

        setItems([...items, newItem]);
        setInputValue("");
    };

    return (
        <ItemsContext.Provider
            value={{
                items,
                setItems,
                inputValue,
                setInputValue,
                handleAddItem,
            }}
        >
            {children}
        </ItemsContext.Provider>
    );
};