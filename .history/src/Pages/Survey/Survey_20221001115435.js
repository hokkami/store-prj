import React ,{useContext} from 'react'
import productsContext from "../../Context/ProductsContext";
import './Survey.css'


export default function Survey(){

    const contextData = useContext(productsContext)

    return(
        <>
        <h1>نظر سنجی</h1>
        <h1>نظر سنجی</h1>
        <h1>نظر سنجی</h1>
        <h1>نظر سنجی</h1>
        {
            contextData.questions.map(question=>(
                <h1>salam</h1>
                <h1>{question[1]. }</h1>
                ))
        }
        </>
    )
}