import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useColorScheme } from 'react-native';

const dummyCartItems = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    quantity: 1,
    image: 'https://via.placeholder.com/80',
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 149.99,
    quantity: 2,
    image: 'https://via.placeholder.com/80',
  },
];

const CartScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? '#000' : '#fff';
  const textColor = isDarkMode ? '#fff' : '#000';

  const total = dummyCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const renderItem = ({ item }: any) => (
    <SafeAreaView style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View>
        <Text style={[styles.name, { color: textColor }]}>{item.name}</Text>
        <Text style={{ color: textColor }}>
          Qty: {item.quantity} | ${item.price.toFixed(2)}
        </Text>
      </View>
      <Text style={[styles.price, { color: textColor }]}>
        ${(item.price * item.quantity).toFixed(2)}
      </Text>
    </SafeAreaView>
  );

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <FlatList
        data={dummyCartItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListFooterComponent={
          <View style={styles.footer}>
            <Text style={[styles.totalText, { color: textColor }]}>
              Total: ${total.toFixed(2)}
            </Text>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 12,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    marginTop: 24,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  checkoutButton: {
    backgroundColor: '#02282B',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
