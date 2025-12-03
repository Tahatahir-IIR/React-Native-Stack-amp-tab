import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DetailsScreen({ route }) {
  const id = route.params?.id;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>📄 Écran de détails</Text>
      </View>
      
      {id && (
        <View style={styles.idCard}>
          <Text style={styles.idLabel}>ID reçu :</Text>
          <Text style={styles.idValue}>{id}</Text>
        </View>
      )}

      <View style={styles.detailsSection}>
        <Text style={styles.sectionTitle}>Informations supplémentaires</Text>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Statut:</Text>
          <Text style={styles.detailValue}>Actif</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Date:</Text>
          <Text style={styles.detailValue}>{new Date().toLocaleDateString()}</Text>
        </View>
      </View>

      <View style={styles.colorBox}>
        <Text style={styles.colorText}>
          Cet écran démontre la navigation par pile (Stack Navigation)
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    marginBottom: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  idCard: {
    backgroundColor: '#007AFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
    width: '100%',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  idLabel: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 5,
  },
  idValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  detailsSection: {
    width: '100%',
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  detailLabel: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },
  detailValue: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  colorBox: {
    backgroundColor: '#e8f5e9',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    marginTop: 10,
  },
  colorText: {
    fontSize: 14,
    color: '#2e7d32',
    textAlign: 'center',
    lineHeight: 20,
  },
});
