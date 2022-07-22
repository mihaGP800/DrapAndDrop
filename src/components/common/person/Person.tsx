import React, {useState} from 'react';
import s from './Person.module.scss'

export type Instancetype = {
    id: number
    order: number
    title: string
}

type PersonType = {
    title: string
    instance: Instancetype
    persons: Instancetype[]
    setPersons: (persons: Instancetype[]) => void
    currentPerson: Instancetype | null
    setCurrentPerson: (currentPerson: Instancetype) => void
}

export const Person: React.FC<PersonType> = ({
                                                 title,
                                                 instance,
                                                 persons,
                                                 setPersons,
                                                 currentPerson,
                                                 setCurrentPerson
                                             }) => {


    function dragStartHandle(e: React.DragEvent<HTMLDivElement>, instance: Instancetype) {
        setCurrentPerson(instance)
    }

    function dragLeaveHandle(e: React.DragEvent<HTMLDivElement>) {
        e.currentTarget.className = s.personBlock
    }

    function dragEndHandle(e: React.DragEvent<HTMLDivElement>) {
        e.currentTarget.className = `${s.personBlock} ${s.replaceBlock}`
    }

    function dragOverHandle(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        e.currentTarget.className = `${s.personBlock} ${s.hoverBlock}`
    }

    function dropHandle(e: React.DragEvent<HTMLDivElement>, instance: Instancetype) {
        e.preventDefault()
        setPersons(persons.map(p => {
            if (currentPerson) {
                if (p.id === instance.id) {
                    return {...p, order: currentPerson.order}
                }
                if (p.id === currentPerson.id) {
                    return {...p, order: instance.order}
                }
            }
            return p
        }))
        e.currentTarget.className = s.personBlock
    }

    return (
        <div className={s.personBlock}
             onDragStart={(e) => dragStartHandle(e, instance)}
             onDragLeave={(e) => dragLeaveHandle(e)}
             onDragEnd={(e) => dragEndHandle(e)}
             onDragOver={(e) => dragOverHandle(e)}
             onDrop={(e) => dropHandle(e, instance)}
             draggable>
            <h4>{title}</h4>

        </div>
    );
}