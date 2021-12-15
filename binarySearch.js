/** Бинарный поиск */

export default class BinarySearch {
    constructor( arr ) {
        this.testArray = arr;
        this.startIndex = 0;
        this.endIndex = arr.length - 1;
        this.iteration = 0;
    }

    /**
     * Поиск в массиве
     * @param { number } searchNumber - искомое значение
     * */
    search( searchNumber ) {
        this.searchNumber = searchNumber;
        while ( this.testArray[ this.midIndex ] !== searchNumber ) {
            this.searchStep();
        }
        return this.midIndex;
    }

    /** Шаг поиска */
    searchStep() {
        this.iteration += 1;
        this.midIndex = Math.round( ( this.startIndex + this.endIndex ) / 2 );

        if( this.testArray[ this.midIndex ] === this.searchNumber ) {
            return this.midIndex;
        } else if ( this.testArray[ this.midIndex ] < this.searchNumber ) {
            this.startIndex = this.midIndex;
        } else {
            this.endIndex = this.midIndex;
        }
    }

    /** Получение номера итерации */
    getIterations() {
        return this.iteration;
    }
}