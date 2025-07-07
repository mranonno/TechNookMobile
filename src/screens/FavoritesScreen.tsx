import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

type Product = {
  id: string;
  name: string;
  price: number;
};

const sampleProducts: Product[] = [
  { id: '1', name: 'Product One', price: 100 },
  { id: '2', name: 'Product Two', price: 200 },
  { id: '3', name: 'Product Three', price: 300 },
];

const FavoritesScreen = () => {
  // local favorite ids
  const [favorites, setFavorites] = useState<string[]>(['1', '3']); // শুরুতে দুইটা আইটেম ফেভারিট ধরলাম

  // ফেভারিট প্রোডাক্টগুলো ফিল্টার করবো
  const favoriteProducts = sampleProducts.filter(p => favorites.includes(p.id));

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>Price: ${item.price}</Text>
      <TouchableOpacity
        style={styles.removeBtn}
        onPress={() => {
          setFavorites(favorites.filter(id => id !== item.id));
        }}
      >
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {favoriteProducts.length === 0 ? (
        <Text style={styles.emptyText}>ফেভারিট লিস্ট ফাঁকা আছে।</Text>
      ) : (
        <FlatList
          data={favoriteProducts}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          //   contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </SafeAreaView>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
    color: '#666',
  },
  item: {
    backgroundColor: '#eee',
    marginBottom: 12,
    padding: 16,
    borderRadius: 8,
  },
  name: { fontSize: 18, fontWeight: 'bold' },
  removeBtn: {
    marginTop: 8,
    backgroundColor: '#d11a2a',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
});
