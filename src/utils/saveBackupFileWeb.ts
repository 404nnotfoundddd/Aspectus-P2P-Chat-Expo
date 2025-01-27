export const saveBackupFileWeb = async (data: string) => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(data)
    const downloadAnchorNode = document.createElement('a')

    downloadAnchorNode.style.display = 'none'
    downloadAnchorNode.setAttribute("href", dataStr)
    downloadAnchorNode.setAttribute("download", `${new Date().toLocaleString()}.aspectus`)
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click()
    downloadAnchorNode.remove()
}
