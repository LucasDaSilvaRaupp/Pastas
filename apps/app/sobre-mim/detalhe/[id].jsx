import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import { Link } from "expo-router";

const ola = () => {

    return(
        <View style={styles.container}>
            <Image style={styles.imgContainer} source={require('../../image/nefarious.jpg')}/>
            <Text style={styles.texto1}>Nefarious</Text>
            <Text style={styles.texto2}>14 de abril de 2023</Text>
            <Text style={styles.texto2}>Um assassino em série condenado diz a um psiquiatra 
            que ele é um demônio e que pode possuir seu corpo. No final da avaliação, ele t
            ambém avisa ao médico que em breve vai cometer três assassinatos.
            </Text>
    <Link href="/sobre-mim" asChild>
      <Pressable>
        <Text style={styles.butt}>Volte à página inicial!</Text>
      </Pressable>
      </Link>
        </View>

    )
}
export default ola

const styles = StyleSheet.create({
    container: {
        display: 'flex',
          },
          imgContainer: {
              display: 'flex',
              justifyContent: 'center',
              alignSelf: 'center',
              width: 100,
              height: 100,
              borderRadius: '10%',
              marginBottom: 10,
              marginTop: 20,
          },
          texto1: {
              fontSize: 20,
              fontWeight: 'bold',
              color: '#4a235a',
              display: 'flex',
              justifyContent: 'center',
              alignSelf: 'center',
          },
          texto2: {
              fontSize: 12,
              fontWeight: 'bold',
              color: '#5b2c6f',
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              marginLeft:20,
              marginRight: 20
          },
          butt: {
            marginTop: 10,
            marginBottom: 10,
            fontSize: 15,
            color: '#512e5f',
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            border: '3px solid #512e5f',
            color: 'white',
            backgroundColor: '#512e5f',
            }
    })

