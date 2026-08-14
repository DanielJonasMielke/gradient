import { Slot } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import '../global.css';

export default function RootLayout() {
  const { setColorScheme } = useColorScheme();

  // Dark is the default; light will become an in-app toggle later.
  useEffect(() => setColorScheme('dark'), [setColorScheme]);

  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  );
}
