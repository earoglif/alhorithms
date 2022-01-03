/** Поиск размера грани самого большого квадрата, способного заполнить заданную площадь */

export default class fillBiggestSquares {
    constructor( width, height ) {
        this.bigestEdge = 0;
        this.actualWidth = width;
        this.actualHeight = height;
        this.iteration = 0;
    }

    /** Запуск всех шагов поиска до получения результата */
    getBiggestEdge() {
        while ( this.bigestEdge === 0 ) {
            this.doStep();
        }

        return this.bigestEdge;
    }

    /** Шаг */
    doStep() {
        this.iteration++;
        const tail = this.getTail( this.actualWidth, this.actualHeight );

        if ( tail === 0 ) {
            this.bigestEdge = Math.min( this.actualWidth, this.actualHeight );
        } else {
            if( this.actualWidth > this.actualHeight ) {
                this.actualWidth = tail;
            } else {
                this.actualHeight = tail;
            }
        }
    }

    /**
     * Поиск остатка при делении большей грани прямоугольника на меньшую
     * @param {Number} width - ширина
     * @param {Number} height - высота
     * @return {Number}
     * */
    getTail( width, height ) {
        return  Math.max( width, height ) % Math.min( width, height );
    }

    /** Получение номера итерации */
    getIterations() {
        return this.iteration;
    }
}