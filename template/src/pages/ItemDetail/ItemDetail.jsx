import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const ItemDetail = ({
  match
}) => {
  const [item, setItem] = useState(undefined)

  useEffect(() => {
    let itemId = match.params.itemId; // NOTE: change to specified param from the route (i.e. "/tools/:toolId" would be "match.params.toolId")
    console.log('item id from url:', itemId)
    // find item by id or make an api call for it, then set the item

    let fakeItem = { name: "FakeItem", desc: "Fake item description here" }

    setItem(fakeItem)
  }, [match.params])


  if(!item)
    return (
      <div className="page-loading">
        <div className="page-loading-inner">
          {/* <p className="loading-text">loading...</p> */}
        </div>
      </div>
    )
  return (
    <StyledItemDetail className="item-detail-page">
      <div className="page-container">
        <header className="page-header">
          <h3>{item.name}</h3>
        </header>
        <section className="section-container">
          <p>{item.desc}</p>
        </section>
      </div>
    </StyledItemDetail>
  )
}

const StyledItemDetail = styled.div`

`
