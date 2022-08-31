import React from 'react'

const Alert = (props) => {

    let capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

    return (
        props.alert && <div className={`alert alert-${props.alert.type} w-50 my-2 m-auto`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}

export default Alert
