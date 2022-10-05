import React ,{useContext} from 'react'
import productsContext from "../../Context/ProductsContext";
import './Survey.css'


export default function Survey(){

    const contextData = useContext(productsContext)

    return(
        <>
        Survey Page
        </>
    )
}