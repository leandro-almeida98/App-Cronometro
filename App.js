import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI'
    }
    this.timer  = null;
    this.limpar = this.limpar.bind(this);
    this.vai = this.vai.bind(this);
  }
  vai(){
    if(this.timer != null){
      // parar o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        botao : 'VAI'
      })
    }else{
      this.setState({
        botao : 'PARAR'
      })
      this.timer = setInterval(()=> {
        this.setState({
          numero: this.state.numero + 0.1
        });
      }, 100);
      }
  }
  limpar(){
    alert('VAI2')
  }

  render(){
    return(
      <View style={styles.container}>
        <Image source={require('./src/cronometro.png')} style={styles.cronometro} />
        <Text style={styles.timer}>
        {this.state.numero.toFixed(1)}
        </Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',

  },
  cronometro:{

  },
  timer:{
    marginTop: -170,
    color: '#FFF',
    fontSize:65,
    fontWeight: 'bold'
  },
  
  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height:70,
    // backgroundColor:'red'

  },
  btn:{
   flex: 1,
   justifyContent: 'center',
   alignItems:'center',
   backgroundColor: '#FFF',
   height:40,
   margin:17,
   borderRadius:9
  },
  btnTexto:{
    fontWeight: 'bold',
    fontSize: 20,
    color:'#00aeef'
  }
});
export default App;