import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useMenu } from './Menucontext';

export default function AddMenuItemScreen({ navigation }) {
  const { addMenuItem } = useMenu();
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('Starter');

  const handleAddItem = () => {
    addMenuItem({
      id: Date.now().toString(),
      name: dishName,
      description,
      price: parseFloat(price),
      course,
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Dish</Text>
      <Text>Dish Name</Text>
      <TextInput value={dishName} onChangeText={setDishName} style={styles.input} />
      <Text>Description</Text>
      <TextInput value={description} onChangeText={setDescription} style={styles.input} />
      <Text>Price</Text>
      <TextInput value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.input} />
      <Button title="Add Dish" onPress={handleAddItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: { borderBottomWidth: 1, marginBottom: 10, padding: 8 },
});
