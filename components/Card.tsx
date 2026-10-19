import { ScrollView, StyleSheet, View } from "react-native";
import type { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
    return (
        <View style={styles.cardWrapper}>
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                {children}
            </ScrollView>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    cardWrapper: {
        width: '92%',
        maxWidth: 370,
        maxHeight: "88%",
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 18,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 6,
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        flexGrow: 1,
        paddingVertical: 8,
    },
});