'use client'
import Note from '../../components/Note'
import AddNote from '../../components/AddNote'
import {useState, useEffect} from 'react';
export default function notes() {
    let [notes, setNotes] = useState([])

    const addNote = (note)=>{
        setNotes([...notes, {id: notes.length+1, text: note}])
    }
    useEffect(()=>{
        fetch('/api/notes')
        .then(response=>response.json())
        .then(data =>{
            console.log(data)
            setNotes(data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
        ,[]
    )
    return (
        <div>
            <h1>Notizen</h1>
            <div className='flex flex-wrap'>
              {
                notes.map((item)=>{
                    return(
                        <Note key={item.id} text={item.text}/>              
                    )
                })
              }
              <AddNote addNote={addNote}/>
            </div>
        </div>
    )
}