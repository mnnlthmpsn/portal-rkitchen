import { createContext, useEffect, useState } from "react";
import { req_foods } from "../apis/foods";

export const FoodContext = createContext()

const FoodContextProvider = ({ children }) => {

    const [foods, setFoods] = useState([])

    const getFoods = async () => {
        const { data } = await req_foods()
        foods && setFoods(data)
    }

    const addFood = food => {
        setFoods([...foods, food])
    }

    useEffect(() =>{
        getFoods()
    }, [])

    return (
        <FoodContext.Provider value={{ foods, addFood }}>
            {children}
        </FoodContext.Provider>
    )
}

export default FoodContextProvider