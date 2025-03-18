// screens/ExplorerScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';

const categories = [
  { id: '1', name: 'Pizza', image: require('../assets/pizza.png') },
  { id: '2', name: 'Burgers', image: require('../assets/burger.png') },
  { id: '3', name: 'Steak', image: require('../assets/steak.png') },
];

const popularItems = [
  { id: '1', name: 'Food 1', price: '1$', origin: 'By Viet Nam', image: require('../assets/food1.png'), saleOff: true },
  { id: '2', name: 'Food 2', price: '3$', origin: 'By Japan', image: require('../assets/food2.png'), saleOff: false },
  { id: '3', name: 'Food 3', price: '2$', origin: 'By Korea', image: require('../assets/food3.png'), saleOff: true },
  { id: '4', name: 'Food 4', price: '4$', origin: 'By China', image: require('../assets/food4.png'), saleOff: false },
];
const ExplorerScreen = () => {
  return (
    <View style={styles.container}>
    
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
        <Text style={styles.sectionTitle2}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewallText}>View all</Text>
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
        <Text style={styles.sectionTitle2}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewallText}>View all</Text>
        </TouchableOpacity>
      </View>

       <FlatList
        horizontal
        data={popularItems.filter(item => item.saleOff)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.popularItem}>
            <Image source={item.image} style={styles.popularImage2} />
            {item.saleOff && <Text style={styles.saleBadge}>10% OFF</Text>}
            
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  
  searchBar: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  icon: { width: 24, height: 24, marginHorizontal: 5 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 8 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  sectionTitle2: { fontSize: 18, fontWeight: 'bold',marginTop:40 },
  filterText: { color: '#FFA500' },
  viewallText:{ color: '#FFA500',marginTop:40 },
  categoryItem: { alignItems: 'center', marginRight: 15,height:120 },
  categoryImage: { width: 120, height: 80, borderRadius: 10, marginBottom: 10 },
  popularItem: { backgroundColor: '#fff',flexDirection:'row', borderRadius: 15, padding: 10, marginRight: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  popularImage: { width: 140, height: 160, borderRadius: 10 },
  popularDetails: { marginTop: 8,width:'100' },
  itemName: { fontWeight: '500', fontSize: 16,marginLeft:5 },
  itemOrigin: { color: 'gray', fontSize: 12,marginTop:10,marginLeft:5 },
  itemPrice: {  fontSize: 20, marginTop: 40,marginLeft:5 },
  popularItem2: { backgroundColor: '#fff', borderRadius: 15, padding: 10, marginRight: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  popularImage2: { width: 280, height: 180, borderRadius: 10 },
  saleBadge: { position: 'absolute', top: 10, left: 220, backgroundColor: 'red', color: 'white', fontSize: 12, fontWeight: 'bold', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 5 },

});

export default ExplorerScreen;
