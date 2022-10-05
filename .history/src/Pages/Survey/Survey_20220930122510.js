import React ,{useContext} from 'react'
import productContext from "../../"
import './Survey.css'


export default function Survey(){

    const [question , setQuestion] = useContext()

    return(
        <>
        Survey Page
        </>
    )
}