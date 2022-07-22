import React, {useState} from 'react';
import s from './Users.module.scss'
import {Instancetype, Person} from '../common/person/Person';

export const Users: React.FC = () => {
    const [persons, setPersons] = useState([
        {id: 1, order: 1, title: '111'},
        {id: 2, order: 2, title: '222'},
        {id: 3, order: 3, title: '333'},
        {id: 4, order: 4, title: '444'},
        {id: 5, order: 5, title: '555'},
    ])
    const [currentPerson, setCurrentPerson] = useState<Instancetype | null>(null)
    const sortOrdersHandle = (a: Instancetype, b: Instancetype) => a.order - b.order

    return (
        <div className={s.usersContainer}>
            <h2>Users</h2>
            <div className={s.personsBlock}>
                {persons
                    .sort(sortOrdersHandle)
                    .map(p => <Person key={p.id}
                                      title={p.title}
                                      instance={p}
                                      persons={persons}
                                      currentPerson={currentPerson}
                                      setCurrentPerson={setCurrentPerson}
                                      setPersons={setPersons}/>)}
            </div>
        </div>
    );
}