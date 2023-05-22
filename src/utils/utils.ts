export const capitalise = (word: string) : string => {
    const first =  word.charAt(0).toUpperCase()
    const rest = word.slice(1)
    return first + rest
}

export const filter : string[] = [ "crime", "magical", "mystery", "history", "love"]