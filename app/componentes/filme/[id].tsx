import {View, StyleSheet, FlatList, Text, Image} from 'react-native';
import {useLocalSearchParams} from 'expo-router'
import DadosFilmes from '../DadosFilmes';

 





export default function Filme() {

  const {id}=useLocalSearchParams();
  console.log('ID recebido',id);


  const categorias= DadosFilmes();
  const filmeEncontrado = categorias.flatMap((categoria)=> categoria.filmes)
  .find((f)=>f.id === id);

  console.log(filmeEncontrado)

  return (
    <View style={styles.conteiner}>
        <Image 
          source={{uri: filmeEncontrado?.image}}
          style={styles.imagem}
          />

          <Text style={{color: "white", fontSize: 20, margin: 10}}>{filmeEncontrado.titulo}</Text>

           <Text style={{color: "white", fontSize: 20, margin: 10}}>
                Operação Big Hero conta a história de Hiro, um garoto muito inteligente que gosta de robótica e que, após perder seu irmão Tadashi, encontra conforto em Baymax, um robô criado para ajudar as pessoas. Junto com seus amigos, Hiro descobre um vilão perigoso e usa seus conhecimentos para enfrentá-lo. O filme mostra a importância da amizade, da coragem e de superar momentos difíceis.
           </Text>
    </View>
    );
}


const styles = StyleSheet.create({
    conteiner:{
      flex: 1,
      backgroundColor: "#559680",
    },  
    imagem: {
      width: 150,
      height: 200,
      margin: 10
    }
})
