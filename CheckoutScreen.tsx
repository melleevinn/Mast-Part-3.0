import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useMenu } from './Menucontext';

export default function CheckoutScreen() {
  const { cartItems, calculateTotal } = useMenu();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checkout</Text>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - ${item.price}</Text>
          </View>
        )}
      />
      <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
      <Button title="Place Order" onPress={() => alert('Order Placed')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  item: { marginVertical: 5 },
  totalText: { fontSize: 18, fontWeight: 'bold', marginTop: 20 },
});
