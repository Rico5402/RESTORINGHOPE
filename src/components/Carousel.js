import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default class ImageCarousel extends React.Component {
  state = {
    activeSlide: 0,
    entries: [] // This will hold data from Cosmic
  };

  componentDidMount() {
    this.fetchDataFromCosmic();
  }

  fetchDataFromCosmic = async () => {
    const apiUrl = 'https://api.cosmicjs.com/v3/buckets/reactapp-enricocelento/objects';
    const queryParams = new URLSearchParams({
      'read_key': 'gZkpR5N95wlxce1dHMS6W1IcyphhT3OP6aWe4cVdFyGXoxrcAy',
      'type': 'reacts',
      'props': 'slug,title,metadata',
      'limit': 10
    });

    try {
      const response = await fetch(`${apiUrl}?${queryParams}`);
      const result = await response.json();

      if (response.ok) {
        this.setState({ entries: result.objects });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Error fetching data from Cosmic:', error);
    }
  };

  _renderItem = ({ item, index }) => {
    const title = item.metadata.title; // Access title from the metadata object
    const imageUrl = item.metadata.image.imgix_url; // Access image URL from the metadata object

    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };

  render() {
    const { entries } = this.state;
    const { width: screenWidth } = Dimensions.get('window');
    const itemWidth = screenWidth * 0.8; // Adjust the width as needed

    return (
      <View style={styles.container}>
        <Carousel
          data={entries}
          renderItem={this._renderItem}
          sliderWidth={screenWidth}
          itemWidth={itemWidth}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%' // Make sure the container takes the full width
  },
  image: {
    width: '100%', // Make the image take the full width of the container
    height: 500, // Adjust the height as needed
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    color: 'black' // Make sure the text color is visible on your background
  }
});
