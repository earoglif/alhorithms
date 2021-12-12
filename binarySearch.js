const searchTest = [1, 3, 4, 5, 8, 13, 17, 20, 43, 45, 46, 48];  // 12

const binarySearch = ( arr, searchNumber, start = 0, end ) => {
    const searchLastIndex = end || arr.length - 1
    const mid = arr[ Math.round( searchLastIndex / 2 ) ];

    if ( mid === searchNumber ) {
        return mid;
    } else if( mid < searchNumber ) {

    } else {

    }
}

binarySearch( searchTest, 43 );