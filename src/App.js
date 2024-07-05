import React, { useEffect, useState } from 'react'
import {nanoid} from "nanoid"
import NoteList from "./components/NoteList"

const App = () => {
  const [notes, setNotes] = useState([
        {
          id: nanoid(),
          content: "First Note",
          date: "11/2//21"
        },
        {
          id: nanoid(),
          content: "Second Note",
          date: "14/3//21"
        },
        {
          id: nanoid(),
          content: "Third Note",
          date: "16/3//21"
        },
  ])
  // Search
  const [searchNote, setSearchNote] = useState('')

  // Dark mode toggle
  const [darkMode, setDarkMode] = useState(false)

  // Here we save react data to local storage once state re-renders. Stringyfy method converts  data from a JS object to a string. 
  /* useEffect(() => {
        localStorage.setItem('react-note-app-data'. JSON.stringyify(notes))
  }, [notes])
 */
  // Here we retrieve data set to locat storage then convert to a JS object then assign to a variable, we then set up a condition that update state with the new variable containing the retrieved data.
 /*  useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('react-note-app-data',))
        if (storedNotes) {
          setNotes(storedNotes)
        }
  }, []) */

  // 'content' parameter refers to the content of note we want to add.
  // whenever over function executes the values within it is pass into content
  const addNote = (content) => {
    // A new note object is created using content parameter
    // This is where the actual note content is stored.
        const date = new Date()
        const newNote = {
          id: nanoid(),
          // content:content essentially means "set the text property of the newNote object to be equal to the value of the text parameter that was passed to the addNote function.
          content: content,
          date: date.toLocaleDateString()
        };
        //The newNote object is then added to the existing notes array:
        const newNotes = [...notes, newNote]
        setNotes(newNotes)
  }

  const removeNote =(id)=> {
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes)
  }


  return (
    <div className='container'>
        <div>
          <NoteList
              notes={notes}
              handleAddNote={addNote}
              handleRemoveNote={removeNote}
          />
      </div>
    </div>
      
  )
}
  
export default App