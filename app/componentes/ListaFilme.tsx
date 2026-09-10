import {View, StyleSheet, FlatList, Text, Image} from 'react-native';
import { Link } from 'expo-router';
import DadosFilmes from './DadosFilmes';
import Filme from '../filme';

const categorias=DadosFilmes();


export default function renderfilme({item}:{item:any}){
    return(
      <View>
        <Link href="/filme">
        <Image
          source={{uri:item.image}}
          style={[styles.imagem]}
        />
        <Text style={styles.nomeFilme}>{item.titulo}</Text>
        </Link>
      </View>
    );
  }


  const styles = StyleSheet.create({
    nomeFilme:{
      backgroundColor: "#559680",
    },
    imagem: {
      width: 150,
      height: 200,
      margin: 10
    },
  });