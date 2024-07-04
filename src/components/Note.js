import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

const Note = ({id, content, handleRemoveNote, date}) => {
  return (
    <div className='note'>
       <span>{content}</span>
        <div className='note-footer'>
            <span className='date'>{date}</span>
            <MdDeleteForever 
                onClick={()=>handleRemoveNote(id)}
                className='delete-icon'
                size={30}    
            />
            
        </div>
        
    </div>
  )
}

export default Note