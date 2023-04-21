import nbalogo from '../../images/nbalogo-removebg-preview.png'
import { Container } from './styles'

const Search = () => {

  return (
    <Container>
      <h1>
        Escolha um time da NBA
      </h1>

      <span>Times, jogadore, tabelas, records, tudo sobre o mundo da NBA você encontra aqui!</span>

      <div className='content'>
        <img src={nbalogo} alt="logo da nba" />
        <input 
          type="search" 
          placeholder="Time da NBA"
        />
      </div>
    </Container>
  )
}

export default Search
