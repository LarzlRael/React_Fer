import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { NothingSelected } from './NothinSelected'
import { Sidebar } from './Sidebar'

const JournaScreen = () => {

    const { active } = useSelector(state => state.notes)

    return (
        <div 
        className="journal__main-content animate__animated animated_fadeIn animate_faster">
            <Sidebar />
            <main>
                
                {(active) ? <NoteScreen /> : <NothingSelected />}

            </main>
        </div>
    )
}

export default JournaScreen
