import "../global.css";

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <ThemedView className="flex-1">
      <StatusBar style="auto" />
      <SafeAreaView className="flex-1">
        <ThemedView className="flex-1 items-center justify-center">
          <ThemedText className="font-bold">Hello world!</ThemedText>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}
