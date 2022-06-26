import React, {useState,createContext} from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {
    return (
        




        <RestaurantsContext.Provider>
            {props.children}
        </RestaurantsContext.Provider>
    )
}