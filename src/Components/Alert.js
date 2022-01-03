import React from 'react'

export default function Alert(props) {
    const capitalizeFirstLetter = (word) => {
        let wordToLower = word.toLowerCase();
        return wordToLower[0].toUpperCase() + word.slice(1);
    }
    return (
        <div style={{ height: '50px' }}>
            <div className={`alert alert-${props.typeOfMsg} alert-dismissible fade show`} role="alert">
                <strong>{capitalizeFirstLetter(props.typeOfMsg)}:</strong> {props.msg}
            </div>
        </div>
    )
}
