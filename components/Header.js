import React from 'react';
import { View, StyleSheet } from 'react-native';

// import { Container } from './styles';

const Header = props => {
  return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height:90,
        paddingTop:36,
        backgroundColor:'#CE9C15',
        alignContent:'center',
        alignItems:'center',

    },
    headerTitle :{
       color: 'black',
       fontSize:18
    }
})
export default Header;