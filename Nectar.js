import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import danh sách sản phẩm từ data.js
import { products } from './data';

import ShopIcon from './assets/ShopIcon.png';
import ExploreIcon from './assets/ExploreIcon.png';
import CartIcon from './assets/CartIcon.png';
import FavouriteIcon from './assets/FavouriteIcon.png';
import AccountIcon from './assets/AccountIcon.png';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Product Screen
const ProductScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        {/* Header */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('./assets/back_arrow.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./assets/share_icon.png')} />
          </TouchableOpacity>
        </View>

        {/* Product Image */}
        <View style={{ alignItems: 'center', marginVertical: 20 }}>
          <Image source={product.image} style={{ width: 330, height: 200 }} />
        </View>

        {/* Product Name and Price */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: '600', color: '#181725' }}>Naturel Red Apple</Text>
          <TouchableOpacity>
            <Image source={require('./assets/heart_icon.png')} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 16, color: '#7C7C7C', paddingHorizontal: 20, marginTop: 5 }}>{product.description}</Text>

        {/* Quantity Selector */}
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginTop: 20 }}>
          <TouchableOpacity 
            onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            style={{ width: 40, height: 40, borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ fontSize: 20, color: '#181725' }}>-</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#181725', marginHorizontal: 20 }}>{quantity}</Text>
          <TouchableOpacity 
            onPress={() => setQuantity(quantity + 1)}
            style={{ width: 40, height: 40, borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ fontSize: 20, color: '#181725' }}>+</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: '600', color: '#181725', marginLeft: 'auto' }}>${(parseFloat(product.price.replace('$', '')) * quantity).toFixed(2)}</Text>
        </View>

        {/* Product Detail */}
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginTop: 20, borderTopWidth: 1, borderColor: '#E2E2E2', paddingVertical: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#181725' }}>Product Detail</Text>
          <Image source={require('./assets/down_arrow.png')} />
        </TouchableOpacity>
        <Text style={{ fontSize: 14, color: '#7C7C7C', paddingHorizontal: 20, marginTop: 10 }}>
          Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples May Be Good For Your Heart. As Part Of A Healthful And Varied Diet.
        </Text>

        {/* Nutritions */}
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginTop: 20, borderTopWidth: 1, borderColor: '#E2E2E2', paddingVertical: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#181725' }}>Nutritions</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 14, color: '#7C7C7C', marginRight: 10 }}>100gr</Text>
            <Image source={require('./assets/right_arrow.png')} />
          </View>
        </TouchableOpacity>

        {/* Review */}
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginTop: 20, borderTopWidth: 1, borderColor: '#E2E2E2', paddingVertical: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#181725' }}>Review</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('./assets/star_icon.png')} style={{ width: 16, height: 16, marginRight: 5 }} />
            <Image source={require('./assets/star_icon.png')} style={{ width: 16, height: 16, marginRight: 5 }} />
            <Image source={require('./assets/star_icon.png')} style={{ width: 16, height: 16, marginRight: 5 }} />
            <Image source={require('./assets/star_icon.png')} style={{ width: 16, height: 16, marginRight: 5 }} />
            <Image source={require('./assets/star_icon.png')} style={{ width: 16, height: 16 }} />
            <Image source={require('./assets/right_arrow.png')} style={{ marginLeft: 10 }} />
          </View>
        </TouchableOpacity>

        {/* Add to Basket Button */}
        <TouchableOpacity style={{ backgroundColor: '#53B175', borderRadius: 15, paddingVertical: 15, marginHorizontal: 20, marginTop: 30, marginBottom: 20, alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff' }}>Add To Basket</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

// Shop Screen (Home Screen content)
const ShopScreen = ({ navigation }) => {
  const exclusiveOffers = [
    { id: '1', name: 'Organic Bananas', description: '7pcs, Priceg', price: '$4.99', image: require('./assets/organic_bananas.png') },
    { id: '2', name: 'Red Apple', description: '1kg, Priceg', price: '$4.99', image: require('./assets/red_apple.png') },
  ];

  const bestSelling = [
    { id: '3', name: 'Bell Pepper', description: '1kg, Priceg', price: '$4.99', image: require('./assets/bell_pepper.png') },
    { id: '4', name: 'Ginger', description: '1kg, Priceg', price: '$4.99', image: require('./assets/ginger.png') },
  ];

  const groceriesFirstRow = [
    { id: '5', name: 'Pulses', description: '', price: '', image: require('./assets/pulses.png') },
    { id: '6', name: 'Rice', description: '', price: '', image: require('./assets/rice.png') },
  ];

  const groceriesSecondRow = [
    { id: '7', name: 'Beef Bone', description: '1kg, Priceg', price: '$4.99', image: require('./assets/beef_bone.png') },
    { id: '8', name: 'Broiler Chicken', description: '1kg, Priceg', price: '$4.99', image: require('./assets/broiler_chicken.png') },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        {/* Header */}
        <View style={{ alignItems: 'center', paddingVertical: 20 }}>
          <Image source={require('./assets/icon_carot.png')} />
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Image source={require('./assets/location.png')} style={{ width: 16, height: 16, marginRight: 5 }} />
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#4C4F4D' }}>Dhaka, Banassre</Text>
          </View>
        </View>

        {/* Search Bar - Removed Filter Button */}
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F2F3F2', borderRadius: 10, marginHorizontal: 20, paddingHorizontal: 10, marginBottom: 20 }}>
          <Image source={require('./assets/search.png')} style={{ width: 20, height: 20, marginRight: 10 }} />
          <TextInput
            style={{ flex: 1, height: 50, fontSize: 16, color: '#181725' }}
            placeholder="Search Store"
            placeholderTextColor="#888"
          />
        </View>

        {/* Banner */}
        <View style={{ marginHorizontal: 20, marginBottom: 20, borderRadius: 15, overflow: 'hidden', position: 'relative' }}>
          <Image
            source={require('./assets/banner_fresh_vegetables.png')}
            style={{ width: '100%', height: 150 }}
          />
        </View>

        {/* Exclusive Offer Section */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginBottom: 15 }}>
          <Text style={{ fontSize: 24, fontWeight: '600', color: '#181725' }}>Exclusive Offer</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, color: '#53B175', fontWeight: '500' }}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={exclusiveOffers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ width: 170, backgroundColor: '#fff', borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 15, padding: 15, marginRight: 15, alignItems: 'center' }}>
              <Image source={item.image} style={{ height: 70, marginBottom: 10 }} />
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#181725', textAlign: 'center' }}>{item.name}</Text>
              <Text style={{ fontSize: 14, color: '#7C7C7C', marginBottom: 5, textAlign: 'center' }}>{item.description}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#181725' }}>{item.price}</Text>
                <TouchableOpacity 
                  style={{ backgroundColor: '#53B175', borderRadius: 10, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}
                  onPress={() => navigation.navigate('Product', { product: item })}
                >
                  <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />

        {/* Best Selling Section */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginBottom: 15, marginTop: 30 }}>
          <Text style={{ fontSize: 24, fontWeight: '600', color: '#181725' }}>Best Selling</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, color: '#53B175', fontWeight: '500' }}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={bestSelling}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ width: 170, backgroundColor: '#fff', borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 15, padding: 15, marginRight: 15, alignItems: 'center' }}>
              <Image source={item.image} style={{ width: 100, height: 100, marginBottom: 10 }} />
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#181725', textAlign: 'center' }}>{item.name}</Text>
              <Text style={{ fontSize: 14, color: '#7C7C7C', marginBottom: 5, textAlign: 'center' }}>{item.description}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#181725' }}>{item.price}</Text>
                <TouchableOpacity style={{ backgroundColor: '#53B175', borderRadius: 10, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginBottom: 15, marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: '600', color: '#181725' }}>Groceries</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, color: '#53B175', fontWeight: '500' }}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          {/* First Row: Pulses and Rice */}
          <FlatList
            horizontal
            data={groceriesFirstRow}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <View style={{ 
                flex: 1, 
                backgroundColor: index === 0 ? '#ffe0cc' : '#E8F5E9', 
                borderRadius: 15, 
                padding: 15, 
                marginRight: 15, 
                flexDirection: 'row', 
                alignItems: 'center', 
                width: 248,
                height: 105,
              }}>
                <Image source={item.image} style={{ width: 71, height: 71, marginRight: 10 }} />
                <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: '600', color: '#181725' }}>{item.name}</Text>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 0 }}
          />
          {/* Second Row: Beef Bone and Broiler Chicken */}
          <FlatList
            horizontal
            data={groceriesSecondRow}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{ flex: 1, backgroundColor: '#fff', width: 170, borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 15, padding: 15, marginRight: 15, alignItems: 'center' }}>
                <Image source={item.image} style={{ marginBottom: 10 }} />
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#181725', textAlign: 'center' }}>{item.name}</Text>
                <Text style={{ fontSize: 14, color: '#7C7C7C', marginBottom: 5, textAlign: 'center' }}>{item.description}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <Text style={{ fontSize: 16, fontWeight: '600', color: '#181725' }}>{item.price}</Text>
                  <TouchableOpacity style={{ backgroundColor: '#53B175', borderRadius: 10, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 0, marginTop: 15 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Explore Screen (Search Screen)
const ExploreScreen = ({ navigation, route }) => {
  const [searchQuery, setSearchQuery] = useState('Egg');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Lấy bộ lọc từ route params (nếu có)
  const selectedCategories = route.params?.selectedCategories || [];
  const selectedBrands = route.params?.selectedBrands || [];

  useEffect(() => {
    filterProducts();
  }, [searchQuery, route.params]);

  const filterProducts = () => {
    let filtered = products;

    // Lọc theo từ khóa tìm kiếm
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Lọc theo danh mục
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Lọc theo thương hiệu
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    
    <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 }}>
      {/* Search Bar with Filter Button on the top right */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
        <View style={{ flexDirection: 'row',width:350, alignItems: 'center', backgroundColor: '#F2F3F2', borderRadius: 10, marginVertical: 20, paddingHorizontal: 10 }}>
        <Image source={require('./assets/search.png')} style={{ width: 20, height: 20, marginRight: 10 }} />
        <TextInput
          style={{ flex: 1, height: 50, fontSize: 16, color: '#181725' }}
          placeholder="Egg"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
       
        </View>
      <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
          <Image
            source={require('./assets/filter_icon.png')}
            style={{  marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
      {/* Product List */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flex: 1, backgroundColor: '#fff', borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 15, padding: 15, margin: 5, alignItems: 'center' }}
            onPress={() => navigation.navigate('Product', { product: item })}
          >
            <Image source={item.image} style={{ width: 100, height: 100, marginBottom: 10 }} />
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#181725', textAlign: 'center' }}>{item.name}</Text>
            <Text style={{ fontSize: 14, color: '#7C7C7C', marginBottom: 5, textAlign: 'center' }}>{item.description}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#181725' }}>{item.price}</Text>
              <TouchableOpacity style={{ backgroundColor: '#53B175', borderRadius: 10, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>+</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

// Filter Screen
const FilterScreen = ({ navigation }) => {
  const [selectedCategories, setSelectedCategories] = useState(['Eggs']);
  const [selectedBrands, setSelectedBrands] = useState(['Cocola']);

  const categories = ['Eggs', 'Noodles & Pasta', 'Chips & Crisps', 'Fast Food'];
  const brands = ['Individual Collection', 'Cocola', 'Ifad', 'Kazi Farmas'];

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((item) => item !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const applyFilters = () => {
    navigation.navigate('Explore', { selectedCategories, selectedBrands });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20, }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20,marginTop: 50,justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 24, marginRight: 10 }}>✕</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: '600', color: '#181725',marginRight:170 }}>Filters</Text>
      </View>

      {/* Category Section */}
      <View style={{  backgroundColor: '#F2F3F2', padding: 20, borderRadius: 15, marginBottom: 20, }}>
      <Text style={{ fontSize: 24, fontWeight: '600', color: '#181725', marginVertical: 10 }}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}
            onPress={() => toggleCategory(item)}
          >
            <View style={{ width: 20, height: 20, borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 5, marginRight: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: selectedCategories.includes(item) ? '#53B175' : '#fff' }}>
              {selectedCategories.includes(item) && <Text style={{ color: '#fff', fontSize: 14 }}>✔</Text>}
            </View>
            <Text style={{ fontSize: 16, color:selectedCategories.includes(item) ? '#53B175' : '#181725' }}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Brand Section */}
      <Text style={{ fontSize: 24, fontWeight: '600', color: '#181725', marginVertical: 20,marginTop:'30' }}>Brand</Text>
      <FlatList
        data={brands}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}
            onPress={() => toggleBrand(item)}
          >
            <View style={{ width: 20, height: 20, borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 5, marginRight: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: selectedBrands.includes(item) ? '#53B175' : '#fff' }}>
              {selectedBrands.includes(item) && <Text style={{ color: '#fff', fontSize: 14 }}>✔</Text>}
            </View>
            <Text style={{ fontSize: 16, color:selectedBrands.includes(item) ? '#53B175' : '#181725' }}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      {/* Apply Filter Button */}
      <TouchableOpacity style={{ backgroundColor: '#53B175', borderRadius: 15, paddingVertical: 15, alignItems: 'center', marginTop: 220}} onPress={applyFilters}>
        <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff' }}>Apply Filter</Text>
      </TouchableOpacity>
      </View>  
      
    </View>
  );
};

