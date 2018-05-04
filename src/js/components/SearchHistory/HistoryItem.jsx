import React from 'react';
import { getWeather } from './historyActions';

export default (props) => (
    <div className='ml-4'>
        <hr />
        <a href="#" onClick={(e) => props.clickHandle(e, props.city)}>
            {props.city}
        </a>
    </div>
);