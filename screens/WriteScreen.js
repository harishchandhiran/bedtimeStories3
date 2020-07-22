import React from 'react'
import { View,TextInput,ScrollView,TouchableOpacity,Text,StyleSheet } from 'react-native'
import { Header } from 'react-native-elements';

export default class WriteScreen extends React.Component {
    constructor() {
        super();
        this.state = {
          text: '',
        };
      }
    
      

    render(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;

        var yyyy = today.getFullYear();
        if (dd < 10) {
        dd = '0' + dd;
        }
        if (mm < 10) {
        mm = '0' + mm;
        }
        today = dd + '-' + mm + '-' + yyyy;
        return (
            <ScrollView>
                <View>
                    <Header
                        backgroundColor={'orange'}
                        centerComponent={{
                            text: 'Bedtime Stories',
                            style: { color: 'white', fontSize: 20 },
                        }}
                        leftComponent={{
                            text: today,
                            style: { color: 'white', fontSize: 13 },
                        }}
                    />
                    
                    <TextInput
                        multiline
                        numberOfLines={4}
                        style={{
                            marginTop: 50,
                            width: '80%',
                            alignSelf: 'center',
                            height: 40,
                            borderWidth: 4,
                            paddingLeft: 20,
                            paddingRight: 10,
                            fontSize: 18,
                        }}
                        onChangeText={(text) => {
                            this.setState({ text: text });
                        }}
                        value={this.state.text}
                    />

                    <TouchableOpacity 
                        style={{width: '50%',
                            height: 55,
                            alignSelf: 'center',
                            padding: 10,
                            margin: 10,
                            marginLeft: 100,
                        }}
                        >
                        <Text style={{ fontSize: 20, fontWeight: 'bold',color: 'orange' }}>SUBMIT</Text>
                    </TouchableOpacity>

                    <ScrollView>
                        <Text style={{color: 'orange',
                                    marginLeft: 50,
                                    marginRight: 20,
                                    fontSize: 20,
                                    marginTop: 40,
                                    marginBottom: 20}}>{this.state.text}</Text>
                    </ScrollView>
                </View>
            </ScrollView>
        )
    }
}