import React from 'react';
import Inputs from './components/Inputs';
import CityInfo from './components/CityInfo';
import SearchHistory from './components/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron pb-4'>
          <h1 className='display-4 mb-4'>Origin Weather Application</h1>
          <p className='lead'>Always know if you'll need an umbrella!</p>
        </div>
        <Inputs />
        <div className='row'>
          <CityInfo />
          <SearchHistory />
        </div>
      </div>
    );
  }
}
