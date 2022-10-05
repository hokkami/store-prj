import React ,{useContext} from 'react'
import productsContext from "../../Context/ProductsContext";
import './Survey.css'


export default function Survey(){

    const [question , setQuestion] = useContext(products)

    return(
        <>
        Survey Page
        </>
    )
}