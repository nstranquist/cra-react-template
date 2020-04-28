import React from 'react'

export const ItemPreview = ({
  item, // name, desc, ...
  onHandleEdit,
  onHandleDelete
}) => (
  <div className="item-item">
    <p>{item.title}</p>
    <p>{item.desc}</p>
    <p>
      <button onClick={e => {
        e.preventDefault()
        onHandleEdit(item)
      }}>Edit</button>
      <button onClick={e => {
        e.preventDefault()
        onHandleDelete(item.id)
      }}>Delete</button>
    </p>
  </div>
)
