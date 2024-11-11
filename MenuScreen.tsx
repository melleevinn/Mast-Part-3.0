import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useMenu } from './Menucontext';

export default function MenuScreen({ navigation }) {
  const { menuItems, addToCart } = useMenu();
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const filteredItems = selectedCourse
    ? menuItems.filter(item => item.course === selectedCourse)
    : menuItems;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu</Text>
      <Button title="Filter Starters" onPress={() => setSelectedCourse('Starter')} />
      <Button title="Filter Mains" onPress={() => setSelectedCourse('Main')} />
      <Button title="Filter Desserts" onPress={() => setSelectedCourse('Dessert')} />
      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - ${item.price}</Text>
            <Text>{item.description}</Text>
            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />
      <Button title="Go to Checkout" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  item: { marginVertical: 10 },
});
