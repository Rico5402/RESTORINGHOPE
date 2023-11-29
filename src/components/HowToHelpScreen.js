import React, { useState } from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Sidebar from './Sidebar';
import styles from '../styles';
import ContactForm from './ContactForm';

const HowToHelpScreen = ({ navigation }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const navigateTo = (screen) => {
    navigation.navigate(screen);
    closeSidebar();
  };

  const handlePressOutside = () => {
    if (isSidebarOpen) {
      closeSidebar();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePressOutside}>
        <>
          <View style={styles.topSpace} />
          {!isSidebarOpen && (
            <TouchableOpacity onPress={toggleSidebar} style={styles.sidebarButton}>
              <Ionicons name="ellipsis-vertical" size={24} color="black" />
            </TouchableOpacity>
          )}
          {isSidebarOpen && <Sidebar onClose={closeSidebar} onNavigate={navigateTo} />}
        </>
      </TouchableWithoutFeedback>
      <ContactForm />
    </View>
  );
};

export default HowToHelpScreen;
