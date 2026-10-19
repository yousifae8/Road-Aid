import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Link from "../components/Link";
import Button from "../components/Button";
import Droplist, { getModelsForBrand } from "../components/Droplist";

const Signup = () => {
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
    const [selectedModel, setSelectedModel] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            <Card>
                <View style={styles.header}>
                    <Text style={styles.title}>Welcome to RoadAid!</Text>
                    <Text style={styles.subtitle}>Fill in your details to create an account</Text>
                </View>

                {/* Form Row 1: Username & Email */}
                <View style={styles.row}>
                    <Input placeholder="Username" />
                    <Input placeholder="Email" />
                </View>

                {/* Form Row 2: Phone Number */}
                <View style={styles.row}>
                    <Input placeholder="Phone number" />
                </View>

                {/* Form Row 3: Password & Confirm Password */}
                <View style={styles.row}>
                    <Input placeholder="Password" secureTextEntry />
                    <Input placeholder="Confirm password" secureTextEntry />
                </View>

                {/* Form Row 4: Car Brand & Model (Cascading Category & Model) */}
                <View style={styles.row}>
                    <Droplist
                        placeholder="Car Brand"
                        value={selectedBrand}
                        onSelect={(brand) => {
                            setSelectedBrand(brand);
                            setSelectedModel(null); // Reset model when brand changes
                        }}
                    />
                    <Droplist
                        placeholder={selectedBrand ? "Car Model" : "Select Brand"}
                        data={selectedBrand ? getModelsForBrand(selectedBrand) : []}
                        value={selectedModel}
                        disabled={!selectedBrand}
                        onSelect={(model) => setSelectedModel(model)}
                    />
                </View>

                {/* Submit Button */}
                <View style={styles.fullWidth}>
                    <Button title="Register" onClick={() => { }} />
                </View>

                <Text style={styles.footerText}>
                    Have an account? <Link title="login" onClick={() => { }} />
                </Text>
            </Card>
        </View>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#439578ff",
        paddingVertical: 16,
    },
    header: {
        alignItems: 'center',
        marginBottom: 6,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    subtitle: {
        fontSize: 12,
        color: '#777',
        marginTop: 2,
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        gap: 10,
    },
    fullWidth: {
        width: '100%',
    },
    footerText: {
        fontSize: 14,
        color: '#444',
        marginTop: 4,
    },
});