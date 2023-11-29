import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://192.168.68.120:3000/submit-form", {  // Update with your server's address
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const resData = await response.json();
        throw new Error(resData.message || "Form submission failed");
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error: " + error.message);  // Display error message to the user
    }
  };

  if (submitted) {
    return (
      <View style={styles.container}>
        <Image source={require('../images/Logo.png')} style={styles.logo} />
        <Text>Thank you!</Text>
        <Text>We'll be in touch soon.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image source={require('../images/Logo.png')} style={styles.logo} />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your name"
          value={formData.name}
          onChangeText={(text) => handleChange("name", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact number"
          value={formData.contactNumber}
          onChangeText={(text) => handleChange("contactNumber", text)}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
        />
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Your message"
          value={formData.message}
          onChangeText={(text) => handleChange("message", text)}
          multiline
          numberOfLines={8}
          textAlignVertical="top"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Send a message</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 50,
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    margin: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 8,
  },
  multilineInput: {
    height: 150,
  },
  button: {
    backgroundColor: '#8CD1BC',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  logo: {
    width: 100,  // Adjusted to a reasonable size
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default ContactForm;

