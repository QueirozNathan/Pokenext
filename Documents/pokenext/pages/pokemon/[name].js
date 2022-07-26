import React from 'react'
import PokemonCss from '../../styles/PokemonPage.module.css'


export default function Pokemon({ pokemon }) {
    return (
        <div className={`${PokemonCss.card} ${pokemon.types[0].type.name}`}>
        <div className={PokemonCss.nameTypes}>
          <h3>{pokemon.name}</h3>
          <div className={PokemonCss.tipos}>
            {pokemon.types.map((type, index) =>  {
              return (
                <p className={PokemonCss.type}>{type.type.name}</p>
              )
            })}
          </div>
        </div>
        <img src={pokemon.image}
         height="100"
          width="100"
          className={PokemonCss.image}
          />
        </div>
    )
}

export async function getServerSideProps(context) {
    
    const {name} = context.query;
    
    const rest = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await rest.json();
    
    return {
        props: {
                pokemon
        },
    }
}