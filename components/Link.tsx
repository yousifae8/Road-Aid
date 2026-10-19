import { StyleSheet, Text } from "react-native";

const Link = ({ title, onClick }: { title: string, onClick: () => void }) => {
    return (
        <Text style={styles.text} onPress={onClick}>{title}</Text>
    )
}

export default Link

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#34d0d3ff",
    },
});