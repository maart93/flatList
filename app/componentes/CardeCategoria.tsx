import {View, StyleSheet, FlatList, Text, Image} from 'react-native';
import renderfilme from "./ListaFilme";


export default function renderCategoria({item}: {item: any}){
        return(
          <View>
           <Text>{item.titulo}</Text>
            <FlatList
              data={item.filmes}
              keyExtractor={(item) => item.id}
              horizontal={true}
              renderItem= {renderfilme}
            />
          </View>
        );
      }


      