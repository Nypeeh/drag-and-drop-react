import styled from 'styled-components'

interface ContainerProps {
  done: boolean
}

export const Container = styled.div<ContainerProps>`
  padding: 0 1rem;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${({ done }) => (done ? 0.6 : 1)};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 1rem;
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 2rem;
  }
`
