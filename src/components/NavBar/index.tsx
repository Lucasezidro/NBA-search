import { Container } from './styles'

const NavBar = () => {

  return (
    <Container>
      <ul>
        <li>
          <a href='/'>
            Página inicial
          </a>
        </li>
        <li>
          <a href='/teams'>
            Jogadores
          </a>
        </li>
        <li>
          <a href='/news'>
            Notícias
          </a>
        </li>
      </ul>
    </Container>
  )
}

export default NavBar
