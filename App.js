// import React from react
import React, {Component} from 'react';

// import the stylesheet, text, view from react native
import { Platform, NativeModules, Animated, StyleSheet, Text, View, Image, ScrollView} from 'react-native';


const { UIManager } = NativeModules;
if (Platform.OS === 'android') {
 if (UIManager.setLayoutAnimationEnabledExperimental) {
   UIManager.setLayoutAnimationEnabledExperimental(true);
 }
}

// import Pokemon data from the custom JSON I made
import PokemonData from "./starter-pokemon.json"; 
import { getCurrentFrame } from 'expo/build/AR';
import PokemonCard from './PokemonCard.js';

// create a default class with the Component subclass
export default class App extends Component {

  // initialize an empty array object 
  state = { pokemons: [] }

  // after component has been rendered, change the state of pokemons variable to JSON
  componentDidMount() {
    this.setState({pokemons: PokemonData})
  }

  // render the following
  render() {

    // return the following
    return (

      // view component      
      <ScrollView contentContainerStyle={ViewContainerStyle.container}>

        <View style={ViewContainerStyle.titleContainer}>
          <Text style={ViewContainerStyle.title}>Starter Pokemon</Text>
        </View>

        <Animated.View style={ViewContainerStyle.pokemonContainer}>
        {
          this.state.pokemons.map(item =>
            <PokemonCard 
              pokemonName={item.name}
              pokemonType={item.type}
              pokemonDescription={item.description}
              pokemonID={item.id}
            />
          )
        }          
        </Animated.View>

        <View style={ViewContainerStyle.footerContainer}>
          <Text style={ViewContainerStyle.footer}>© Images & Content By The Pokemon Company. Used for Education Purposes.</Text>
        </View>        

      </ScrollView> 
    );    

  }

}

// stylesheet for other components besides the Pokemon
const ViewContainerStyle = StyleSheet.create({

  // whole container
  container: {
    alignItems: "center", 
    justifyContent: "center",
    width: "100%", 
  },  

  // container for title
  titleContainer: {
    alignItems: "center", 
    backgroundColor: "#616161",
    justifyContent: "center",
    marginBottom: 20, 
    padding: 20,  
    width: "100%",     
  }, 
  
  // title text
  title: {
    color: "#FFF",
    fontSize: 30, 
    fontWeight: "600",            
  },     

  // container for group of pokemon cards
  pokemonContainer: {
    padding: 10,    
    width: "100%"
  },   

  // container for footer
  footerContainer: {
    alignItems: "center", 
    backgroundColor: "#979797",
    justifyContent: "center",
    marginTop: 20, 
    padding: 20,  
    width: "100%",     
  }, 
  
  // footer text
  footer: {
    color: "#FFF",
    fontSize: 10, 
    fontWeight: "600",
    textTransform: "uppercase",     
  },     

});