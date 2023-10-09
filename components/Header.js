import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';

const Header = ({ navigation }) => { 
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <View style={styles.menuButtonContainer}>
          <TouchableOpacity 
            onPress={() => navigation.openDrawer()}
            style={styles.menuButton}
          >
            <Image source={require('../assets/list.png')} style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>Locus</Text>
        <View style={styles.placeholder} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#1C1B1F',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1C1B1F',
    padding: 16,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  menuButtonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
  },
  menuButton: {
    padding: 8,
  },
  menuIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  placeholder: {
    flex: 1,
  },
});

export default Header;
