import * as FileSystem from 'expo-file-system'

export const saveBackupFile = async (data: string) => {
    const { StorageAccessFramework } = FileSystem
    const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync()
    // Check if permission granted
    if (permissions.granted) {
        try {
            // Get the directory uri that was approved
            const directoryUri = permissions.directoryUri

            // Create file and pass it's SAF URI
            const fileUri = await StorageAccessFramework.createFileAsync(directoryUri, `${new Date().toLocaleString()}.aspectus`, 'text/plain')

            await FileSystem.writeAsStringAsync(fileUri, data, { encoding: FileSystem.EncodingType.UTF8 });
        } catch (error) {
            console.error(error)
        }

    } else {
        alert("You must allow permission to save.")
    }
}
