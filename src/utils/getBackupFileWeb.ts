export const getBackupFileWeb = (): Promise<string> => new Promise((resolve, reject) => {
    const inputElement = document.createElement('input')
    inputElement.type = 'file'
    inputElement.accept = '.aspectus'
    inputElement.style.display = 'hidden'
    inputElement.multiple = false
    inputElement.id = 'importFile'

    inputElement.onchange = (e: any) => {
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.onload = (e: any) => resolve(e.target.result as string)

        reader.readAsText(file)

        inputElement.remove()
    }

    document.body.appendChild(inputElement)
    inputElement.click()
})