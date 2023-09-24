import {LotType, Coordinate, Tile} from "../../types/lots"

export function shortestLotPath(lot: LotType, startTile: Tile): null|Coordinate[] {
    let searchedTiles: boolean[][] = []
    let start: Coordinate = [0, 0]
    let queue: Coordinate[][] = []
    let path: null|Coordinate[] = []
    // console.log(startTile)
    for (let y in lot.spots) {
        searchedTiles.push([])
        for (let x in lot.spots) {
            searchedTiles[searchedTiles.length - 1].push(false)
            // console.log(lot.spots[x][y])
            if (lot.spots[y][x] === startTile) {
                start = [parseInt(y), parseInt(x)]
                queue.push([start])
                // console.log(start)
            }
        }
    }

    while (queue.length > 0) {
        let current = queue.shift()
        if (!current) break
        let newTile = current![current!.length - 1]
        console.log(newTile, searchedTiles[newTile[0]][newTile[1]])
        searchedTiles[newTile[0]][newTile[1]] = true
        
        if ([Tile.Spot, Tile.SpotTop, Tile.SpotRight, Tile.SpotBottom, Tile.SpotLeft, Tile.SpotX, Tile.SpotY].includes(lot.spots[newTile[0]][newTile[1]])) {
            path = current
            break
        } else {
            if (newTile[0] > 0 && !searchedTiles[newTile[0] - 1][newTile[1]] && [Tile.Empty, Tile.Spot, Tile.SpotTop, Tile.SpotY].includes(lot.spots[newTile[0] - 1][newTile[1]])) {
                queue.push([...current, [newTile[0] - 1, newTile[1]]])
                searchedTiles[newTile[0]][newTile[1]] = true
            }

            if (newTile[1] > 0 && !searchedTiles[newTile[0]][newTile[1] - 1] && [Tile.Empty, Tile.Spot, Tile.SpotLeft, Tile.SpotX].includes(lot.spots[newTile[0]][newTile[1] - 1])) {
                queue.push([...current, [newTile[0], newTile[1] - 1]])
            }

            if (newTile[0] < lot.spots.length - 1 && !searchedTiles[newTile[0] + 1][newTile[1]] && [Tile.Empty, Tile.Spot, Tile.SpotBottom, Tile.SpotY].includes(lot.spots[newTile[0] + 1][newTile[1]])) {
                queue.push([...current, [newTile[0] + 1, newTile[1]]])
            }

            if (newTile[1] < lot.spots[0].length - 1 && !searchedTiles[newTile[0]][newTile[1] + 1] && [Tile.Empty, Tile.Spot, Tile.SpotRight, Tile.SpotX].includes(lot.spots[newTile[0]][newTile[1] + 1])) {
                queue.push([...current, [newTile[0], newTile[1] + 1]])
            }
        }
    }

    console.log(lot.spots)
    // console.log(searchTile(lot.spots, searchedTiles, start))
    // let path: null|Coordinate[] = searchTile(lot.spots, searchedTiles, start)
    if (startTile === Tile.BuildingEntrance) {
        return shortestLotPath(lot, Tile.LotEntrance)
    }
    return path
}

// function searchTile(spots: Tile[][], searchedTiles: boolean[][], coords: Coordinate): null|Coordinate[] {
//     searchedTiles[coords[0]][coords[1]] = true
//     console.log(coords)
//     if ([Tile.Spot, Tile.SpotTop, Tile.SpotRight, Tile.SpotBottom, Tile.SpotLeft, Tile.SpotX, Tile.SpotY].includes(spots[coords[0]][coords[1]])) {
//         console.log(`found at ${coords}`)
//         return [coords]
//     } else {
//         let result: null|Coordinate[]
//         if (coords[0] >= 0 && !searchedTiles[coords[0] - 1][coords[1]] && [Tile.Empty, Tile.Spot, Tile.SpotTop, Tile.SpotY].includes(spots[coords[0] - 1][coords[1]])) {
//             result = searchTile(spots, searchedTiles, [coords[0] - 1, coords[1]])
//             if (result) {
//                 return [coords, ...result]
//             }
//         }
//         if (coords[1] >= 0 && !searchedTiles[coords[0]][coords[1] - 1] && [Tile.Empty, Tile.Spot, Tile.SpotLeft, Tile.SpotX].includes(spots[coords[0]][coords[1] - 1])) {
//             result = searchTile(spots, searchedTiles, [coords[0], coords[1] - 1])
//             if (result) {
//                 return [coords, ...result]
//             }
//         }
//         if (coords[0] < spots.length && !searchedTiles[coords[0] + 1][coords[1]] && [Tile.Empty, Tile.Spot, Tile.SpotBottom, Tile.SpotY].includes(spots[coords[0] + 1][coords[1]])) {
//             result = searchTile(spots, searchedTiles, [coords[0] + 1, coords[1]])
//             if (result) {
//                 return [coords, ...result]
//             }
//         }
//         if (coords[1] < spots[0].length && !searchedTiles[coords[0]][coords[1] + 1] && [Tile.Empty, Tile.Spot, Tile.SpotRight, Tile.SpotX].includes(spots[coords[0]][coords[1] + 1])) {
//             result = searchTile(spots, searchedTiles, [coords[0], coords[1] + 1])
//             if (result) {
//                 return [coords, ...result]
//             }
//         }
//         return null
//     }
// }