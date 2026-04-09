import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function LoginScreen() { 
    const styles = StyleSheet.create({ 
container: { 
flex: 1, 
padding: 20, 
}, 
title: { 
    color: '#800000', 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 30, 
}, 
card: { 
    backgroundColor: '#f8f0f0', 
    padding: 20, 
    borderRadius: 10, 
}, 
input: { 
    backgroundColor: '#2a2a4e', 
    color: '#ffffff', 
    paddingVertical: 12, 
    paddingHorizontal: 16, 
    borderRadius: 8, 
    marginBottom: 15, 
    fontSize: 16, 
}, 
button: { 
    backgroundColor: '#ffffff', 
    paddingVertical: 14, 
    borderRadius: 8, 
    alignItems: 'center',
    borderWidth:0.5,
    borderColor:'#800000', 
}, 
buttonText: { 
    color: '#800000', 
    fontWeight: 'bold', 
    fontSize: 16, 
}, 
}) 
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const handleLogin = () => { 
if (username === '' || password === '') { 
Alert.alert('Username or Password is empty'); 
}  else { 
router.replace('/'); 
} 
};
const router = useRouter();

return( 
<View style={styles.container}> 
<Text style={styles.title}>Login</Text> 
<View> 
<TextInput
placeholder='username or email' 
placeholderTextColor="#999" 
style={styles.input} 
value={username}
onChangeText={setUsername}
/> 
<TextInput  
placeholder='Password' 
placeholderTextColor="#999" 
secureTextEntry 
style={styles.input}
value={password}
onChangeText={setPassword}
/> 
<TouchableOpacity style={styles.button} onPress={handleLogin}>
<Text style={styles.buttonText}>Login</Text>
</TouchableOpacity> 
</View> 
</View> 
) 
}