// Cart Screen
const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Bell Pepper Red', description: '1kg, Price', price: 4.99, quantity: 1, image: require('./assets/bell_pepper.png') },
    { id: '2', name: 'Egg Chicken Red', description: '4pcs, Price', price: 1.99, quantity: 1, image: require('./assets/egg_chicken_red.png') },
    { id: '3', name: 'Organic Bananas', description: '12kg, Price', price: 3.00, quantity: 1, image: require('./assets/organic_bananas.png') },
    { id: '4', name: 'Ginger', description: '250gm, Price', price: 2.99, quantity: 1, image: require('./assets/ginger.png') },
  ]);

  // Hàm tăng số lượng
  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Hàm giảm số lượng
  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Tính tổng giá
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        {/* Header */}
        <Text style={{ fontSize: 24, fontWeight: '600', color: '#181725', textAlign: 'center', marginVertical: 20 }}>
          My Cart
        </Text>

        {/* Danh sách sản phẩm trong giỏ hàng */}
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              paddingVertical: 15, 
              borderBottomWidth: 1, 
              borderBottomColor: '#E2E2E2',
              marginBottom: 10,
            }}>
              {/* Hình ảnh sản phẩm */}
              <Image source={item.image} style={{ width: 60, height: 60, marginRight: 15 }} />

              {/* Thông tin sản phẩm */}
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#181725' }}>{item.name}</Text>
                <Text style={{ fontSize: 14, color: '#7C7C7C', marginTop: 5 }}>{item.description}</Text>
                
                {/* Bộ chọn số lượng */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                  <TouchableOpacity 
                    onPress={() => decreaseQuantity(item.id)}
                    style={{ 
                      width: 30, 
                      height: 30, 
                      borderWidth: 1, 
                      borderColor: '#E2E2E2', 
                      borderRadius: 5, 
                      justifyContent: 'center', 
                      alignItems: 'center' 
                    }}
                  >
                    <Text style={{ fontSize: 20, color: '#181725' }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 16, fontWeight: '600', color: '#181725', marginHorizontal: 15 }}>
                    {item.quantity}
                  </Text>
                  <TouchableOpacity 
                    onPress={() => increaseQuantity(item.id)}
                    style={{ 
                      width: 30, 
                      height: 30, 
                      borderWidth: 1, 
                      borderColor: '#E2E2E2', 
                      borderRadius: 5, 
                      justifyContent: 'center', 
                      alignItems: 'center' 
                    }}
                  >
                    <Text style={{ fontSize: 20, color: '#181725' }}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Giá và nút xóa */}
              <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={() => removeItem(item.id)}>
                  <Text style={{ fontSize: 20, color: '#181725', marginBottom: 10 }}>✕</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#181725' }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </Text>
              </View>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
        />

        {/* Nút Go to Checkout */}
        <TouchableOpacity 
          style={{ 
            backgroundColor: '#53B175', 
            borderRadius: 15, 
            paddingVertical: 15, 
            alignItems: 'center', 
            position: 'absolute', 
            bottom: 80, 
            left: 20, 
            right: 20 
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%' }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff' }}>Go to Checkout</Text>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff' }}>${totalPrice}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Favourite Screen
const FavouriteScreen = () => {
  const [favouriteItems, setFavouriteItems] = useState([
    { id: '1', name: 'Sprite Can', description: '325ml, Price', price: 1.50, image: require('./assets/sprite_can.png') },
    { id: '2', name: 'Diet Coke', description: '355ml, Price', price: 1.99, image: require('./assets/diet_coke.png') },
    { id: '3', name: 'Apple & Grape Juice', description: '2L, Price', price: 15.50, image: require('./assets/apple_grape_juice.png') },
    { id: '4', name: 'Coca Cola Can', description: '325ml, Price', price: 4.99, image: require('./assets/coca_cola_can.png') },
    { id: '5', name: 'Pepsi Can', description: '330ml, Price', price: 4.99, image: require('./assets/pepsi_can.png') },
  ]);

  // Hàm xóa sản phẩm khỏi danh sách yêu thích
  const removeItem = (id) => {
    setFavouriteItems(favouriteItems.filter(item => item.id !== id));
  };

  // Hàm thêm tất cả vào giỏ hàng (chưa triển khai logic cụ thể)
  const addAllToCart = () => {
    // Logic để thêm tất cả sản phẩm vào giỏ hàng
    alert('All items added to cart!');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        {/* Header */}
        <Text style={{ fontSize: 24, fontWeight: '600', color: '#181725', textAlign: 'center', marginVertical: 20 }}>
          Favourite
        </Text>

        {/* Danh sách sản phẩm yêu thích */}
        <FlatList
          data={favouriteItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={{ 
                flexDirection: 'row', 
                alignItems: 'center', 
                paddingVertical: 15, 
                borderBottomWidth: 1, 
                borderBottomColor: '#E2E2E2',
                marginBottom: 10,
              }}
              onPress={() => navigation.navigate('Product', { product: item })}
            >
              {/* Hình ảnh sản phẩm */}
              <Image source={item.image} style={{  marginRight: 15 }} />

              {/* Thông tin sản phẩm */}
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#181725' }}>{item.name}</Text>
                <Text style={{ fontSize: 14, color: '#7C7C7C', marginTop: 5 }}>{item.description}</Text>
              </View>

              {/* Giá và nút xóa */}
              <View style={{ alignItems: 'flex-end', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#181725', marginRight: 10 }}>
                  ${item.price.toFixed(2)}
                </Text>
                <TouchableOpacity onPress={() => removeItem(item.id)}>
                  <Image source={require('./assets/right_arrow.png')}  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
        />

        {/* Nút Add All To Cart */}
        <TouchableOpacity 
          style={{ 
            backgroundColor: '#53B175', 
            borderRadius: 15, 
            paddingVertical: 15, 
            alignItems: 'center', 
            position: 'absolute', 
            bottom: 80, 
            left: 20, 
            right: 20 
          }}
          onPress={addAllToCart}
        >
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff' }}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const AccountScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Account Screen</Text>
  </View>
);

// Tab Navigator Component
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;

          if (route.name === 'Shop') {
            iconSource = ShopIcon;
          } else if (route.name === 'Explore') {
            iconSource = ExploreIcon;
          } else if (route.name === 'Cart') {
            iconSource = CartIcon;
          } else if (route.name === 'Favourite') {
            iconSource = FavouriteIcon;
          } else if (route.name === 'Account') {
            iconSource = AccountIcon;
          }

          return (
            <Image
              source={iconSource}
              style={[styles.iconTab, { tintColor: focused ? '#00C4B4' : '#000' }]}
            />
          );
        },
        tabBarLabelStyle: styles.labelTab,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

// Home Screen with Tab Navigator
const HomeScreen = () => {
  return <TabNavigator />;
};

// Splash Screen
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.splashScreen}>
      <Image source={require('./assets/Group 1.png')} style={styles.logo} />
    </View>
  );
};

