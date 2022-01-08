/** Поиск в ширину */

export default class Bfs {
    constructor( paths ) {
        this.paths = paths;
        this.startNode = null;
        this.endNode = null;
        this.iterations = 0;
        this.queue = [];  // Очередь проверяемых узлов

        this.levels = {};  // Модель: { узел: уровень }
        this.parents = {};  // Модель { дочерний узел: его родитель }
        this.pathToEndNode = [];  // Список узлов, составляющих кратчайший путь от startNode до endNode

        this.paths.links.forEach( item => {
            const sours = this.getNodeById( item.source );
            const target = this.getNodeById( item.target );

            if( !sours.hasOwnProperty( 'children' ) ) {
                sours.children = [];
            }

            target && sours.children.push( target );
        });
    }

    /**
     * Поиск кратчайшего пути между заданными узлами
     * @param {Object} startNode - начальный узел
     * @param {Object} endNode - конечный узел
     * @return {Array} - массив идентификаторов узлов
     * */
    getPathToEndNode( startNode, endNode ) {
        this.startNode = startNode;
        this.endNode = endNode;
        this.queue.push( this.startNode );
        this.levels = {};
        this.parents = {};
        this.levels[ this.startNode.id ] = 0;

        while( this.queue.length ) {
            this.doStep();
        }

        return  this.pathToEndNode;
    }

    doStep() {
        this.iterations++;
        const currentNode = this.queue.shift();

        if( currentNode.id === this.endNode.id ) {
            this.setPathToEndNode( currentNode.id );
            return;
        }

        const currentNodeChilds = currentNode.children;
        currentNodeChilds.forEach( item => {
            if( !this.levels.hasOwnProperty( item.id ) ) {
                this.levels[ item.id ] = this.levels[ currentNode.id ] + 1;
                this.parents[ item.id ] = currentNode.id;

                this.queue.push( item );
            }
        });
    }

    /**
     * Поиск узла по идентификатору
     * @param {Number} id - идентификатор искомого узла
     * */
    getNodeById( id ) {
        return this.paths.nodes.find( item => item.id ===id );
    }

    /**
     * Метод выстраивает цепочку узлов
     * @param {Number} nodeId - идентификатор дочернего узла
     * */
    setPathToEndNode( nodeId ) {
        const pathToEndNode = this.pathToEndNode;
        !pathToEndNode.length && pathToEndNode.push( nodeId );

        if( this.parents.hasOwnProperty( nodeId ) ) {
            pathToEndNode.unshift( this.parents[ nodeId ] );
            this.setPathToEndNode( this.parents[ nodeId ] );
        }
    }
}