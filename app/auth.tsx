import { useAuth } from "@/lib/auth-context";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

const AuthScreen = () => {
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>("");

  const theme = useTheme();
  const router = useRouter();

  const { signIn, signUp } = useAuth();

  const handleSwitchMode = () => {
    setIsSignup((prev) => !prev);
  };

  const handleAuth = async () => {
    if (!email || !password) {
      setError("Please fill in all the fields");
      return;
    }

    if (password.length < 6) {
      setError("The password must be at least 6 characters long");
      return;
    }
    setError(null);

    if (isSignup) {
      const error = await signUp(email, password);
      if (error) {
        setError(error);
        return;
      }
    } else {
      const error = await signIn(email, password);
      if (error) {
        setError(error);
        return;
      }

      router.replace('/');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title} variant="headlineMedium">
          {isSignup ? "Create an Acount" : "Welcome back"}
        </Text>

        <Text style={styles.label}>Enter Your Email</Text>
        <TextInput
          mode="outlined"
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="example@mail.com"
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Enter Your Password</Text>
        <TextInput
          mode="outlined"
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry
          onChangeText={setPassword}
        />
        

        {error && <Text style={{ color: theme.colors.error }}>{error}</Text>}

        <Button style={styles.button} onPress={handleAuth} mode="contained">
          {isSignup ? "Sign Up" : "Sign In"}
        </Button>
        <Button
          onPress={handleSwitchMode}
          style={styles.switchModeBtn}
          mode="text"
        >
          {isSignup
            ? "Already have an Account. Sign In? "
            : "Dont have an account? Create Account"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 24,
  },
  label: {
    marginBottom: 8,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    textAlign: "center",
    marginTop: 8,
  },
  switchModeBtn: {
    marginTop: 20,
  },
  error: {
    color: "red",
  },
});
