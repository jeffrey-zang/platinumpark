import {LotType, Coordinate, Tile} from "../../types/lots"

export function shortestLotPath(lot: LotType, startTile: Tile): null|Coordinate[] {
    let searchedTiles: boolean[][] = []
    let start: Coordinate = [0, 0];
    for (let x in lot.spots) {
        searchedTiles.push([])
        for (let y in lot.spots) {
            searchedTiles[searchedTiles.length].push(false)
            if (lot.spots[x][y] === startTile) {
                start = [parseInt(x), parseInt(y)]
            }
        }
    }

    let path: null|Coordinate[] = searchTile(lot.spots, searchedTiles, start)
    if (startTile === Tile.BuildingEntrance) {
        return shortestLotPath(lot, Tile.LotEntrance)
    }
    return path
}

function searchTile(spots: Tile[][], searchedTiles: boolean[][], coords: Coordinate): null|Coordinate[] {
    searchedTiles[coords[0]][coords[1]] = true
    if ([Tile.Spot, Tile.SpotTop, Tile.SpotRight, Tile.SpotBottom, Tile.SpotLeft, Tile.SpotX, Tile.SpotY].includes(spots[coords[0]][coords[1]])) {
        return [coords]
    } else {
        let result: null|Coordinate[]
        if (coords[0] >= 0 && searchedTiles[coords[0] - 1][coords[1]] && [Tile.Empty, Tile.Spot, Tile.SpotTop, Tile.SpotY].includes(spots[coords[0] - 1][coords[1]])) {
            result = searchTile(spots, searchedTiles, [coords[0] - 1, coords[1]])
            if (result) {
                return [coords, ...result]
            }
        }
        if (coords[1] >= 0 && searchedTiles[coords[0]][coords[1] - 1] && [Tile.Empty, Tile.Spot, Tile.SpotLeft, Tile.SpotX].includes(spots[coords[0]][coords[1] - 1])) {
            result = searchTile(spots, searchedTiles, [coords[0] - 1, coords[1]])
            if (result) {
                return [coords, ...result]
            }
        }
        if (coords[0] <= spots.length && searchedTiles[coords[0] + 1][coords[1]] && [Tile.Empty, Tile.Spot, Tile.SpotBottom, Tile.SpotY].includes(spots[coords[0] + 1][coords[1]])) {
            result = searchTile(spots, searchedTiles, [coords[0] + 1, coords[1]])
            if (result) {
                return [coords, ...result]
            }
        }
        if (coords[1] <= spots[0].length && searchedTiles[coords[0]][coords[1] + 1] && [Tile.Empty, Tile.Spot, Tile.SpotRight, Tile.SpotX].includes(spots[coords[0]][coords[1] + 1])) {
            result = searchTile(spots, searchedTiles, [coords[0], coords[1] + 1])
            if (result) {
                return [coords, ...result]
            }
        }
        return null
    }
}