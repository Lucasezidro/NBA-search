import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  left: 30px;
  top: 20px;

  ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 20px;

    li {
      list-style: none;
    }

    a {
      color: var(--blue-light);
      text-decoration: none;
      font-weight: 600;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`
