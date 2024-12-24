import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Subscription = () => {
  const handleSubscriptionPurchase = plan => {
    // Integrate IAP logic
    console.log(`Purchased: ${plan}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Subscription Plan</Text>
      <Button
        title="Free Plan"
        onPress={() => handleSubscriptionPurchase('Free')}
      />
      <Button
        title="Basic Plan - $5/month"
        onPress={() => handleSubscriptionPurchase('Basic')}
      />
      <Button
        title="Premium Plan - $10/month"
        onPress={() => handleSubscriptionPurchase('Premium')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Subscription;
