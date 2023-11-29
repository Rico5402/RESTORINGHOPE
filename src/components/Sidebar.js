// src/components/Sidebar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Sidebar = ({ onClose, onNavigate }) => {
  const navigateTo = (screen) => {
    onNavigate(screen);
    onClose();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateTo('Home')} style={styles.menuItem}>
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('Projects')} style={styles.menuItem}>
        <Text style={styles.menuText}>Projects</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('HowToHelp')} style={styles.menuItem}>
        <Text style={styles.menuText}>How to Help</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('Login')} style={styles.menuItem}>
              <Text style={styles.menuText}>Sign Out</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    width: 200,
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 2, // Set a higher zIndex to ensure the sidebar is above other components
  },
  menuItem: {
    marginBottom: 16,
  },
  menuText: {
    fontSize: 18,
  },
});

export default Sidebar;

