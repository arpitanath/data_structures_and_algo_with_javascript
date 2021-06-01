function f(M){
    let m = M.length
    let n = M[0].length
    let visited = new Array(m)
    for (let i=0; i<m; i++){
      visited[i] = new Array(n).fill(0)
    } 
    console.log(visited);
    function getNeighbours(y, x){
      let c = M[y][x]
      let neighbours = []
  
      if (y > 0 && !visited[y-1][x] && M[y-1][x] == c)
        neighbours.push([y-1, x])
      if (y < m - 1 && !visited[y+1][x] && M[y+1][x] == c)
        neighbours.push([y+1, x])
      if (x > 0 && !visited[y][x-1] && M[y][x-1] == c)
        neighbours.push([y, x-1])
      if (x < n - 1 && !visited[y][x+1] && M[y][x+1] == c)
        neighbours.push([y, x+1])
  
      return neighbours
    }
      
    function dfs(y, x){
      let stack = [[y, x]]
    
      while (stack.length){
        let [y, x] = stack.pop()
        visited[y][x] = 1
        console.log(getNeighbours(y, x));
        stack.push(...getNeighbours(y, x))
      }
    }
    
    let count = 0
    
    for (let i=0; i<m; i++){
      for (let j=0; j<n; j++){
        if (!visited[i][j]){
          count++
          dfs(i, j)
        }
      }
    }
    
    return count
  }
  
  var M = [
    "ababc",
    "abbba",
    "aaabb",
    "bcccb",
    "acbbb",
    "aaabb"
  ]
  
  console.log(f(M))