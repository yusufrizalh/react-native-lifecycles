import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import Home from "./Home";
import About from "./About";

// komentar satu baris
/* komentar multi baris
  # komponen dalam React Native dibagi menjadi 2:
    - functional component: function atau const 
    - class component
*/

// functional component dengan const
const FunctionalComponent = () => {
  return (
    <View>
      <Text>Belajar Functional Component di React Native</Text>
    </View>
  );
};

// class component
class ClassComponent extends Component {
  // lifecycle constructor: inisialisasi nilai awal
  constructor() {
    super();
    // state: fungsi untuk membuat nilai awal
    // state harus berada didalam constructor
    this.state = {
      counter: 0, // counter bernilai awal 0
    };
  }
  incrementCounter() {
    // setState: untuk mengubah nilai awal
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrementCounter() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  resetCounter() {
    this.setState({
      counter: 0,
    });
  }

  // lifecycle
  render() {
    return (
      <View>
        <Text>Count: {this.state.counter}</Text>
        <Button onPress={this.incrementCounter.bind(this)} title="Counter +" />
        <Button onPress={this.decrementCounter.bind(this)} title="Counter -" />
        <Button onPress={this.resetCounter.bind(this)} title="Counter 0" />
        <Button title="Click me" disabled={true} />
        <Button color="red" title="Red Button" />
      </View>
    );
  }
}

/*
  # react native lifecycle
    - inisialisasi: constructor
*/

class ReactLifeCycle extends Component {
  // lifecycle constructor
  constructor() {
    super();
    this.state = {
      nama: "Sebastian",
      usia: 30,
      alamat: "Jakarta",
      toggle: true,
    };
  }

  toggleFunction = () => {
    this.setState((state) => ({
      toggle: !this.state.toggle,
    }));
  };

  // lifecycle mounting: componentWillMount, render, componentDidMount
  componentWillMount() {
    console.log("Lifecycle componentWillMount");
    console.log("saya muncul sebelum render");
    // koneksi ke web server
  }

  render() {
    console.log("Lifecycle render");
    return (
      <View>
        {this.state.toggle ? <Text>Nama adalah {this.state.nama}</Text> : null}
        <Text>
          Contoh Toggle pada Text
          {/* komentar */}
        </Text>
        <Button
          title="Ubah nama"
          onPress={() => this.setState((nama) => ({ nama: "Alexander" }))}
        />
        <Button title="Show/Hide Nama" onPress={this.toggleFunction} />
      </View>
    );
  }

  componentDidMount() {
    console.log("Lifecycle componentDidMount");
  }

  componentDidUpdate() {
    console.log("Lifecycle componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Lifecycle componentWillUnmount");
  }
}

const App = () => {
  return (
    <View style={myStyles.container}>
      {/* <FunctionalComponent />
      <ClassComponent />
      <Home />
      <About /> */}
      <ReactLifeCycle />
    </View>
  );
};

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
