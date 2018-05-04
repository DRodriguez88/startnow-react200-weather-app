import React from 'react';
import { getWeather } from './historyActions';

export default (props) => (
    <div className='ml-4'>
        <hr />
        <a value={props.city} onClick={props.clickHandle}>
            {props.city}
        </a>
    </div>
);