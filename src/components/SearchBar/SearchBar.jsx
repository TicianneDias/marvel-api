import React, {useState} from 'react'
import api from '../../services/Api'
import Card from '../Characters/styles'

const SearchBar = () => {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    api
      .get('characters')
      .then(response => {
        setCharacters(response.data.data.results)
      }
        )
      .catch(err => console.log(err))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCharacters = characters.filter(characters => characters.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
    <form>
          <input type="text" placeholder='Buscar..' onChange={handleChange}/>
    </form>
    {filteredCharacters.filter(characters => {
      return (
        <Card
          key={characters.id}
        />

      )

    })}
    </>
  )
}

export default SearchBar