export const capitalise = (word: string) : string => {
    const first =  word.charAt(0).toUpperCase()
    const rest = word.slice(1)
    return first + rest
}

export const fetchData = () => {
    return fetch('https://dummyjson.com/posts')
        .then(response => response.json())
}

export const filter : string[] = [ "crime", "magical", "mystery", "history", "love"]