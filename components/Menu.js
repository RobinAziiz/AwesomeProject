import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Importera ikoner

const Menu = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.menuContainer}>
      <View style={styles.logoContainer}>
        {/* Placera din logotyp här */}
        <Image source={require('../assets/Locus.png')} style={styles.logo} />
      </View>
      <View style={styles.menuItemsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')} style={styles.menuItemContainer}>
          <MaterialIcons name="home" size={24} color="white" />
          <Text style={styles.menuItem}>Hjem</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')} style={styles.menuItemContainer}>
          <MaterialIcons name="people" size={24} color="white" />
          <Text style={styles.menuItem}>Min profil</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PermitPage')} style={styles.menuItemContainer}>
          <MaterialIcons name="library-add-check" size={24} color="white" />
          <Text style={styles.menuItem}>Mine avtaler</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('BookingPage')} style={styles.menuItemContainer}>
          <MaterialIcons name="book-online" size={24} color="white" />
          <Text style={styles.menuItem}>Bookingar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: '#1C1B1F',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 240,
    height: 130,
  },
  menuItemsContainer: {
    padding: 20,
  },
  menuItemContainer: {
    flexDirection: 'row', // För att visa ikon och text bredvid varandra
    alignItems: 'center',
    marginVertical: 8,
  },
  menuItem: {
    fontSize: 18,
    color: 'white',
    marginLeft: 16, // För att ge lite utrymme mellan ikonen och texten
  },
});

export default Menu;
