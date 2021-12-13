/** Бинарный поиск */

const searchTest = [1, 3, 4, 5, 8, 13, 17, 20, 43, 45, 46, 48];  // 12

class BinarySearch {
    constructor( arr, searchNumber ) {
        this.arr = arr;
        this.searchNumber = searchNumber;
        this.startIndex = 0;
        this.endIndex = arr.length - 1;
        this.iteration = 0;
    }

    search( searchNumber ) {

    }
}

const binarySearch = ( arr, searchNumber, start = 0, end, iteration = 1 ) => {
    const endIndex = end || arr.length - 1;
    const midIndex = Math.round( ( start + endIndex ) / 2 );
    const mid = arr[ midIndex ];

    if ( mid === searchNumber ) {
        console.log( 'Result:', mid, midIndex, iteration );
    } else if( mid < searchNumber ) {
        binarySearch( arr, searchNumber, midIndex, endIndex, ++iteration );
    } else {
        binarySearch( arr, searchNumber, start, midIndex, ++iteration );
    }
}

binarySearch( searchTest, 43 );