// Onboarding Screen
const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.OnboardingSceen}>
      <Image source={require('./assets/8140 1.png')} style={styles.onboardingImage} />
      <Image source={require('./assets/Group.png')} style={styles.logo2} />
      <Text style={styles.title}>
        Welcome{'\n'}
        <Text style={styles.title}>to our store</Text>
      </Text>
      <Text style={styles.description}>Get your groceries in as fast as one hour</Text>
      <TouchableOpacity style={styles.buttonStart} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

// SignIn Screen
const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.signIn}>
      <Image source={require('./assets/Mask Group.png')} style={styles.signInImage} />
      <Text style={styles.title2}>Get your groceries{'\n'} with nectar</Text>
      <Image source={require('./assets/Rectangle 11.png')} style={styles.logo3}></Image>
      <TouchableOpacity onPress={() => navigation.navigate('Number')}>
        <TextInput
          style={styles.input}
          placeholder="+880"
          placeholderTextColor="#777"
          onFocus={() => navigation.navigate('Number')}
        />
      </TouchableOpacity>
      <Text style={styles.connectText}>Or connect with social media</Text>
      <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#4285F4' }]}>
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3B5998' }]}>
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

// Number Screen
const NumberScreen = ({ navigation }) => {
  return (
    <View style={styles.signIn}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('./assets/Frame.png')} style={styles.backArrow} />
      </TouchableOpacity>
      <Text style={styles.title2}>Enter your mobile number</Text>
      <Text style={styles.mobileText}>Mobile Number </Text>
      <Image source={require('./assets/Rectangle 11.png')} style={styles.logo4}></Image>
      <TextInput placeholder="+880" style={styles.input} keyboardType="numeric" />
      <TouchableOpacity onPress={() => navigation.navigate('Verification')} style={styles.nextArrow}>
        <Image source={require('./assets/Group 6802.png')} />
      </TouchableOpacity>
    </View>
  );
};

