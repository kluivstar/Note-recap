import React, { useState } from 'react'

const AddNote = () => {
    const [noteContent, setContent] = useState('')
    const contentLimit = 250;

    function handleChange(){

    }
    function handleAddNoteClick(){

    }
  return (
    <div className='new-note'>
        <div>
            <textarea
                placeholder='Saying something...'
                value={noteContent}
                onChange={handleChange}
                rows="8"
                col="10"
            >

            </textarea>
            <div note-footer>
                <small></small>
                <button onClick={handleAddNoteClick} className='add-note'>Add Note</button>
            </div>
        </div>
    </div>
  )
}

export default AddNote