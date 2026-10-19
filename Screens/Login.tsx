import { StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";
import Card from "../components/Card";
import Button from "../components/Button";
import Link from "../components/Link";


const Login = () => {
    return (
        <View style={styles.container}>
            <Card>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>Welcome to RoadAid!</Text>
                </View>
                <View>
                    <Input placeholder="Enter your username" placeholderTextColor="#999" />
                </View>
                <View>
                    <Input placeholder="Enter your password" placeholderTextColor="#999" />
                </View>
                <View>
                    <Button title="Login" onClick={() => { }} />
                </View>
                <Text style={styles.text}>Don't have an account? <Link title="register" onClick={() => { }} /></Text>
            </Card>

        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#439578ff",
        gap: 20

    },

    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#439578ff",
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});