// Verification Screen
const VerificationScreen = ({ navigation }) => (
  <View style={styles.signIn}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={require('./assets/Frame.png')} style={styles.backArrow} />
    </TouchableOpacity>
    <Text style={styles.title2}>Enter your 4-digit code</Text>
    <Text style={styles.mobileText}>Code </Text>
    <TextInput placeholder="- - - -" style={styles.input} keyboardType="numeric" />
    <Text style={styles.resendText}>Resend Text</Text>
    <TouchableOpacity onPress={() => navigation.navigate('location')} style={styles.nextArrow}>
      <Image source={require('./assets/Group 6802.png')} />
    </TouchableOpacity>
  </View>
);

// Location Screen
const LocationScreen = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedZone, setSelectedZone] = useState('Banasree');
  const zones = ['Banasree', 'Zone 1', 'Zone 2'];
  const [selectedArea, setSelectedArea] = useState('');
  const Areas = ['Hà Nội', 'Area 1', 'Area 2'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (isOpen1) setIsOpen1(false);
  };

  const selectZone = (zone) => {
    setSelectedZone(zone);
    setIsOpen(false);
  };

  return (
    <View style={styles.numberContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Verification')}>
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>
      <View style={{ flex: 1, alignItems: 'center', marginTop: 50, height: 50 }}>
        <Image source={require('./assets/icon_location.png')} style={{}} />
        <Text style={{ fontWeight: 600, fontSize: 26, lineHeight: 29, marginTop: 50 }}>
          Select your location
        </Text>
        <Text style={{ color: "#7C7C7C", marginTop: 10, fontSize: 16, textAlign: 'center' }}>
          Swithch on your location to stay in tune with{'\n'}
          what’s happening in your area
        </Text>
        <View style={{ padding: 20, marginTop: 40 }}>
          <Text style={{ fontSize: 14, color: '#999' }}>Your Zone</Text>
          <TouchableOpacity
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
              paddingVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 380
            }}
            onPress={toggleDropdown}
          >
            <Text style={{ fontSize: 16, color: '#333' }}>{selectedZone}</Text>
            <Text style={{ fontSize: 16 }}>▼</Text>
          </TouchableOpacity>
          {isOpen && (
            <View style={{
              marginTop: 10,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 5,
              backgroundColor: '#fff',
              maxHeight: 150,
              overflow: 'hidden',
            }}>
              <FlatList
                data={zones}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => selectZone(item)}>
                    <Text style={{ paddingVertical: 10, paddingHorizontal: 15, fontSize: 16 }}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </View>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 14, color: '#999' }}>Your Area</Text>
          <TouchableOpacity
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
              paddingVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 380
            }}
            onPress={toggleDropdown}
          >
            <Text style={{ fontSize: 16, color: '#333' }}>{selectedArea}</Text>
            <Text style={{ fontSize: 16 }}>▼</Text>
          </TouchableOpacity>
          {isOpen && (
            <View style={{
              marginTop: 10,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 5,
              backgroundColor: '#fff',
              maxHeight: 150,
              overflow: 'hidden',
            }}>
              <FlatList
                data={Areas}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => setSelectedArea(item)}>
                    <Text style={{ paddingVertical: 10, paddingHorizontal: 15, fontSize: 16 }}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#5eb078',
            width: 353,
            height: 67,
            bottom: 100,
            left: 6,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 150
          }}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.textbtnBording}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Login Screen
