import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useMenu } from './Menucontext';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const { menuItems } = useMenu();

  const calculateAveragePrice = (course: string) => {
    const items = menuItems.filter(item => item.course === course);
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return items.length ? (total / items.length).toFixed(2) : '0.00';
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <FontAwesome name="cutlery" size={36} color="#FF6347" />
        <Text style={styles.header}>Christoffel's Culinary App</Text>
      </View>
      <View style={styles.averagePriceContainer}>
        <Text style={styles.sectionHeader}>Average Prices</Text>
        <Text style={styles.priceText}>Starters: ${calculateAveragePrice('Starter')}</Text>
        <Text style={styles.priceText}>Mains: ${calculateAveragePrice('Main')}</Text>
        <Text style={styles.priceText}>Desserts: ${calculateAveragePrice('Dessert')}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Explore Menu" color="#FF6347" onPress={() => navigation.navigate('Menu')} />
        <Button title="Go to Checkout" color="#FF6347" onPress={() => navigation.navigate('Checkout')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', alignItems: 'center', padding: 20 },
  headerContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  header: { fontSize: 26, fontWeight: '600', color: '#333', marginLeft: 10 },
  averagePriceContainer: { backgroundColor: '#fff', padding: 20, borderRadius: 8, width: '90%', shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.1, shadowRadius: 6, elevation: 3, marginBottom: 20 },
  sectionHeader: { fontSize: 18, fontWeight: '500', color: '#FF6347', marginBottom: 10 },
  priceText: { fontSize: 16, color: '#555', marginVertical: 2 },
  buttonContainer: { width: '100%', marginTop: 20 },
});
