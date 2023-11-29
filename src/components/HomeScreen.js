import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToProjects = () => {
    navigation.navigate('Projects');
  };

  const navigateToContact = () => {
    navigation.navigate('HowToHelp');
  };

  return (
    <View style={styles.container}>
        <Image source={require('../images/Logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>Welcome to Restoring Hope</Text>
        <Text style={styles.subHeaderText}>Explore the features below:</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { width: 200, height: 53.4 }]} onPress={navigateToProjects}>
          <Text style={styles.buttonText}>Projects</Text>
        </TouchableOpacity>
        <View style={styles.marginHorizontal} />
        <TouchableOpacity style={[styles.button, { width: 200, height: 53.4 }]} onPress={navigateToContact}>
          <Text style={styles.buttonText}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;