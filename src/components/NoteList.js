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
                handleAddNote={handleAddNote}
            />)
            
        )}
        <AddNote handleRemoveNote={handleRemoveNote}/>
    </div>
  )
}

export default NoteList