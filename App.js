import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import HeadCard from "./component/HeadCard";

import SecondCard from "./component/SecondCard";

import Clock from "./component/Clock";

import TeamCard from "./component/TeamCard";

import QuickLinks from "./component/QuickLinks";

import Celebrations from "./component/Celebrations";

import MyTasks from "./component/MyTasks";
export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <HeadCard />

        {/* <StatusBar style="auto" /> */}
      </View>
      <View style={styles.MainContainer}>
        <SecondCard />
      </View>

      <Clock style={styles.Clock} />
      <TeamCard />
      <QuickLinks />
      <Celebrations />
      <MyTasks/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  MainContainer: {
    marginTop: 5,
  },
  Clock: {
    marginTop: 25,
  },
});
