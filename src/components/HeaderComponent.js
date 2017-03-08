import React from 'react';

let Header = (props) => {
    return (
        <div className="test-header">
            <h3>{props.title2}</h3>
            <h4>{props.description}</h4>
            <h6>Reference: <a href={props.referenceLink}> {props.referenceLink}</a></h6>
        </div>
    )
}

export default Header;
