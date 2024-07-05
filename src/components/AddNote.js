import React, { useState } from 'react'

const AddNote = ({handleAddNote}) => {
    const [noteContent, setNoteContent] = useState('')
    const contentLimit = 250;

    //this function is triggered by the onChange event of the <textarea>. It updates the noteText state with the current value of the <textarea> as long as the length does not exceed characterLimit.
    function handleChange(event){
        if(contentLimit - event.target.value.length >=0){
        setNoteContent(event.target.value)}
    }

    //Here we check if noteText has non-whitespace content (noteContent.trim().length > 0). If true:It calls handleAddNote, a function passed as a prop, with noteContent as an argument. This allows the parent component to handle saving new the note. 
    function handleAddNoteClick(){
        if(noteContent.trim().length > 0)

            {
                handleAddNote(noteContent)
                setNoteContent('')
            }        
        }
  return (
    <div className='new-note'>
            <textarea
                placeholder='Saying something...'
                value={noteContent}
                onChange={handleChange}
                rows="8"
                col="10"
            >

            </textarea>
            <div className='content-note-footer'>
                <small>{contentLimit - noteContent.length} left</small>
                <button onClick={handleAddNoteClick} className='add-note'>Add Note</button>
            </div>
    </div>
  )
}

export default AddNote