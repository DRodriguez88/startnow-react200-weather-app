import React from 'react';
import HistoryItem from './HistoryItem';
import { getWeather } from './historyActions';


export default class SearchHistory extends React.Component {
    constructor(props) {
        super(props)
        this.clickHandle = this.clickHandle.bind(this)
    }
    clickHandle(e) {
        console.log(e.target.value);
        const { dispatch, city } = this.props;
        dispatch(getWeather(e.target.value))
    }

    render(){
        return(
            <div className='card border border-info col-5 ml-3 p-0 pb-4'>
                <div className='card-header alert alert-info'>
                    Search History
                </div>
                {
                    
                    this.props.cityData.history.length > 0 ? 
                    this.props.cityData.history.map((item, index) => 
                        <HistoryItem key={index} city={item} city={this.props.cityData.history[index]} clickHandle={this.clickHandle}/>
                    )
                    :
                    ''
                    
                }
            </div>
        )
    }
}