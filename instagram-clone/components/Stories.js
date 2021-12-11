import React, { useState, useEffect} from 'react'
import faker from "faker"
import Story from './Story'

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div>
      {suggestions.map((profile) => (
        <Story key={profile.id} img={profile.avatar} username={profile.username}/>
      ))}
    </div>
  )
}

export default Stories
