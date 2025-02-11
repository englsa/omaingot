
import React, { useEffect } from 'react'

import { Image, View, Text, StyleSheet } from 'react-native'
const logo = require('../../assets/images/logo-quochuy.png')




export default function SplashScreen(props: any) {
    const { navigation } = props;

    useEffect(() => {
        goToHome()
    })

    const goToHome = () => {
        setTimeout(() => {
            navigation &&
                navigation.navigate('Login');
        }, 2000);
    }
    return (

        <View style={styles.container}>
            <Text style={styles.txtTitle}> {"Omaingot.vn"}</Text>
            <Text style={styles.txtSlogan}> {"Thế giới đồ sỉ lẻ"}</Text>
        </View>
    )
}

const btn = {
    padding: 10,
    borderRadius: 3
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: "center",
        gap: 20,
        padding: 10,
    },
    txtTitle:{
        textAlign: "center",
        fontSize: 18,
        color: "#495057"
    },
    txtSlogan: {
        textAlign: "center",
        fontSize: 25,
        color: "#f87d13"
    },
    logoImg: {
        justifyContent: "center",
        alignContent:"center",
        alignItems:"center"
    }
})