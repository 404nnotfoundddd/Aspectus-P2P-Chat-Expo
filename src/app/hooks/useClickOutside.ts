import { type RefObject, useEffect } from 'react'

const useClickOutside = (
    ref: RefObject<HTMLElement | undefined>,
    callback: () => void,
    addEventListener = true,
) => {
    const handleClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
            callback()
        }
    }

    useEffect(() => {
        if (addEventListener) {
            document.addEventListener('click', handleClick)
        }

        return () => {
            document.removeEventListener('click', handleClick)
        }
    })
}


export default useClickOutside