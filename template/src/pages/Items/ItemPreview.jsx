import React from 'react'
import { UnstyledLink } from '../../styles/link.styled'

export const ItemPreview = ({
  item, // name, desc, ...
  onHandleDelete
}) => (
  <div className="item-item">
    <p>{item.title}</p>
    <p>{item.desc}</p>
    <p>
      <UnstyledLink to={`/items/edit/${item.id}`}>
        <button>Edit</button>
      </UnstyledLink>
      <button onClick={e => {
        e.preventDefault()
        onHandleDelete(item.id)
      }}>Delete</button>
    </p>
  </div>
)
