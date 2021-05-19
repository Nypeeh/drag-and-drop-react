import React, { HTMLAttributes } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { Container, Label } from './styles'

interface CardData {
  id: number
  content: string
  labels: string[]
  user?: string
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  card: CardData
  index: number
}
const Card: React.FC<Props> = ({ card, index }) => {
  return (
    <>
      {card && card.id && (
        <Draggable key={card.id} draggableId={String(card.id)} index={index}>
          {provided => (
            <Container
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <header>
                {card.labels.map(label => (
                  <Label key={label} color={label} />
                ))}
              </header>
              <p>{card.content}</p>
              {card.user && <img src={card.user} alt="Image" />}
            </Container>
          )}
        </Draggable>
      )}
    </>
  )
}

export default Card
