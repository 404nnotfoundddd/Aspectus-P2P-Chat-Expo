export const arrayBufToString = (buf: ArrayBuffer): string => {
    const array = Array.from(new Uint8Array(buf))
    return String.fromCharCode.apply(null, array)
}