import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Écran d'accueil</Text>
      <Text style={styles.subtitle}>Bienvenue dans l'application</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Aller aux détails"
          onPress={() => navigation.navigate('Details', { id: 42 })}
          color="#007AFF"
        />
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Utilisez le bouton ci-dessus pour naviguer vers l'écran de détails
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  buttonContainer: {
    marginVertical: 20,
    width: '100%',
    maxWidth: 300,
  },
  infoBox: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
    width: '100%',
    maxWidth: 300,
  },
  infoText: {
    fontSize: 14,
    color: '#1976d2',
    textAlign: 'center',
  },
});