const LoginScreen = ({ navigation }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View>
      <View style={{ alignItems: 'center', marginTop: 100, height: 50 }}>
        <Image source={require('./assets/icon_carot.png')} style={{}} />
      </View>
      <Text style={{ fontWeight: 600, fontSize: 26, marginLeft: 30, marginTop: 50 }}>Login</Text>
      <Text style={{ fontSize: 16, marginLeft: 30, marginTop: 10, color: "#7C7C7C" }}>
        Enter your emails and password
      </Text>
      <Text style={{ fontSize: 18, marginLeft: 30, marginTop: 80, color: "#7C7C7C" }}>Email</Text>
      <TextInput style={{ fontSize: 16, marginLeft: 30, marginTop: 15, width: 380, height: 30, borderBottomWidth: 1 }} />
      <Text style={{ fontSize: 18, marginLeft: 30, marginTop: 40, color: "#7C7C7C" }}>Password</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginTop: 15, borderBottomWidth: 1, width: 380 }}>
        <TextInput
          style={{ fontSize: 16, flex: 1, height: 30 }}
          placeholder="Enter your password"
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Text style={{ fontSize: 16, color: '#7C7C7C' }}>
            {isPasswordVisible ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{ background: "#181725", fontWeight: 500, marginTop: 20, marginLeft: 290 }}>Forgot Password ?</Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#5eb078',
          width: 353,
          height: 67,
          bottom: 20,
          marginLeft: 40,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.textbtnBording}>Login</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginLeft: 95 }}>
        <Text style={{ fontWeight: 500 }}>Don't have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{ color: '#5eb078', marginLeft: 5, fontWeight: 800 }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// SignUp Screen
