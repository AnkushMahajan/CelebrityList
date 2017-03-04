import React from 'react';
import { Card, CardTitle, CardText} from 'react-mdl';

let CelebrityCard = (props) => {
    let currency = props.currency;
    if (props.currency === 'Euro') {
        currency = '\u20AC';
    } else if (props.currency === 'Aus Dollar') {
        currency = '$AUD'
    } else {
        currency = '$USD'
    }

    if(props.celebrity){
        return (
            <Card className="test-card" shadow={0} style={{width: '320px', height: '250px', margin: 'auto', padding: '10px'}}>
                <CardTitle style={{background: '#4682b4', color: '#fff'}}>
                    <b style={{margin: '0 40%'}}>No: {props.celebrity.rank}</b>
                </CardTitle>
                <CardText className="test-card-data">
                    <p>Name: {props.celebrity.name}</p>
                    <p>Net Worth: {currency + ' ' +props.celebrity.netWorth}</p>
                    <p>Age: {props.celebrity.age}</p>
                    <p>Country of birth: {props.celebrity.country}</p>
                </CardText>
            </Card>
        )
    } else {
        return (
            <Card className="test-card-empty" shadow={0} style={{width: '320px', height: '50px', margin: 'auto', padding: '10px'}}>
                <CardTitle style={{background: '#4682b4', color: '#fff'}}>
                    <b style={{margin: '0 40%'}}>No results found</b>
                </CardTitle>
            </Card>
        )
    }

}

export default CelebrityCard;