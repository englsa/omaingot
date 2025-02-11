import { text } from "@fortawesome/fontawesome-svg-core";
import { StyleSheet, Text, View } from "react-native";

const Home =()=>{
    return(
        <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}} >
            <Text style = {styles.text}>This is home</Text>
        </View>
    )
}
export default Home;
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