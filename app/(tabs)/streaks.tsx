import { COMPLETIONS_COLLECTION_ID, DATABASE_ID, databases, HABITS_COLLECTION_ID } from "@/lib/appwrite";
import { useAuth } from "@/lib/auth-context";
import { Habit, HabitCompletion } from "@/types/database.type";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Query } from "react-native-appwrite";

const StreaksScreen = () => {

    const [habits, setHabits] = useState<Habit[]>();
    const [completedHabits, setCompletedHabits] = useState<HabitCompletion[]>();
    const user = useAuth();


  useEffect(() => {
    if (user) {
      fetchhabits();
      fetchCompletions();

    }
  }, [user]);


  const fetchhabits = async () => {
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          HABITS_COLLECTION_ID,
          [Query.equal("user_id", user?.$id ?? "")]
        );
        setHabits(response.documents as Habit[]);
      } catch (error) {
        console.error;
      }
    };
  
    const fetchCompletions = async () => {
      try {

        const response = await databases.listDocuments(
          DATABASE_ID,
          COMPLETIONS_COLLECTION_ID,
          [
            Query.equal("user_id", user?.$id ?? ""),
          ]
        );
        const completions = response.documents as HabitCompletion[];
        setCompletedHabits(completions);
      } catch (error) {
        console.error;
      }
    };

  return (
    <View>
      <Text>streaks</Text>
    </View>
  );
};

export default StreaksScreen;
