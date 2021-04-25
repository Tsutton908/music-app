import React from 'react';
import { createContext, useContext, useReducer } from 'react';
export const DataLayerContext = createContext();

//initialize the datalayer using the redux reducer and the intitail states stated in the reducer file
export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children} 
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);