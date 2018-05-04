import React from 'react';
import HistoryItem from './HistoryItem';
import { getWeather } from './historyActions';


export default class SearchHistory extends React.Component {
    constructor(props) {
        super(props)
        this.clickHandle = this.clickHandle.bind(this)
        this.findRepeats = this.findRepeats.bind(this)
    }

    clickHandle(e, city) {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(getWeather(city))
    }

    findRepeats(arr) {
        var temp = arr.slice().sort(function(a,b){return a-b});
        for(let i=0; i<temp.length-1; i++) {
            if(temp[i]==temp[i+1]){temp.splice(i,1)}
        }
        return temp
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