import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useThemeContext } from '../theme/ThemeProvider';

const dummyCartItems = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    quantity: 1,
    image: 'https://picsum.photos/id/237/80',
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 149.99,
    quantity: 2,
    image: 'https://picsum.photos/id/238/80',
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    price: 59.99,
    quantity: 1,
    image: 'https://picsum.photos/id/239/80',
  },
  {
    id: '4',
    name: 'Portable Charger',
    price: 39.99,
    quantity: 3,
    image: 'https://picsum.photos/id/240/80',
  },
  {
    id: '5',
    name: 'Gaming Mouse',
    price: 49.99,
    quantity: 1,
    image: 'https://picsum.photos/id/241/80',
  },
];

const CartScreen = () => {
  const { colors } = useThemeContext();
  const styles = getStyles(colors);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectItem = (itemId: string, newValue: boolean) => {
    setSelectedItems(prev => {
      const updated = newValue
        ? [...prev, itemId]
        : prev.filter(id => id !== itemId);
      setSelectAll(updated.length === dummyCartItems.length);
      return updated;
    });
  };

  const toggleSelectAll = (newValue: boolean) => {
    setSelectAll(newValue);
    if (newValue) {
      setSelectedItems(dummyCartItems.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const selectedItemsData = dummyCartItems.filter(item =>
    selectedItems.includes(item.id),
  );

  const total = selectedItemsData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const renderItem = ({ item }: any) => {
    const isSelected = selectedItems.includes(item.id);

    return (
      <View style={styles.itemContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={newValue => toggleSelectItem(item.id, newValue)}
          tintColors={{ true: colors.primary, false: colors.border }}
          style={styles.checkBox}
        />
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={{ color: colors.text }}>
            Qty: {item.quantity} | ${item.price.toFixed(2)}
          </Text>
        </View>
        <Text style={[styles.price, { color: colors.text }]}>
          ${(item.price * item.quantity).toFixed(2)}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dummyCartItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
      />

      {/* Sticky Checkout Bar */}
      <View style={styles.footer}>
        <View style={styles.selectAllContainer}>
          <CheckBox
            value={selectAll}
            onValueChange={toggleSelectAll}
            tintColors={{ true: colors.primary, false: colors.border }}
          />
          <Text style={styles.selectAllText}>All</Text>
        </View>
        <View>
          <Text style={styles.totalText}>Subtotal: ${total.toFixed(2)}</Text>
          <Text style={styles.shippingText}>Shipping Fee : $5.00</Text>
        </View>

        <TouchableOpacity
          style={
            selectedItems.length > 0
              ? styles.checkoutButtonActive
              : styles.checkoutButtonDisabled
          }
          disabled={selectedItems.length === 0}
          onPress={() => {
            console.log('Selected for checkout:', selectedItemsData);
          }}
        >
          <Text style={styles.checkoutText}>
            Checkout ({selectedItems.length})
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: colors.background,
    },
    contentContainer: {
      paddingBottom: 120,
    },
    itemContainer: {
      flexDirection: 'row',
      marginBottom: 8,
      alignItems: 'center',
      padding: 12,
      borderRadius: 8,
      backgroundColor: colors.card,
    },
    checkBox: {
      marginRight: 8,
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 8,
      marginRight: 12,
    },
    nameContainer: {
      flex: 1,
    },
    name: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.text,
    },
    price: {
      fontSize: 16,
      fontWeight: '600',
      marginLeft: 'auto',
    },
    footer: {
      position: 'absolute',
      bottom: Platform.OS === 'ios' ? 20 : 0,
      left: 0,
      right: 0,
      backgroundColor: colors.background,
      padding: 16,
      borderTopWidth: 1,
      borderColor: colors.border,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    selectAllContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 8,
    },
    selectAllText: {
      marginLeft: 8,
      fontSize: 16,
      fontWeight: '600',
      color: colors.text,
    },
    totalText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 12,
      textAlign: 'center',
      color: colors.text,
    },
    shippingText: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 12,
      textAlign: 'center',
      color: colors.text,
    },
    checkoutButtonActive: {
      backgroundColor: colors.primary,
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    checkoutButtonDisabled: {
      backgroundColor: '#77acae',
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    checkoutText: {
      color: colors.pureWhite,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
