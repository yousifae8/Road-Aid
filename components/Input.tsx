import { StyleSheet, TextInput, View, ViewStyle, TextStyle } from "react-native";

interface InputProps {
    placeholder: string;
    placeholderTextColor?: string;
    secureTextEntry?: boolean;
    style?: TextStyle;
    containerStyle?: ViewStyle;
}

const Input = ({
    placeholder,
    placeholderTextColor = "#999",
    secureTextEntry,
    style,
    containerStyle,
}: InputProps) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <TextInput
                style={[styles.input, style]}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    input: {
        fontSize: 12.5,
        fontWeight: '500',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 8,
        height: 42,
        backgroundColor: '#fafafa',
        color: '#222',
    },
});