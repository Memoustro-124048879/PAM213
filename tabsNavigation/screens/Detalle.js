import { View, Text, StyleSheet } from "react-native";

export default function Detalle({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalle de usuario</Text>
            <Text style={styles.title2}>Usando Navegation Stack</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
    },
    title2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
        color: '#037dffce',
    },
});