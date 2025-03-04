// screens/ExplorerScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';

const categories = [
  { id: '1', name: 'Pizza', image: require('../assets/pizza.png') },
  { id: '2', name: 'Burgers', image: require('../assets/burger.png') },
  { id: '3', name: 'Steak', image: require('../assets/steak.png') },
];

const popularItems = [
  { id: '1', name: 'Food 1', price: '1$', origin: 'By Viet Nam', image: require('../assets/food1.png') },
  { id: '2', name: 'Food 2', price: '3$', origin: 'By Japan', image: require('../assets/food2.png') },
  { id: '3', name: 'Food 3', price: '2$', origin: 'By Korea', image: require('../assets/food3.png') },
  { id: '4', name: 'Food 4', price: '4$', origin: 'By China', image: require('../assets/food4.png') },
];

const ExplorerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explorer</Text>
      <View style={styles.searchBar}>
        <TouchableOpacity>
          <Image source={require('../assets/location.png')} style={styles.icon} />
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Search for meals or area" />
        <TouchableOpacity>
          <Image source={require('../assets/search.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Top Categories</Text>
        <TouchableOpacity>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text>{item.name}</Text>
          </View>
        )}
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.filterText}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={popularItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.popularItem}>
            <Image source={item.image} style={styles.popularImage} />
            <View style={styles.popularDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemOrigin}>{item.origin}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          </View>
        )}
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.filterText}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={popularItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.popularItem2}>
            <Image source={item.image} style={styles.popularImage2} />
            <View style={styles.popularDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemOrigin}>{item.origin}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  searchBar: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  icon: { width: 24, height: 24, marginHorizontal: 5 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 8 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  filterText: { color: '#FFA500' },
  categoryItem: { alignItems: 'center', marginRight: 15 },
  categoryImage: { width: 120, height: 80, borderRadius: 10, marginBottom: 5 },
  popularItem: { backgroundColor: '#fff',flexDirection:'row', borderRadius: 15, padding: 10, marginRight: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  popularImage: { width: 140, height: 160, borderRadius: 10 },
  popularDetails: { marginTop: 8,width:'100' },
  itemName: { fontWeight: '500', fontSize: 16 },
  itemOrigin: { color: 'gray', fontSize: 12,marginTop:10 },
  itemPrice: { fontWeight: 'bold', fontSize: 16, marginTop: 90 },
  popularItem2: { backgroundColor: '#fff', borderRadius: 15, padding: 10, marginRight: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  popularImage2: { width: 240, height: 180, borderRadius: 10 },
});

export default ExplorerScreen;
