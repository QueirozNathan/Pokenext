import HomeCss from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({pokemonList}) {
  console.log("pokemonList", pokemonList)
  return (

<>
<ul className={HomeCss.columns}>


{pokemonList.map((pokemon, index) => {
  return(
    <li>
      <Link href={{
        pathname: '/pokemon/[name]',
        query: {name: pokemon.name}
      }}>
        
      <a>
      <div className={`${HomeCss.card} ${pokemon.types[0].type.name}`}>
      <div className={HomeCss.nameTypes}>
        <h3>{pokemon.name}</h3>
        <div className={HomeCss.tipos}>
          {pokemon.types.map((type, index) =>  {
            return (
              <p className={HomeCss.type}>{type.type.name}</p>
            )
          })}
        </div>
      </div>
      <img src={pokemon.image}
       height="100"
        width="100"
        className={HomeCss.image}
        />
      </div>
      </a>
      </Link>
    </li>
  )
})} 

</ul>
</>

  )
}

export async function getServerSideProps() {

  const traerPokemon = (numero) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
    .then(response => response.json())
    .then(data => data)
  }
  let arrayPokemon = []
  for (let index = 1; index <= 50; index++) {
    let  data = await traerPokemon(index)
    arrayPokemon.push(data)
  }

  let pokemonList = arrayPokemon.map(pokemon => {
    return ({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types
    })
  })

  return {
    props: {
      pokemonList
    },
  }
}