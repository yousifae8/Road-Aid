import { StyleSheet, View } from "react-native";
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';

export interface DropdownItem {
    label: string;
    value: string;
}

export const carBrands: DropdownItem[] = [
    { label: 'Toyota', value: 'Toyota' },
    { label: 'Hyundai', value: 'Hyundai' },
    { label: 'Kia', value: 'Kia' },
    { label: 'Nissan', value: 'Nissan' },
    { label: 'Honda', value: 'Honda' },
    { label: 'Ford', value: 'Ford' },
    { label: 'Chevrolet', value: 'Chevrolet' },
    { label: 'Volkswagen', value: 'Volkswagen' },
    { label: 'Mazda', value: 'Mazda' },
    { label: 'Mitsubishi', value: 'Mitsubishi' },
    { label: 'Mercedes-Benz', value: 'Mercedes-Benz' },
    { label: 'BMW', value: 'BMW' },
    { label: 'Audi', value: 'Audi' },
    { label: 'Jeep', value: 'Jeep' },
    { label: 'Renault', value: 'Renault' },
    { label: 'Peugeot', value: 'Peugeot' },
    { label: 'MG', value: 'MG' },
    { label: 'Chery', value: 'Chery' },
    { label: 'BYD', value: 'BYD' },
    { label: 'Geely', value: 'Geely' },
    { label: 'Suzuki', value: 'Suzuki' },
    { label: 'Other', value: 'Other' },
];

export const carModelsByBrand: Record<string, DropdownItem[]> = {
    Toyota: [
        { label: 'Corolla', value: 'Corolla' },
        { label: 'Camry', value: 'Camry' },
        { label: 'Yaris', value: 'Yaris' },
        { label: 'RAV4', value: 'RAV4' },
        { label: 'Land Cruiser', value: 'Land Cruiser' },
        { label: 'Hilux', value: 'Hilux' },
        { label: 'Fortuner', value: 'Fortuner' },
    ],
    Hyundai: [
        { label: 'Elantra', value: 'Elantra' },
        { label: 'Tucson', value: 'Tucson' },
        { label: 'Accent', value: 'Accent' },
        { label: 'Santa Fe', value: 'Santa Fe' },
        { label: 'Sonata', value: 'Sonata' },
        { label: 'Creta', value: 'Creta' },
    ],
    Kia: [
        { label: 'Cerato', value: 'Cerato' },
        { label: 'Sportage', value: 'Sportage' },
        { label: 'Rio', value: 'Rio' },
        { label: 'Sorento', value: 'Sorento' },
        { label: 'Picanto', value: 'Picanto' },
        { label: 'K5', value: 'K5' },
    ],
    Nissan: [
        { label: 'Sunny', value: 'Sunny' },
        { label: 'Sentra', value: 'Sentra' },
        { label: 'Qashqai', value: 'Qashqai' },
        { label: 'Patrol', value: 'Patrol' },
        { label: 'Altima', value: 'Altima' },
        { label: 'X-Trail', value: 'X-Trail' },
    ],
    Honda: [
        { label: 'Civic', value: 'Civic' },
        { label: 'Accord', value: 'Accord' },
        { label: 'CR-V', value: 'CR-V' },
        { label: 'City', value: 'City' },
        { label: 'HR-V', value: 'HR-V' },
    ],
    Ford: [
        { label: 'Focus', value: 'Focus' },
        { label: 'Fusion', value: 'Fusion' },
        { label: 'Explorer', value: 'Explorer' },
        { label: 'F-150', value: 'F-150' },
        { label: 'Mustang', value: 'Mustang' },
    ],
    Chevrolet: [
        { label: 'Optra', value: 'Optra' },
        { label: 'Aveo', value: 'Aveo' },
        { label: 'Cruze', value: 'Cruze' },
        { label: 'Captiva', value: 'Captiva' },
        { label: 'Tahoe', value: 'Tahoe' },
    ],
    Volkswagen: [
        { label: 'Golf', value: 'Golf' },
        { label: 'Passat', value: 'Passat' },
        { label: 'Tiguan', value: 'Tiguan' },
        { label: 'Polo', value: 'Polo' },
        { label: 'Jetta', value: 'Jetta' },
    ],
    'Mercedes-Benz': [
        { label: 'C-Class', value: 'C-Class' },
        { label: 'E-Class', value: 'E-Class' },
        { label: 'S-Class', value: 'S-Class' },
        { label: 'A-Class', value: 'A-Class' },
        { label: 'GLC', value: 'GLC' },
        { label: 'G-Class', value: 'G-Class' },
    ],
    BMW: [
        { label: '3 Series', value: '3 Series' },
        { label: '5 Series', value: '5 Series' },
        { label: '7 Series', value: '7 Series' },
        { label: 'X3', value: 'X3' },
        { label: 'X5', value: 'X5' },
        { label: 'X6', value: 'X6' },
    ],
    Audi: [
        { label: 'A3', value: 'A3' },
        { label: 'A4', value: 'A4' },
        { label: 'A6', value: 'A6' },
        { label: 'Q3', value: 'Q3' },
        { label: 'Q5', value: 'Q5' },
        { label: 'Q7', value: 'Q7' },
    ],
    Jeep: [
        { label: 'Grand Cherokee', value: 'Grand Cherokee' },
        { label: 'Wrangler', value: 'Wrangler' },
        { label: 'Renegade', value: 'Renegade' },
        { label: 'Compass', value: 'Compass' },
    ],
    MG: [
        { label: 'MG 5', value: 'MG 5' },
        { label: 'MG 6', value: 'MG 6' },
        { label: 'MG ZS', value: 'MG ZS' },
        { label: 'MG RX5', value: 'MG RX5' },
        { label: 'MG HS', value: 'MG HS' },
    ],
    Renault: [
        { label: 'Megane', value: 'Megane' },
        { label: 'Duster', value: 'Duster' },
        { label: 'Logan', value: 'Logan' },
        { label: 'Kadjar', value: 'Kadjar' },
        { label: 'Stepway', value: 'Stepway' },
    ],
    Peugeot: [
        { label: '301', value: '301' },
        { label: '2008', value: '2008' },
        { label: '3008', value: '3008' },
        { label: '5008', value: '5008' },
        { label: '508', value: '508' },
    ],
};

