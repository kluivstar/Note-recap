import React, { useState } from 'react'

const AddNote = () => {
    const [noteContent, setNoteContent] = useState('')
    const contentLimit = 250;

    function handleChange(event){
        setNoteContent(event.target.value)
    }
    function handleAddNoteClick(){

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