import React from 'react'
import Note from './Note'
import AddNote from "../components/AddNote"

const NoteList = ({notes, handleAddNote, handleRemoveNote}) => {
  return (
    <div className='note-list'>
        {notes.map((note) => (
            <Note
                id={note.id}
                content={note.content}
                date={note.date}
                handleRemoveNote={handleRemoveNote}
            />)
            
        )}
        <AddNote handleAddNote={handleAddNote}/>
    </div>
  )
}

export default NoteList