import React from 'react'

export default function MessageBox(props) {
    return (
        <div className="error_div">
          <i className="fas fa-exclamation-circle"></i> {props.error}
        </div>
    )
}
