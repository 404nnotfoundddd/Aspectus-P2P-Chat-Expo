import { LinearGradient } from 'expo-linear-gradient'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import ScrollView from '../components/ui/ScrollView'
import Markdown from '../components/ui/Markdown'

const copy = `
# Credits

In minim proident voluptate ad. Id aute proident voluptate eiusmod id aliqua. Eiusmod consectetur sint incididunt velit in sint eiusmod non commodo quis ex sunt. Dolor ullamco ad quis qui consequat incididunt laborum veniam ex pariatur aliqua exercitation pariatur. Est nulla irure exercitation veniam minim nisi aliqua laborum duis.

Nostrud fugiat qui duis ipsum fugiat velit et veniam irure laboris ipsum eiusmod duis eu. Reprehenderit voluptate minim occaecat veniam culpa commodo culpa non adipisicing enim commodo. Officia minim qui mollit officia irure incididunt non aliqua adipisicing adipisicing culpa elit. Ad voluptate magna enim incididunt dolore elit voluptate ipsum.

Tempor nulla nulla commodo incididunt esse ad nostrud sint anim. In magna cupidatat laborum dolor pariatur minim occaecat irure duis consequat cillum. Ad elit Lorem amet ullamco duis qui. Adipisicing id dolor occaecat nisi reprehenderit est occaecat ea duis tempor. Voluptate exercitation irure ut id cillum cupidatat laborum sit mollit cillum officia.

Nostrud pariatur ut ad incididunt officia. Minim occaecat aliqua sunt voluptate et est. Laboris ad nulla anim enim veniam minim minim mollit laboris do.

Ut consequat Lorem consequat eiusmod nulla deserunt duis elit esse magna culpa ut. Proident et eiusmod esse cupidatat Lorem eiusmod. Aliqua anim laborum adipisicing in magna excepteur dolore proident. Excepteur laborum adipisicing ex eiusmod dolor aute et aliquip.

Cillum ad commodo reprehenderit pariatur sit consequat ad. Qui pariatur sit adipisicing et aliqua dolor qui adipisicing irure incididunt. Dolor culpa mollit consectetur ut ullamco consectetur velit amet culpa nostrud labore. Id ut aliqua veniam Lorem ad sunt occaecat sit nulla sint dolore proident.

Aliqua proident commodo aute eiusmod ad est anim. Irure nisi esse sunt irure exercitation in ullamco. Duis ut enim sit exercitation amet excepteur esse minim. Consectetur cillum consequat sint minim.

Veniam elit quis cupidatat incididunt ea esse non proident do. Eu est consequat fugiat nostrud eiusmod ad enim labore. Lorem minim occaecat mollit deserunt veniam consequat officia voluptate deserunt officia. Sunt qui magna esse duis velit dolore laboris ut amet ea quis.

Et officia Lorem aliqua ad commodo reprehenderit duis amet laborum amet minim esse. Cupidatat sint amet sunt sit excepteur sunt mollit elit culpa reprehenderit ipsum fugiat. Veniam exercitation pariatur anim aliqua culpa aliquip velit aute Lorem laboris cupidatat mollit. Quis qui minim consectetur occaecat officia mollit ullamco. Magna cupidatat sit sit culpa velit excepteur amet. Duis ex ipsum quis tempor. Nulla cupidatat aliqua reprehenderit eu magna ullamco fugiat eiusmod.

Veniam sunt id nulla consequat tempor elit labore pariatur sint est. Aute excepteur duis laborum anim ea Lorem quis minim sint proident. Veniam in tempor in eu labore voluptate. Fugiat consequat reprehenderit mollit incididunt cupidatat. Adipisicing tempor dolor voluptate amet incididunt. Est minim labore ullamco dolor. Labore et fugiat consequat nostrud cillum Lorem excepteur consectetur reprehenderit officia consectetur.
`

const Credits = () => {
    return (
        <SafeAreaView className='bg-[#1b1b1b]'>
            <Stack.Screen name="credits" options={{ title: 'Credits', headerShown: false }} />
            <ScrollView contentContainerStyle={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: 40,
            }} className='w-full h-full bg-transparent'>
                <LinearGradient dither={false} colors={['#1b1b1b', '#c576bc']} className='w-full h-full'>
                    <Markdown content={copy} />
                </LinearGradient>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Credits