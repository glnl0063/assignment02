// import React from react
import React, {Component} from 'react';

// import the stylesheet, text, view from react native
import { StyleSheet, Text, View, Image} from 'react-native';

// import Pokemon data from the custom JSON I made
import PokemonData from "./starter-pokemon.json"; 
import { getCurrentFrame } from 'expo/build/AR';

// create a blueprint of each pokemon card
export default class PokemonCard extends Component {

  // function to retrieve pokemon sprite from image folder
  getPokemonImage(pokemonName) {

    switch(pokemonName) {
        case "Bulbasaur": 
          return require('./assets/bulbasaur.png')
        case "Charmander": 
          return require('./assets/charmander.png')
        case "Squirtle": 
          return require('./assets/squirtle.png')
        case "Pikachu": 
          return require('./assets/pikachu.png')
          case "Chikorita": 
          return require('./assets/chikorita.png')
        case "Cyndaquil": 
          return require('./assets/cyndaquil.png')
        case "Totodile": 
          return require('./assets/totodile.png')                               
    }

  }

  // render the following 
  render() {

    // return the following  
    return (
      
      // create components for the pokemon's name, image, ID and description with their styling
      <View style={ (PokemonCardStyle.pokemonCard) }>

        <Image 
          source={this.getPokemonImage(this.props.pokemonName)}
          style={PokemonCardStyle.sprite} 
        />

        <View style={PokemonCardStyle.cardDetails}>
          
          <View style={PokemonCardStyle.topCard}>
            <Text style={PokemonCardStyle.name}>
              {this.props.pokemonName}
            </Text>
            <Text style={PokemonCardStyle.id}>
              {this.props.pokemonID}
            </Text>           
          </View>

          <Text style={PokemonCardStyle.type}>
          {this.props.pokemonType}
          </Text>

          <Text style={PokemonCardStyle.description}>
          {this.props.pokemonDescription}
          </Text>

        </View>

      </View>

    ); 

  }

}

// stylesheet for Pokemon Cards
const PokemonCardStyle = StyleSheet.create({

  // container containing pokemon and its details 
  pokemonCard: {
    borderRadius: 5,
    flexDirection: "row", 
    flexWrap: "wrap",
    elevation: 3,      
    marginBottom: 20,  
    paddingBottom: 5,
    paddingRight: 10,
    paddingTop: 5, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },     
    shadowOpacity: 0.25,   
    shadowRadius: 3.84,       
    width: "100%",
  },

  // Pokemon sprite
  sprite: {
    height: 150,
    resizeMode: "contain",      
    width: "35%"
  },

  // card details
  cardDetails: {
    justifyContent: "center",
    resizeMode: "contain",      
    width: "65%"
  },

    // top card (contains name & id)
    topCard: {
      alignItems: "flex-end",
      flexDirection: "row"
    },

      // Pokemon name
      name: {
        color: "#202020",
        fontSize: 30, 
        fontWeight: "600"
      },  

      // Pokemon ID
      id: {
        color: "#606060",
        fontSize: 20, 
        fontWeight: "500",
        paddingLeft: 10,
        paddingBottom: 3
      },  
  
  // Pokemon type
  type: {
    backgroundColor: "#A9A9A9", 
    borderRadius:  5,
    color: "#FFF",
    fontSize: 15, 
    textAlign: "center",    
    width: 100
  },  

  // Pokemon description
  description: {
    color: "#202020"
  },    

});
