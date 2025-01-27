import * as DocumentPicker from 'expo-document-picker';

export const getBackupFile = async () => {
    const document = DocumentPicker.getDocumentAsync({
        type: 'text/aspectus',
        multiple: false,
    })

    const fileContent = await document
    const content = await fileContent.assets![0]!.file!.text()

    return content
}