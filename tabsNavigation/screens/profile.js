import { View, Text, StyleSheet,Pressable,Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Detalle from './Detalle';

export default function Profile({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Ionicons name="person-outline" size={28} color="green" />
                <Text style={styles.title}>Perfil de usuario</Text>

                <Pressable style={[styles.button]} onPress={() => navigation.navigate('Detalle')}>
                <Text style={styles.buttonText}>Detalles de usuario</Text>
            </Pressable>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    iconRow: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        padding: 15,
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'green',
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#007BFF', 
    },
    buttonText: {
        color: '#ffffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});