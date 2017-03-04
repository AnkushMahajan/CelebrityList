import React, { Component } from 'react';
import MainCard from './components/MainCard';
import CelebrityData from './CelebrityData';
import Header from './components/HeaderComponent'

class App extends Component {
  render() {
    return (
      <div className="App" style={{textAlign: 'center'}}>
        <Header title1={CelebrityData.pageTitleH1}
                title2={CelebrityData.pageTitleH2}
                description={CelebrityData.description}
                referenceLink={CelebrityData.referenceLink}
        />
        <MainCard celebData={CelebrityData.celebrityList}
                  currencyRates={
                  {
                      'US Dollar': CelebrityData.usDollarValue,
                      'Aus Dollar': CelebrityData.australianDollarValue,
                      'Euro': CelebrityData.euroValue
                  }}
        />
      </div>
    );
  }
}

export default App;
