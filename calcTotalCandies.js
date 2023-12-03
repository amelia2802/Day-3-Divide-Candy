function calcTotalCandies(children,candies){
    
    let remainingCandies = candies%children
    
    let totalCandiesEaten = candies - remainingCandies
    
    console.log(totalCandiesEaten)
}

calcTotalCandies(3,10)
calcTotalCandies(4,20)
calcTotalCandies(6,25)
