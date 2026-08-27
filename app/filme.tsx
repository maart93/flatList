import {View, StyleSheet, FlatList, Text, Image} from 'react-native';



export default function Filme() {
  return (
    <View style={styles.conteiner}>
        <Image 
          source={{uri: "https://static.wikia.nocookie.net/disney/images/8/89/Big_Hero_6_film_poster.jpg/revision/latest?cb=20160505193934"}}
          style={styles.imagem}
          />

          <Text style={{color: "white", fontSize: 20, margin: 10}}>Filmes</Text>

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