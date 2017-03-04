import React, { Component } from 'react';
import Card from './CelebrityCard';
import { convertCurrency, filterArr } from '../util'

const styles = {
    MainCard: {
        border: '1px',
        margin: '0 20%',
        backgroundColor: '#f5f5f5'
    },
    SelectBox: {
        width: '150px',
        margin: '20px'
    }
}

export default class MainCard  extends Component {
    constructor(props){
        super(props);

        this.uniqueCountryArr = ['Show All'];
        this.orderByArr = Object.keys(props.celebData[0]).filter(key => {
                return key === 'rank' || key === 'name' || key === 'age';
            });

        // filtered set of countries { unique entries }
        props.celebData.forEach((celebObj) => {

            if(this.uniqueCountryArr.indexOf(celebObj.country) === -1){
                this.uniqueCountryArr.push(celebObj.country);
            }

        });

        this.currency = ['US Dollar', 'Aus Dollar', 'Euro'];

        // early bind handlers for change events on the select boxes and input
        this.handleCountryChange = this.handleCountryChange.bind(this);

        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);

        this.handleSearch = this.handleSearch.bind(this);

        this.handleOrderBy = this.handleOrderBy.bind(this);

        // component state
        this.state = {
            currency: 'US Dollar',
            celebData: this.props.celebData,
            currentCountry: '',
            currentSearch: '',
            currentSort: ''
        }
    }

    handleOrderBy(e){
        // sort state celebrity data based on the key selected from order by select box
        let sortedArr = this.props.celebData.sort((obj1, obj2) => {

            let prop = e.target.value;

            if (obj1[prop] < obj2[prop]) {
                return -1;
            }
            if (obj1[prop]> obj2[prop]) {
                return 1;
            }
            return 0;
        });


        this.setState({
            currentSort: e.target.value,
            celebData: filterArr(sortedArr, this.state.currentCountry, this.state.currentSearch)
        })
    }

    handleSearch(e){
        this.setState({
            currentSearch: e.target.value,
            celebData: filterArr(this.props.celebData, this.state.currentCountry, e.target.value)
        })
    }

    handleCurrencyChange(e){
        this.props.celebData.forEach((celebObj) => {
            celebObj.netWorth = convertCurrency(celebObj.netWorth, this.props.currencyRates[this.state.currency], this.props.currencyRates[e.target.value])
        });

        this.setState({
            currency: e.target.value
        })
    }

    handleCountryChange(e) {
        this.setState({
           currentCountry: e.target.value,
           celebData: filterArr(this.props.celebData, e.target.value, this.state.currentSearch)
        });

    }

    // renderer for different select box options
    renderCountries() {
        return (
            this.uniqueCountryArr.map((country, index) => {
                return <option value={country} key={index}>{country}</option>
            })
        )
    }

    renderCurrencyConver() {
        return (
            this.currency.map((currency, index) => {
                return <option value={currency} key={index}>{currency}</option>
            })
        )
    }

    renderOrderBy() {
        return (
            this.orderByArr.map((orderByKey, index) => {
                return <option value={orderByKey} key={index}>{orderByKey}</option>
            })
        )
    }

    renderCelebList() {
        if (this.state.celebData.length) {
            return (
                this.state.celebData.map((celebObj, index) => {
                    return <Card celebrity={celebObj} key={index} currency={this.state.currency}></Card>

                })
            )
        } else {
            return (
                <Card/>
            )
        }

    }

    render() {
        return (
            <div className="test-main-card" style={styles.MainCard}>
                <div className="test-select-first-row">
                    <span>
                        <b>Countries:</b>
                        <select label={'Birthplace:'} style={styles.SelectBox} onChange={this.handleCountryChange}>
                            {this.renderCountries()}
                        </select>
                    </span>

                    <span>
                        <b>Currency:</b>
                        <select label={'Currency Converter:'} style={styles.SelectBox} onChange={this.handleCurrencyChange}>
                            {this.renderCurrencyConver()}
                        </select>
                    </span>
                </div>

                <div className="test-select-second-row">
                    <span>
                        <b>Search:</b>
                        <input type="text" style={styles.SelectBox} onChange={this.handleSearch}/>
                    </span>


                    <span>
                        <b>Order By:</b>
                        <select label={'Currency Converter:'} style={styles.SelectBox} onChange={this.handleOrderBy}>
                            {this.renderOrderBy()}
                        </select>
                    </span>
                </div>
                <div className="test-celeb-list">
                    {this.renderCelebList()}
                </div>
            </div>
        )
    }
}