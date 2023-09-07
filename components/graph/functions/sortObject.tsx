export default function sortObject(o: {[key: string]: number}) {
    const newObject:  {[key: string]: number} = {}

    Object.keys(o).sort((a, b) => Number(a) - Number(b)).forEach(key => {
        newObject['_' + key] = o[key]
    })

    return newObject
}
