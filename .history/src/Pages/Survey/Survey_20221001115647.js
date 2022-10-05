import React ,{useContext} from 'react'
import productsContext from "../../Context/ProductsContext";
import './Survey.css'


export default function Survey(){

    const contextData = useContext(productsContext)

    return(
        <>
        {
            contextData.questions.map(question=>(
                // <h1>salam</h1>
                <h1>{question.questionsText}</h1>
                <h6>{}</h6>
                ))
        }
        </>
    )
}