const defaultModels: DropdownItem[] = [
    { label: 'Sedan', value: 'Sedan' },
    { label: 'SUV', value: 'SUV' },
    { label: 'Hatchback', value: 'Hatchback' },
    { label: 'Pickup / Truck', value: 'Pickup' },
    { label: 'Coupe', value: 'Coupe' },
    { label: 'Other', value: 'Other' },
];

export const getModelsForBrand = (brand: string): DropdownItem[] => {
    return carModelsByBrand[brand] || defaultModels;
};

interface DroplistProps {
    data?: DropdownItem[];
    placeholder?: string;
    searchPlaceholder?: string;
    value?: string | null;
    onSelect?: (value: string) => void;
    disabled?: boolean;
    dropdownPosition?: 'auto' | 'top' | 'bottom';
}

const Droplist = ({
    data = carBrands,
    placeholder = "Select car brand",
    searchPlaceholder = "Search...",
    value: externalValue,
    onSelect,
    disabled = false,
    dropdownPosition = "top",
}: DroplistProps) => {
    const [internalValue, setInternalValue] = useState<string | null>(null);
    const selectedValue = externalValue !== undefined ? externalValue : internalValue;

    return (
        <View style={styles.container}>
            <Dropdown
                style={[styles.dropdown, disabled && styles.disabledDropdown]}
                containerStyle={styles.listContainer}
                placeholderStyle={[styles.placeholderStyle, disabled && styles.disabledPlaceholder]}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                itemTextStyle={styles.itemTextStyle}
                data={data}
                search
                disable={disabled}
                dropdownPosition={dropdownPosition}
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder={placeholder}
                searchPlaceholder={searchPlaceholder}
                value={selectedValue}
                onChange={item => {
                    setInternalValue(item.value);
                    if (onSelect) {
                        onSelect(item.value);
                    }
                }}
            />
        </View>
    );
};

export default Droplist;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
    dropdown: {
        width: '100%',
        height: 42,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: '#fafafa',
    },
    disabledDropdown: {
        backgroundColor: '#f0f0f0',
        borderColor: '#e0e0e0',
        opacity: 0.7,
    },
    listContainer: {
        borderRadius: 10,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e5e5e5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 8,
        overflow: 'hidden',
    },
    placeholderStyle: {
        fontSize: 12,
        color: '#999',
    },
    disabledPlaceholder: {
        color: '#bbb',
    },
    selectedTextStyle: {
        fontSize: 12.5,
        fontWeight: '600',
        color: '#222',
    },
    itemTextStyle: {
        fontSize: 12.5,
        color: '#333',
    },
    inputSearchStyle: {
        height: 38,
        fontSize: 12.5,
        borderRadius: 8,
    },
});