import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 40px;
  }

  span {
    color: var(--light-900);
  }

  .content {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 80px;
    }

    input {
      width: 300px;
      padding: 12px;
      border-radius: 10px;
      border: 3px solid var(--blue);
      color: #fafafa;
      background: transparent;
      transition: all 0.6s;

      &:hover {
        background: var(--dark-700);
      }

      &:focus {
        border: 3px solid var(--red);
        background: var(--dark-700);
        color: #ffffff;
        outline: none;
      }
    }
  }
`