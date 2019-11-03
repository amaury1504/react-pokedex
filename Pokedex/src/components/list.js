import React from 'react';
import Item from './titre';

const List =({data}) =>{
    
    return(
    
    <ul>
       {data.map((pokemons, index)=>(
        <Item key={`pokemons`+ index}{...pokemons} />
        ))}:

    </ul>
    );
}

export default List