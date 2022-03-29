import React, {useCallback, useEffect, useState} from 'react'

import { Container, Card ,CardList, ButtonMore } from './styles'
import {AiOutlineArrowDown} from 'react-icons/ai'
import axios from 'axios'

const publicKey = '1d46dfaa992a619f10e25a8caca9d40e'
const chavemd5= 'ac899aa2766832e73682b466ec58eb8d'
const ts = '1648140147'

const hash = chavemd5

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: {
    "apikey": publicKey,
    "ts": ts,
    "hash": hash
  }
})
const Characters = () => {
  const [characters, setCharacters] = useState([])
  
  useEffect(() => {
    api
      .get('characters')
      .then(response => {
        setCharacters(response.data.data.results)
      }
        )
      .catch(err => console.log(err))
  }, [])

  const handleMore = useCallback(async() => {
    try {
      const offset = characters.length
      const response = await api.get('characters', {
        params: {
          offset: offset,
        },
      })

      setCharacters([...characters ,...response.data.data.results])

    } catch (err){
      console.log(err)
    }
  },[characters])

  
  return (
    <Container>
      <CardList>
        {characters.map(characters => {
          
          return(
            <Card key={characters.id}>
              <div id="img"><img src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`} alt={`Foto do ${characters.name}`} /></div>
              <h2>{characters.name}</h2>
              <p>{characters.description}</p>
            </Card>
        )})}
      </CardList>
      <ButtonMore onClick={handleMore}>
        <AiOutlineArrowDown className='icon'/>More Characters<AiOutlineArrowDown className='icon'/>
      </ButtonMore>
    </Container>
  )
}

export default Characters