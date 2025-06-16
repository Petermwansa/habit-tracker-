import { AuthProvider, useAuth } from "@/lib/auth-context";
import { Stack, useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isLoadingUser } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    const inAuthGroup = segments[0] === "auth"
    if (!user && !inAuthGroup && !isLoadingUser) {
      // Use setTimeout to ensure navigation happens after mount
      const timer = setTimeout(() => {
        router.replace("./auth");
      }, 0);

      return () => clearTimeout(timer);
    } else if (user && inAuthGroup && !isLoadingUser) {
      router.replace('/')
    }
  }, [user, router, segments]);

  return <>{children}</>;
}

const RootLayout = () => {
  return (
    <AuthProvider>
      <RouteGuard>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </RouteGuard>
    </AuthProvider>
  );
};

export default RootLayout;
