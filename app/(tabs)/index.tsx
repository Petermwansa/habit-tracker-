import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.constainer}>
      <Text>Home?</Text>
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
