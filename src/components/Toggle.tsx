import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';

const Toggle: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {isEnabled ? 'Switch is ON' : 'Switch is OFF'}
      </Text>
      <Switch
        value={isEnabled}
        onValueChange={setIsEnabled}
        testID="toggle-switch"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Toggle;
