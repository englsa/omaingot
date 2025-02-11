import { StyleSheet, Text, View } from "react-native";

const Order =()=>{
    return(
        <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={styles.text}>This is Order</Text>
        </View>
    )
}
export default Order;
const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "500",
        color: "#000",
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
   
});