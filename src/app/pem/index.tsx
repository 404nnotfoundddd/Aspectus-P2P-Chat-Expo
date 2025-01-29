import ScrollView from '@/components/ui/ScrollView'
import Text from '@/components/ui/Text'
import { View } from 'moti'
import { useEffect, useState } from 'react'
import { Platform } from 'react-native'

const msg = 'Hello World'
const publiKeyForAndroid = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAvEr7Rp/xY03YIgsrKVVp
ed3PcLO45bVx02nhg76TjqmI5oJf5vN/g5cY8x3L9RORB7WYeqhHJwv/Ndt+6N0x
4loIaiLSfMk40kxABOMcRvqngLgQ7A+dbSrwry5twnzw/T19lXmEuhU5dqTca7KN
LarhRDqwplkIutMdlr4yXYRLo+ksfkwVQ1LYs0jniI1p0RhYJn0/nItlakQU7vtz
xnMAJJsYyo4/gHWOa9Hw7ecLfuv1+cWcwZqGmGW1BkXhalZIOkH7WlOH9MR2Xh9f
7u4AjQpjPTVT/W3H13L/EA/igswvY/Lk642aB6C973nqs5c21bpbYfMEfY2uoCRI
qmyA+PkNQxwM2IqYCz3pndhbkjcruMexowORBJsCB72pse6X96Ho/tm9GW9e4h9T
PeSmXffirkZQVqVROZtOf3Sm+bUFCZ7+OqlQPHOX3An25SRq9FsE6XuJTwNwrSkV
3rOFQFLL1Q7ETOi2ml+gcbVR9Y+MCTn6Kh1YMCNWO4FzkkQRDG/K/MkvE6Xos8BA
4v1skANpTXPvpD9UOuO+awcRDKKZfKJkFMVs9uevFg+p7FnrLEgCTaypjBM3HULf
6uGcBDUQHa+bVVI7Qif7BhHcAd4z4FFzEPBNh2myPaXID9q5CGrhGI+DR7LQ6r+X
+XhXYnwwVpPSlWN0SYKa+AkCAwEAAQ==
-----END PUBLIC KEY-----`

const Pem = () => {
    const [publicKey, setPublicKey] = useState<string | null>(null)
    const [privateKey, setPrivateKey] = useState<string | null>(null)
    const [encrypted, setEncrypted] = useState<ArrayBuffer | null>(null)
    const [decrypted, setDecrypted] = useState<string | null>(null)

    useEffect(() => {
        (async () => {
            if (
                Platform.OS === 'web'
            ) {
                const { decryptWithWebPem, encryptWithWebPem, generatePemKeypairsWeb, revertToOriginalPrivateKey, revertToOriginalPublicKey } = await import('@/utils')
                const { publicKey, privateKey, privateKeyPem, publicKeyPem } = await generatePemKeypairsWeb()
                console.log({
                    publicKey,
                    privateKey,
                    privateKeyPem,
                    publicKeyPem
                })

                setPublicKey(publicKeyPem)
                setPrivateKey(privateKeyPem)

                const starte = performance.now()
                const encrypted = await encryptWithWebPem(msg, publicKey)
                console.log('encrypted:', encrypted)
                setEncrypted(encrypted)
                console.log('Time taken to encrypt', performance.now() - starte)

                const startd = performance.now()
                const decrypted = await decryptWithWebPem(encrypted, privateKey)
                setDecrypted(decrypted)
                console.log('Time taken to decrypt', performance.now() - startd)

                const start = performance.now()
                const reverted = await revertToOriginalPrivateKey(privateKeyPem)
                const revertedPublic = await revertToOriginalPublicKey(publicKeyPem)
                console.log({
                    publicKeyPem,
                    reverted,
                    revertedPublic,
                    isSame: JSON.stringify(reverted) === JSON.stringify(privateKey) && JSON.stringify(reverted) === JSON.stringify(publicKey)
                })
                console.log('Time taken to revert keys', performance.now() - start)
            } else {
                const generateKeypairs = (await import('@/utils')).generateKeypairs
                const { privateKey, publicKey } = await generateKeypairs()
                const { RSA } = await import('react-native-rsa-native')

                console.log('encrypted:', RSA.encrypt(msg, publiKeyForAndroid))

                setPublicKey(publicKey)
                setPrivateKey(privateKey)
            }



        })()

    }, [])

    return (
        <ScrollView>
            <View className='flex flex-col gap-10 w-full items-center'>
                <Text className='text-xl text-black text-sm'>{msg}</Text>
                <Text className='text-xl text-black text-sm'>{decrypted}</Text>
                <Text className='text-xl text-black text-sm'>{`Encrypted: ${encrypted}`}</Text>
                <Text className='text-xl text-black text-sm'>{publicKey}</Text>
                <Text className='text-xl text-black text-sm'>{privateKey}</Text>
            </View>
        </ScrollView>
    )
}

export default Pem