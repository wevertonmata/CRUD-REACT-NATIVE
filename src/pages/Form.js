import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Storage from '../controller/storage';
  
export default function Form({ route, navigation }) {
  const id = route.params ? route.params.id : undefined;
  const [descricao, setDescricao] = useState(''); 
  const [quantidade, setQuantidade] = useState('');

  useEffect(() => {
    if(!route.params) return;
    setDescricao(route.params.descricao);
    setQuantidade(route.params.quantidade.toString());
  }, [route])

  function handleDescriptionChange(descricao){
     setDescricao(descricao); 
  } 
  function handleQuantityChange(quantidade){ 
    setQuantidade(quantidade);
  }
  async function handleButtonPress(){ 
    const listItem = {descricao, quantidade: parseInt(quantidade)};
    Storage.saveItem(listItem, id)
      .then(response => navigation.navigate("List", listItem));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> TASKA ESSE TREM AEHH</Text>
      <View style={styles.inputContainer}> 
        <TextInput 
          style={styles.input} 
          onChangeText={handleDescriptionChange} 
          clearButtonMode="always"
          value={descricao} /> 
        <TextInput 
          style={styles.input} 
          onChangeText={handleQuantityChange} 
          keyboardType={'numeric'}
          clearButtonMode="always"
          value={quantidade.toString()} /> 
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}> 
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>ADD ITEM</Text> 
            </View>
          </TouchableOpacity> 
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 100,
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    marginBottom: 30,
    width: '100%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  input: {
    marginTop: 50,
    height: 60,
    backgroundColor: '#cacaca',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
  },
  button: {
    marginTop: 300,
    height: 60,
    backgroundColor: '#0c0c0c',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent:'flex-end'
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  }
});
