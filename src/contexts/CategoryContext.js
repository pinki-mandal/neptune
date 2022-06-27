import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const categoryContext = createContext();

const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/categories");
                setCategory(response.data.categories);
            }
            catch (error) {
                console.log(error)
            }
        })();
    }, [])

    return (
        <categoryContext.Provider value={{ category }}>
            {children}
        </categoryContext.Provider>
    )
}

const useCategoryContext = () => useContext(categoryContext)

export { useCategoryContext, CategoryProvider };