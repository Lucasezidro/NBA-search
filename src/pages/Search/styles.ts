import styled from 'styled-components'

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

  .filtered-results {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
    margin-top: 24px;

    .results {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h3 {
        margin-left: 75px;
        font-size: 23px;
      }

      .logo {
        max-width: 150px;
        height: 145px;
        margin-left: 60px;
        margin-bottom: 30px;
      }

      strong {
        margin-left: 70px;
        color: var(--light-900);
      }

      button {
        width: 300px;
        padding: 12px;
        margin: 30px 0 0 70px;
        font-weight: 600;
        font-size: 15px;
        background-color: var(--blue-light);
        border: none;
        border-radius: 8px;
        color: var(--dark-900);
        cursor: pointer;
        transition: all 0.6s;

        &:hover {
          filter: brightness(0.7);
        }
      }
    }

    .team-data {
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 50px;

      h4 {
        margin-left: 70px;
      }

      strong {
        color: var(--blue-light);
        margin-bottom: 20px;
        margin-top: 20px;
      }

      span {
        margin-left: 70px;
        color: var(--light-100);
      }
    }
  }
`