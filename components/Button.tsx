import { StyleSheet, TouchableOpacity, Text } from "react-native";


const Button = ({ title, onClick }: { title: string, onClick: () => void }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onClick}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 44,
        backgroundColor: "#439578ff",
        borderRadius: 8,
        paddingHorizontal: 12,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#fff",
    },
});