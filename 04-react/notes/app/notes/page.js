'use client'
import Note from '@/components/Note'
import AddNote from '@/components/AddNote'
import {useState} from 'react';
export default function notes() {
    let [notes, setNotes] = useState([])

    const addNote = (note)=>{
        setNotes([...notes, {id: notes.length+1, text: note}])
    }

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