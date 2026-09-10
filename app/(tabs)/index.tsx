import {View, StyleSheet, FlatList, Text, Image} from 'react-native';
import { Link } from 'expo-router';
import Filme from '../componentes/filme/[id]';
import DadosFilmes from '../componentes/DadosFilmes';
import renderCategoria  from '../componentes/CardeCategoria';


const categorias=DadosFilmes();

export default function App() {
    return (

      <View style={styles.container}> 
          <FlatList
            data={categorias}
            keyExtractor={(item) => item.id}
            renderItem ={renderCategoria}
          />
        </View>
    );
}

const styles = StyleSheet.create({

  container:{
    flex: 1
  },
});