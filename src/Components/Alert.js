import React from 'react'

export default function Alert(props) {

    const capitalFirst = (word) => {
        const lower = word.toLowerCase ();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show alert-primary`} role="alert">
         <strong>{capitalFirst(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )
}
