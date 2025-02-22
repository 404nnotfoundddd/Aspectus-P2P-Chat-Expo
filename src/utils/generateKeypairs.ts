import { RSA } from 'react-native-rsa-native'

export const generateKeypairs = async () => {
    const keys = await RSA.generateKeys(5096)
    console.log(keys)
    return { publicKey: keys.public, privateKey: keys.private }
}
