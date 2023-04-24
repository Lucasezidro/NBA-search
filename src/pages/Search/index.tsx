import { useEffect, useState } from 'react'
import { Container } from './styles'
import { TEAMS, ITeam } from '../../helpers/teams'
import InputSearch from '../../components/inputSearch'

const Search = () => {
  const [search, setSearch] = useState<string>('')
  const [teams, setTeams] = useState<ITeam[]>([])
  const [showTeamInfomation, setShowTeamInformation] = useState<boolean>(true) 

  useEffect(() => {
    setTeams(TEAMS)
  }, [])

  const filteredTeams = search.length > 0 ? teams.filter((team) => team.name
      .toLowerCase()
      .replace(/[aáàãäâ]/, 'a')
      .replace(/[eéèëê]/, 'e')
      .replace(/[iíìïî]/, 'i')
      .replace(/[oóòõöô]/, 'o')
      .replace(/[uúùüû]/, 'u')
      .includes(search))
    : []

  return (
    <Container>

      <h1>Escolha um time da NBA</h1>

      <span>
        Times, jogadore, tabelas, records, tudo sobre o mundo da NBA você
        encontra aqui!
      </span>

      <InputSearch 
        search={search}
        setSearch={setSearch}
      />
      
      {search.length > 0 ? (
        <div className='filtered-results'>
          {filteredTeams.slice(0, 1).map((team, i) => {
            return (
              <div key={i} className='results'>
                <h3>Pesquise por outros times</h3>
                <img src={team.logo} alt='nba-team-logo' className='logo' />

                <strong>{team.name}</strong>

                {showTeamInfomation && (
                  <button
                    type='button'
                    onClick={() => setShowTeamInformation(false)}
                  >
                    Conhecer mais sobre o time
                  </button>
                )}

                {!showTeamInfomation && (
                  <div className='team-data'>
                    <h4>Sobre o time</h4>
                      <strong>Quantidade de titulos da NBA ganhos</strong>
                      <span>{team.championship} titulo(s) conquistado(s)</span>


                      {team.champion_year?.length ? (
                        <>
                          <strong>Ano(s) em que o time foi campeão</strong>
                          <span>O {team.name} conquistou o titulo da NBA nos anos {team.champion_year}</span>
                        </>
                      ): (
                        <>
                          <strong>Ano(s) em que o time foi campeão</strong>
                          <span>Não houve titulos até o momento</span>
                        </>
                      )}

                      <strong>Quantidade de títulos de conferência ganhos</strong>
                      <span> O {team.name} possui {team.conference_championship} titulos</span>

                      <strong>Ano em que o time foi fundado</strong>
                      <span>O {team.name} foi fundado em {team.fundation_year}</span>

                      <button onClick={() => setShowTeamInformation(true)}>Reduzir</button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      ) : (
        <div className='filtered-results'>
          {teams.slice(0, 1).map((team, i) => {
            return (
              <div key={i} className='results'>
                <h3>Pesquise por outros times</h3>
                <img src={team.logo} alt='nba-team-logo' className='logo' />

                <strong>{team.name}</strong>
                {showTeamInfomation && (
                  <button
                    type='button'
                    onClick={() => setShowTeamInformation(false)}
                  >
                    Conhecer mais sobre o time
                  </button>
                )}

                {!showTeamInfomation && (
                  <div className='team-data'>
                    <h4>Sobre o time</h4>
                      <strong>Quantidade de titulos da NBA ganhos</strong>
                      <span>{team.championship} titulo(s) conquistado(s)</span>


                      {team.champion_year?.length ? (
                        <>
                          <strong>Ano(s) em que o time foi campeão</strong>
                          <span>O {team.name} conquistou o titulo da NBA nos anos {team.champion_year}</span>
                        </>
                      ): (
                        <strong>Não houve titulos até o momento</strong>
                      )}

                      <strong>Quantidade de títulos de conferência ganhos</strong>
                      <span> O {team.name} possui {team.conference_championship} titulos</span>

                      <strong>Ano em que o time foi fundado</strong>
                      <span>O {team.name} foi fundado em {team.fundation_year}</span>

                      <button onClick={() => setShowTeamInformation(true)}>Reduzir</button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </Container>
  )
}

export default Search
