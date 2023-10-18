
import {useState, useEffect, createContext, useContext, useRef} from 'react';
import dotenv from 'dotenv'
import axios from 'axios';
import AlertMsg from '../Pages/Home/components/Elements/AlertMsg'
export const HomeContext = createContext();

export const HomeContextProvider = ({children}) => {
const [filterValues, setfilterValues] = useState({location: null, moveInDate: null, PriceRange: [0, 0], propType: null});
const [properties, setProperties] = useState([]);
const propertiesRef = useRef([]);
useEffect(() => {
getProperties()
}, [])
const getProperties = async() => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_API_PATH}/list-properties`);
        if(res?.data){
            setProperties(res?.data);
            propertiesRef.current = res?.data;
        }
    } catch (error) {
        <AlertMsg status='error' msg={error.message} />
    }
}
return (<HomeContext.Provider value={{properties, setfilterValues, filterValues}}>
       {children}
       </HomeContext.Provider>)
}
