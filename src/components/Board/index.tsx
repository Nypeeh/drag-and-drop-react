import React from 'react'
import List from '../List'

import { Container } from './styles'

interface CardData {
  id: number
  content: string
  labels: string[]
  user?: string
}

interface ListProps {
  id: number
  title: string
  creatable: boolean
  cards: CardData[]
  done?: boolean
}

interface BoardProps {
  lists: ListProps[]
}

const Board: React.FC<BoardProps> = ({ lists }) => {
  return (
    <Container>
      {lists.map((list, index) => (
        <List key={index} list={list} />
      ))}
    </Container>
  )
}

export default Board
