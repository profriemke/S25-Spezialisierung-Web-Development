'use client'
import { useState } from "react"

export default function AddNote(props){
    let [note, setNote] = useState('')
    let [mode, setMode] = useState('button')

    const changeNote = (event)=>{  
        setNote(event.target.value)
        console.log(note)
    }
    const handleClick = ()=>{
        if(note==''){
            setMode('button')
            return
        }
        props.addNote(note)
        setNote('')
        setMode('button')
    }
   if(mode=='form'){
    return(
        <div>
            Du hast eingegeben:{note}<br/>
            <input value={note} onChange={changeNote}/>
            <button onClick={()=>{handleClick()}}>hinzufügen</button>
        </div>
    )
    }else{
        return(
            <button onClick={()=>{setMode('form')}} className="rounded-4xl bg-blue-800 text-white w-10 h-10">
                +
            </button>
        )
    }
}