const SignUpScreen = ({ navigation }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View>
      <View style={{ alignItems: 'center', marginTop: 100, height: 50 }}>
        <Image source={require('./assets/icon_carot.png')} style={{}} />
      </View>
      <Text style={{ fontWeight: 600, fontSize: 26, marginLeft: 30, marginTop: 50 }}>Sign Up</Text>
      <Text style={{ fontSize: 16, marginLeft: 30, marginTop: 10, color: "#7C7C7C" }}>
        Enter your credentials to continue
      </Text>
      <Text style={{ fontSize: 18, marginLeft: 30, marginTop: 80, color: "#7C7C7C" }}>Username</Text>
      <TextInput style={{ fontSize: 16, marginLeft: 30, marginTop: 15, width: 380, height: 30, borderBottomWidth: 1 }} />
      <Text style={{ fontSize: 18, marginLeft: 30, marginTop: 40, color: "#7C7C7C" }}>Email</Text>
      <TextInput style={{ fontSize: 16, marginLeft: 30, marginTop: 15, width: 380, height: 30, borderBottomWidth: 1 }} />
      <Text style={{ fontSize: 18, marginLeft: 30, marginTop: 40, color: "#7C7C7C" }}>Password</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginTop: 15, borderBottomWidth: 1, width: 380 }}>
        <TextInput
          style={{ fontSize: 16, flex: 1, height: 30 }}
          placeholder="Enter your password"
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Text style={{ fontSize: 16, color: '#7C7C7C' }}>
            {isPasswordVisible ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginLeft: 29, marginTop: 10 }}>
        <Text style={{ fontWeight: 500 }}>By continuing you agree to our</Text>
        <TouchableOpacity onPress={() => navigation.navigate('')}>
          <Text style={{ color: '#5eb078', marginLeft: 5, fontWeight: 500 }}>Terms of Service</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginLeft: 29 }}>
        <Text style={{ fontWeight: 500 }}>and</Text>
        <TouchableOpacity onPress={() => navigation.navigate('')}>
          <Text style={{ color: '#5eb078', marginLeft: 5, fontWeight: 500 }}>Privacy Policy.</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#5eb078',
          width: 353,
          height: 67,
          bottom: 20,
          marginLeft: 40,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}
      >
        <Text style={styles.textbtnBording}>Sign Up</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginLeft: 110 }}>
        <Text style={{ fontWeight: 600 }}>Already have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: '#5eb078', marginLeft: 5, fontWeight: 500 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Main App Component
