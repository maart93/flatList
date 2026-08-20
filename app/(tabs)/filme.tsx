import {View, StyleSheet, FlatList, Text, Image} from 'react-native';



export default function Filme() {
  return (
    <View style={styles.conteiner}>
        <Image 
          source={{uri: "https://www.bing.com/images/search?view=detailV2&ccid=pQoxQ%2FNi&id=D76F3ED898CB43651FEC085E6E3A7E9EC6CCB58E&thid=OIP.pQoxQ_NiDu9AhRnnJGXYBwHaEK&mediaurl=https%3A%2F%2F4.bp.blogspot.com%2F-g5ng2bxGyBo%2FVS_Q3Ef5DQI%2FAAAAAAAAAM4%2F7F03DyCZNuE%2Fs1600%2FBig_Hero_12.png&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.a50a3143f3620eef408519e72465d807%3Frik%3DjrXMxp5%252bOm5eCA%26pid%3DImgRaw%26r%3D0&exph=719&expw=1279&q=Opera%c3%a7%c3%a3o+Big+Hero&form=IRPRST&ck=B1259D754279956CBAEBD607E8891B90&selectedindex=2&itb=0&ajaxhist=0&ajaxserp=0&vt=0&sim=11&mid=A33EF9C72C9E2447452EA33EF9C72C9E2447452E"}}
          style={styles.imagem}/>

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