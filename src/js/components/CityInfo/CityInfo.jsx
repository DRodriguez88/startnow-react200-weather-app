import React from 'react';

export default class CityInfo extends React.Component {
    constructor(props){
        super(props)
        this.getCoords = this.getCoords.bind(this)
        this.getTemp = this.getTemp.bind(this)
        this.getMinTemp = this.getMinTemp.bind(this)
        this.getMaxTemp = this.getMaxTemp.bind(this)
        this.getPress = this.getPress.bind(this)
        this.getHumid = this.getHumid.bind(this)
        this.getWind = this.getWind.bind(this)
    }

    getCoords(){
        if(this.props.cityData.single.coord != undefined){
            return this.props.cityData.single.coord.lat + ', ' + this.props.cityData.single.coord.lon
        }
        else {return 'N/A'}
    }

    getTemp(){
        if(this.props.cityData.single.main != undefined) {
            return Math.round(this.props.cityData.single.main.temp*(9/5)-459.67) + 'F'
        }
        else {return 'N/A'}
    }

    getMinTemp(){
        if(this.props.cityData.single.main != undefined) {
            return Math.round(this.props.cityData.single.main.temp_min*(9/5)-459.67) + 'F'
        }
        else {return 'N/A'}
    }

    getMaxTemp(){
        if(this.props.cityData.single.main != undefined) {
            return Math.round(this.props.cityData.single.main.temp_max*(9/5)-459.67) + 'F'
        }
        else {return 'N/A'}
    }

    getPress(){
        if(this.props.cityData.single.main != undefined) {
            return this.props.cityData.single.main.pressure + 'mmHg'
        }
        else {return 'N/A'}
    }

    getHumid(){
        if(this.props.cityData.single.main != undefined) {
            return this.props.cityData.single.main.humidity + '%'
        }
        else {return 'N/A'}
    }

    getWind(){
        if(this.props.cityData.single.main != undefined) {
            return this.props.cityData.single.wind.speed + 'mph'
        }
        else {return 'N/A'}
    }

    render() {
        return(
            <div className='card border border-info col-5 ml-3 p-0'>
                <div className='card-header alert alert-info'>
                    City Information
                </div>
                <div className='card-body'>
                    <h3 className='text-center'><strong>{this.props.cityData.single.name || 'Search A City' }</strong></h3>
                    <p className='text-center'>{this.getCoords()}</p>
                    <hr className='border border-light 1px'/>
                    <div className='row col-12 mb-2'>
                        <div className='col-4 text-center'>
                            <p><strong>Temperature</strong></p>
                            <p className='text-center text-success'>{this.getTemp()}</p>
                        </div>
                        <div className='col-4 text-center'>
                            <strong>Pressure</strong>
                            <p className='text-center text-success'>{this.getPress()}</p>
                        </div>
                        <div className='col-4 text-center'>
                            <strong>Humidity</strong>
                            <p className='text-center text-success'>{this.getHumid()}</p>
                        </div>
                    </div>
                    <div className='row col-12'>
                        <div className='col-4 text-center'>
                            <strong>Lowest Temp</strong>
                            <p className='text-center text-success'>{this.getMinTemp()}</p>
                        </div>
                        <div className='col-4 text-center'>
                            <strong>Highest Temp</strong>
                            <p className='text-center text-success'>{this.getMaxTemp()}</p>
                        </div>
                        <div className='col-4 text-center'>
                            <strong>Wind Speed</strong>
                            <p className='text-center text-success'>{this.getWind()}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}