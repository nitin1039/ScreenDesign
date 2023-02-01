import { View, Text, StyleSheet } from "react-native";

const MainCard = props => {
  return (
    <View style={{...Styles.Container, ...props.style}}>
      {props.children}
    </View>
  );
};

export default MainCard;

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
   
    backgroundColor: "#d8d8d8",
    height: 260,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
    
  },
});
