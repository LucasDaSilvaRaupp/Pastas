import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, Dimensions, ImageBackground, ActivityIndicator, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";

const { width } = Dimensions.get('window');

const typeImages = {
  fire: 'https://example.com/fire.png',
  water: 'https://example.com/water.png',
  grass: 'https://example.com/grass.png',
  electric: 'https://example.com/electric.png',
  ice: 'https://example.com/ice.png',
  fighting: 'https://example.com/fighting.png',
  poison: 'https://example.com/poison.png',
  ground: 'https://example.com/ground.png',
  flying: 'https://example.com/flying.png',
  psychic: 'https://example.com/psychic.png',
  bug: 'https://example.com/bug.png',
  rock: 'https://example.com/rock.png',
  ghost: 'https://example.com/ghost.png',
  dragon: 'https://example.com/dragon.png',
  dark: 'https://example.com/dark.png',
  steel: 'https://example.com/steel.png',
  fairy: 'https://example.com/fairy.png',
};

const Pokemon = () => {
  const [pokemon, setPokemon] = useState('');
  const [type, setType] = useState('');
  const [pokemonList, setPokemonList] = useState([]);
  const [types, setTypes] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [typeImage, setTypeImage] = useState(null);
  const [pokemonImage, setPokemonImage] = useState(null);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/type');
        const data = await response.json();
        setTypes(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchPokemonList = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        setPokemonList(data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchTypes();
    fetchPokemonList();
  }, []);

  useEffect(() => {
    if (type) {
      const fetchPokemonByType = async () => {
        setLoading(true);
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
          const data = await response.json();
          const filteredPokemons = data.pokemon.map(p => p.pokemon);
          setFilteredPokemonList(filteredPokemons);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };

      fetchPokemonByType();
      setTypeImage(typeImages[type] || null);
    } else {
      setFilteredPokemonList([]);
      setTypeImage(null);
    }
  }, [type]);

  useEffect(() => {
    if (pokemon) {
      const fetchPokemonDetails = async () => {
        setLoading(true);
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
          const data = await response.json();
          setPokemonImage(data.sprites.front_default);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };

      fetchPokemonDetails();
    } else {
      setPokemonImage(null);
    }
  }, [pokemon]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' }}
        style={styles.backgroundImage}
        blurRadius={5}
      >
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.title}>Selecione um Tipo de Pokémon</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={type}
                onValueChange={(item) => setType(item)}
                style={styles.picker}
                dropdownIconColor='#fff'
              >
                <Picker.Item label="Selecione um Tipo" value="" />
                {types.map((item) => (
                  <Picker.Item key={item.name} label={item.name} value={item.name} />
                ))}
              </Picker>
            </View>

            {typeImage && <Image source={{ uri: typeImage }} style={styles.typeImage} />}

            <Text style={styles.title}>Selecione um Pokémon</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={pokemon}
                onValueChange={(item) => setPokemon(item)}
                style={styles.picker}
                dropdownIconColor='#fff'
              >
                <Picker.Item label="Selecione um Pokémon" value="" />
                {filteredPokemonList.map((item) => (
                  <Picker.Item key={item.name} label={item.name} value={item.name} />
                ))}
              </Picker>
            </View>

            {loading && <ActivityIndicator size="large" color="#ff6347" />}
            {pokemonImage && <Image source={{ uri: pokemonImage }} style={styles.pokemonImage} />}
            {pokemon && !loading && <Text style={styles.selectedText}>Você selecionou o {pokemon}</Text>}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f9fc',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  pickerContainer: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#ffffff',
    borderColor: '#ccc',
    color: '#333',
  },
  typeImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  pokemonImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  selectedText: {
    fontSize: 18,
    color: '#ff6347',
    fontWeight: '600',
  },
});

export default Pokemon;