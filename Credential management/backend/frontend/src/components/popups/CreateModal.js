import React from 'react';

let modalStyle = {
  border:'2px solid red',
  position:'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor:'#fff',
  padding:'50px',
  zIndex:'1',
  width:'300px',
  textAlign:'center'
}

let overlayStyle = {
  position: 'fixed',
  left: 0,
  right:0,
  bottom:0,
  top: 0,
  backgroundColor: 'rgba(0, 0 , 0, .4)',
  zIndex: '1'
}

export default function CreateModal({open, children, onClose}){
  if(!open) return null
    return(
      <>
        <div style={overlayStyle}></div>
        <div style={modalStyle}>
          <button onClick={onClose} >Close</button>
          {children}
        </div>
      </>
    )
}