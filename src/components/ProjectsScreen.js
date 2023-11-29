import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Sidebar from './Sidebar';
import styles from '../styles';
import ImageCarousel from './Carousel';

const ProjectsScreen = ({ navigation }) => {
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

  return (
    <View style={styles.container}>
      <View style={styles.topSpace} />
      {!isSidebarOpen && (
        <TouchableOpacity onPress={toggleSidebar} style={styles.sidebarButton}>
          <Ionicons name="ellipsis-vertical" size={24} color="black" />
        </TouchableOpacity>
      )}
      {isSidebarOpen && <Sidebar onClose={closeSidebar} onNavigate={navigateTo} />}
        <ImageCarousel/>
    </View>
  );
};

export default ProjectsScreen;
