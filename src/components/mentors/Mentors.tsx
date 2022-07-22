import React from 'react';
import s from './Mentors.module.scss'
import {Person} from '../common/person/Person';


export const Mentors: React.FC = () => {
    return (
        <div className={s.mentorsContainer}>
            <h2>Mentors</h2>
            <div className={s.mentorsBlock}>
            </div>
        </div>
    );
}