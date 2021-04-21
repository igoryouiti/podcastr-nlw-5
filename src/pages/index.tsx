// SPA -> single page application - Utiliza useEffect
/* import { useEffect } from "react"
useEffect(() => {
  fetch('http://localhost:3333/episodes')
    .then(response => response.json())
    .then(data => console.log(data))
}, [])
*/

// SSR -> server side rendering
/* 
export default function Home(props) {
  console.log(props.episodes)
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data
    }
  }
}
*/
// SSG -> static side generation só funciona no Next em produção

export default function Home(props) {

  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data
    },
    revalidate: 60 * 60 * 8 // 60 sec * 60 min * 8h = 28.800 sec (8h)
  }
}