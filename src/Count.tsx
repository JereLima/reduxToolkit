import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import {
  clearValueCounter,
  decrementValueCounter,
  incrementValueCounter,
} from "./store/counter";

const Count: React.FC = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.counter);

  function handleIncrement() {
    dispatch(incrementValueCounter());
  }

  function handleDecrement() {
    dispatch(decrementValueCounter());
  }

  function handleClear() {
    dispatch(clearValueCounter());
  }

  return (
    <View style={styles.container}>
      <Text>Veja seu contador!</Text>
      <Text>{value}</Text>
      <View style={styles.row}>
        <Button onPress={handleIncrement} title="Sobe" />
        <Button onPress={handleDecrement} title="Desce" />
        <Button onPress={handleClear} title="Limpar" />
      </View>
    </View>
  );
};

export default Count;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
});
