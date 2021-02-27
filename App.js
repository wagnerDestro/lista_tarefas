import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import {AntDesign} from '@expo/vector-icons';
import {useFonts, Lato_400Regular} from '@expo-google-fonts/lato'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {

  const image = require('./resources/bg.jpg');

  console.disableYellowBox = true;

  const [tarefas, setarTarefas] = useState([
  {
    id: 1,
    tarefa: 'Minha tarefa 1.'
  },
  {
    id: 2,
    tarefa: 'Minha outra tarefa.'
  }
]);

  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!fontsLoaded){
    return <AppLoading />;
  }

  function deletarTarefa(id){
    alert('tarefa com id ' + id + ' foi deletada');
    let newTarefas = tarefas.filter(function(val){
      return val.id != id;
    });

    setarTarefas(newTarefas);

  }

  return (
    <ScrollView style={{flex:1}}>
    <StatusBar hidden />
      <ImageBackground source={image} style={styles.image}>
      <View style={styles.coverView}>
        <Text style={styles.textHeader}>Lista de Tarefas</Text>
      </View>
      </ImageBackground>

      {
      
      tarefas.map(function(val){
        return(<View style={styles.tarefaSingle}>
          <View style={{flex:1, width:'100%', padding:5}}>
            <Text>{val.tarefa}</Text>
          </View>
          <View style={{alignItems:'flex-end', flex:1, padding:10}}>
            <TouchableOpacity onPress={() => deletarTarefa(val.id)} ><AntDesign name="minuscircleo" size={24} color="black"></AntDesign></TouchableOpacity>
          </View>
        </View>
        );
      })
      
      
      }

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    width:'100%',
    height:50
  },

  coverView:{
    width:'100%',
    height:50,
    backgroundColor:'rgba(0, 0, 0, 0.5)'
  },

  textHeader:{
    textAlign:'center',
    color:'white',
    fontSize:23,
    marginTop:20,
    fontFamily:'Lato_400Regular'
  },

  tarefaSingle:{
    marginTop:30,
    width:'100%',
    borderBottomWidth:1,
    borderBottomColor:"black",
    flexDirection:'row',
    paddingBottom:10
  }
});
