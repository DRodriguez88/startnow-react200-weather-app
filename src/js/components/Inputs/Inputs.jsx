import React from 'react';

import { getWeather } from './inputActions';

export default class Inputs extends React.Component {
    constructor(props){
        super(props)
        this.handleClickGo = this.handleClickGo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickHot = this.handleClickHot.bind(this);
        this.state = {
            searchThis: ''
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        },()=>console.log(this.state))
    }

    handleClickGo() {
        const { dispatch, city } = this.props;
        dispatch(getWeather(this.state.searchThis))
    }

    handleClickHot(e) {
        const { dispatch } = this.props;
        dispatch(getWeather(e.target.value))
    }

    render() {

        return(
            <div className='mb-3'>
                <div className='button-group' role='group'>
                    <button value='San Diego' type='button' className='btn btn-primary' onClick={this.handleClickHot}>San Diego</button>
                    <button value='New York' type='button' className='btn btn-primary' onClick={this.handleClickHot}>New York</button>
                    <button value='district of columbia' type='button' className='btn btn-primary' onClick={this.handleClickHot}>Washington D.C.</button>
                    <button value='London' type='button' className='btn btn-primary' onClick={this.handleClickHot}>London</button>
                    <button value='Tokyo' type='button' className='btn btn-primary' onClick={this.handleClickHot}>Tokyo</button>
                </div>
                <div className='input-group'>
                    <input type='text'className='form-control' onChange={this.handleChange} name='searchThis'/>
                    <div className='input-group-append'>
                        <button type='button' className='btn btn-outline-secondary' onClick={this.handleClickGo}>Go!</button>
                    </div>
                </div>
            </div>
        )
    }
}