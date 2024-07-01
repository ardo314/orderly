
/**
 * Fisher–Yates (aka Knuth) Shuffle https://stackoverflow.com/a/2450976
 * 
 * @param array The array to shuffle
 * @returns The same array
 */
export function shuffle<T>(array: Array<T>) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }