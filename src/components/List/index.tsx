import React from 'react'
import { Droppable } from 'react-beautiful-dnd'

import { MdAdd } from 'react-icons/md'
import Card from '../Card'

import { Container } from './styles'

interface CardData {
  id: number
  content: string
  labels: string[]
  user?: string
}

interface ListData {
  id: number
  title: string
  creatable: boolean
  cards: CardData[]
  done?: boolean
}

interface Props {
  list: ListData
}

const List: React.FC<Props> = ({ list }) => {
  return (
    <Container done={!!list.done}>
      <header>
        <h2>{list.title}</h2>
        {list.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      <Droppable droppableId={String(list.id)}>
        {provided => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {list.cards.map((card, index) => {
              if (card && card.id) {
                console.log(index)
              }
              return <Card key={card.id} index={index} card={card} />
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </Container>
  )
}

export default List
