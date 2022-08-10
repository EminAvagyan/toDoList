import * as styled from "./styled"
import React, {useState} from "react"

export const List = (props) => {
  const [listItem, setListItem] = useState([])

  const addListItem = (e) => {
      if (e.target.value.length > 0) {
        setListItem([...listItem, e.target.value])
        e.target.value = ""
      }
  }

  const editListItem = (index, e) => {
    listItem[index] = e.target.value
    if(e.target.value.length === 0){
        listItem.splice(index, 1)
    }
    setListItem([...listItem])
  }

  const blurAction = (e) => {
    if(e.key === "Enter"){
      e.target.blur()
  }
  }

  return (
      <styled.List>
        <styled.Header>{props.title}</styled.Header>
        <ol>
        
          {listItem.map((listItem, number) => {
            return (
                <li key = {number}>
                <styled.ListItemInput
                  type="text"
                  onChange={(e) => {
                    editListItem(number, e)
                  }}
                  onKeyDown = {(e) =>blurAction(e)}
                  value={listItem}
                  autoFocus
                ></styled.ListItemInput>
                </li>
            )
          })}
          <li>
            <styled.InputField onChange={addListItem} ></styled.InputField>
          </li>
        </ol>
      </styled.List>
  )
}
