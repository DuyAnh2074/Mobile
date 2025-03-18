import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useAppContext } from '../components/AppProvider';

const AccountScreen = () => {
  const { setIsLoggedIn } = useAppContext();

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.profileContainer}>
        {/* Avatar */}
        <Image source={require('../assets/mphuong.jpg')} style={styles.avatar} />
        
        {/* Tên và thông tin */}
        <Text style={styles.name}>Hung Nguyen</Text>
        <Text style={styles.role}>Mobile developer</Text>
        <Text style={styles.description}>
          I have above 5 years of experience in native mobile apps development, now I am learning React Native
        </Text>
        
        {/* Nút đăng xuất */}
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: { height: 180, backgroundColor: '#00AEEF' },
  profileContainer: { alignItems: 'center', padding: 20, marginTop: -50 },

  // Avatar
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#fff',
    position: 'absolute',
    top: -10 , // Đẩy avatar lên trên
  },

  name: { fontSize: 28, marginTop: 90, color: '#666',paddingVertical:10 },
  role: { fontSize: 16, color: '#00AEEF', marginBottom: 10 },
  description: { fontSize: 14, textAlign: 'center', color: '#666', marginBottom: 30, width: 300 },
  
  signOutButton: { backgroundColor: '#FFA500', padding: 12, borderRadius: 8 },
  signOutText: { color: '#fff', fontWeight: '400', fontSize: 16 },
});

export default AccountScreen;
