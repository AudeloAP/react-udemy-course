import type { CSSProperties } from "react"

export const MyAwesomeComponent = () => {
  const firstName: string = 'Angel'
  const lastName: string = 'Audelo'
  
  const favoriteGames : string[] = ['PUBG', 'LOL']
  
  const myStyle: CSSProperties = {
    backgroundColor: '#cacaca',
    borderRadius: 10,
    padding: 10,
    marginTop: 20
  }

  const address = {
    zipCode: 12345,
    country: 'Mexico'
  }

  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames}</p>
      <p 
        style={myStyle}>
          {JSON.stringify(address)}
      </p>
    </>
  )
}
