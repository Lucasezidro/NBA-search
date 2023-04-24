import nbalogo from '../../images/nbalogo-removebg-preview.png'

interface ISearch {
  search: string 
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const InputSearch = ({ search, setSearch }: ISearch) => {
  return (
    <div className='content'>
      <img src={nbalogo} alt='logo da nba' />
      <input
        type='search'
        placeholder='Time da NBA'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default InputSearch