const Nectar = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Number" component={NumberScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="location" component={LocationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    backgroundColor: '#53B175',
  },
  logo: {
    position: 'absolute',
    top: 414,
    left: 73,
  },
  OnboardingSceen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  onboardingImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logo2: {
    position: 'absolute',
    top: 500,
    left: 182,
  },
  title: {
    position: 'absolute',
    top: 577,
    left: 80,
    fontSize: 48,
    marginVertical: 10,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: 'white',
    position: 'absolute',
    top: 700,
    left: 60,
  },
  buttonStart: {
    position: 'absolute',
    top: 740,
    left: 30,
    width: 353,
    height: 67,
    backgroundColor: '#6AC47E',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
  },
  signIn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  signInImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  title2: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 26,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 40,
  },
  logo3: {
    position: 'absolute',
    top: 518,
    left: 25,
  },
  logo4: {
    position: 'absolute',
    top: 270,
    left: 25,
  },
  input: {
    width: 300,
    height: 50,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#000',
    textAlign: 'left',
    fontSize: 18,
  },
  connectText: {
    textAlign: 'center',
    marginVertical: 50,
    color: '#777',
    fontSize: 14,
  },
  socialButton: {
    width: '80%',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center'
  },
  socialButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  backArrow: {
    marginTop: 70,
    marginRight: 300,
    marginBottom: 40,
    alignSelf: 'flex-start'
  },
  mobileText: {
    color: '#777',
    fontSize: 14,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 40,
  },
  nextArrow: {
    padding: 20,
    alignSelf: 'flex-end',
    marginTop: 200,
  },
  resendText: {
    position: 'absolute',
    top: 550,
    left: 25,
    color: '#53B175',
    fontSize: 18,
  },
  tabBar: {
    backgroundColor: '#fff',
    height: 92,
    paddingBottom: 5,
    borderRadius: 10,
  },
  tabBarItem: {
    justifyContent: 'center',
    paddingTop: 10,
  },
  iconTab: {},
  labelTab: {
    fontSize: 12,
    marginBottom: 5,
  },
  backButton: {
    marginTop: 56.83,
    marginLeft: 25.01,
    width: 45,
    height: 44,
  },
  backButtonText: {
    fontFamily: 'Gilroy',
    fontWeight: '600',
    fontSize: 26,
    lineHeight: 29,
    letterSpacing: 0,
    color: '#181725',
  },
  numberContainer: {
    flex: 1,
    backgroundColor: '#fcfcfc'
  },
  textbtnBording: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
});

export default Nectar;