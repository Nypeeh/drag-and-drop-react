import React, { useCallback, useState } from 'react'
import GlobalStyle from './styles/Global'
import produce from 'immer'

import Board from './components/Board'
import Header from './components/Header'
import { DragDropContext } from 'react-beautiful-dnd'
import { loadLists } from './services/api'

const App: React.FC = () => {
  const [lists, setLists] = useState(loadLists())

  const handleDragEnd = useCallback(
    result => {
      if (!result.destination) return

      setLists(
        produce(lists, draft => {
          const fromList = Number(result.source.droppableId)
          const from = Number(result.source.index)
          const toList = Number(result.destination.droppableId)
          const to = Number(result.destination.index)

          const dragged = draft[fromList].cards[from]

          draft[fromList].cards.splice(from, 1)
          draft[toList].cards.splice(to, 0, dragged)
        })
      )
    },
    [lists]
  )

  return (
    <>
      <Header />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Board lists={lists} />
      </DragDropContext>
      <GlobalStyle />
    </>
  )
}

export default App
