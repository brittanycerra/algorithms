// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water.

const numIslands = grid => {
    let islandCount = 0;
    
    // Set up seen array
    let seen = [];
    for(let i = 0; i < grid.length; i++) {
      seen[i] = [];
    }

    for(let row = 0; row < grid.length; row++){
      // Start by going through each element in row
      for(let col = 0; col < grid[row].length; col++){
        // Not yet seen land. Count island!
        if ( !seen[row][col] && grid[row][col] == 1 ){
          islandCount++
          // Surrounding elements are a part of the same island. Mark them as seen.
          chartIsland(grid, row, col, seen);
        }
        
        // Mark this land as seen
        seen[row][col] = true;
      }
    }

    return islandCount;
};

const chartIsland = (grid, row, col, seen) => {
  // Out of bounds
  if(row < 0 || row > grid.length - 1 || col < 0 || col > grid[row].length - 1) {
    return;
  }

  // Already seen, nothing new to be done
  if(seen[row][col] === true) {
    return;
  }

  // Mark elemenet as seen
  seen[row][col] = true;

  // Return if this is a "water" element
  if(grid[row][col] === '0') {
    return;
  }

  // Recursively call chartIsland on surrounding elements
  chartIsland(grid, row - 1, col, seen);
  chartIsland(grid, row + 1, col, seen);
  chartIsland(grid, row, col - 1, seen);
  chartIsland(grid, row, col + 1, seen);
};