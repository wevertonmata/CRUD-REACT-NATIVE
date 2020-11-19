import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Item from './Item';
import Storage from '../controller/storage';
 
export default function List({ route, navigation }) {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
      Storage.getItems().then(items => setItems(items));
  }, [route]); 

  return (
    <View style={styles.container}>

        <Text style={styles.title}>Sua lista</Text>
        <ScrollView 
            style={styles.scrollContainer}
            contentContainerStyle={styles.itemsContainer}>
            { items.map(item => {
              return <Item key={item.id} id={item.id} item={item.quantidade + '  de ' + item.descricao} navigation={navigation} />
            }) }
        </ScrollView>
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
  scrollContainer: {
    flex: 1,
    width: '90%'
  },
  itemsContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
});