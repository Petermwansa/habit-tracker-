import { useAuth } from "@/lib/auth-context";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Index() {

  const { signOut } = useAuth()

  return (
    <View style={styles.constainer}>
      <Text>Home?</Text>
      <Button mode="text" onPress={signOut}> Sign Out</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    width: 100,
    height: 30,
    backgroundColor: 'coral',
    textAlign: 'center',
    borderRadius: 8
  },
});
