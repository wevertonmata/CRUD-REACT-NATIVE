import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import { Feather as Icons } from '@expo/vector-icons';
import Storage from '../controller/storage';

export default function Item(props){

    function handleDeletePress(){ 
        Alert.alert(
            "Atenção!",
            "Tem certeza que deseja excluir este item?",
            [
                {
                text: "Não",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "Sim", onPress: () => {
                        Storage.deleteItem(props.id)
                            .then(response => props.navigation.navigate("List", {id: props.id}));
                    }
                }
            ],
            { cancelable: false }
            );
    } 

    async function handleEditPress(){ 
        const item = await Storage.getItem(props.id);
        props.navigation.navigate("Form", item);
    }
    
    return (
        <View style={styles.container}>
          <Text style={styles.textItem}>{props.item}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity 
                style={styles.deleteButton}
                onPress={handleDeletePress}> 
               <Icons name="delete" size={30} color="#000"  />
            </TouchableOpacity> 
            <TouchableOpacity 
                style={styles.editButton} 
                onPress={handleEditPress}> 
               <Icons name="edit" size={30} color="#000"  />
            </TouchableOpacity> 
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      borderColor: "#ccc",
      borderRadius:6, 
      borderWidth: 1,
      marginTop: 20,
      width: '100%',
      alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'baseline',
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        paddingBottom: 10,
        marginTop: 10,
        marginLeft: 10,
    },
    editButton: {
        marginLeft: 10,
        padding: 10,
        fontSize: 12,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    deleteButton: {
        marginLeft: 10,
        padding: 10,
        fontSize: 12,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textItem: {
        fontSize: 20,
        textAlign:'center',
        borderBottomWidth: 2

    },
    textOpt: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: "center",

    }
  });