const testData = {
    nodes: [
        {
            id: 10000,
            group: 1
        },
        {
            id: 10001,
            group: 1
        },
        {
            id: 10002,
            group: 1
        },
        {
            id: 10003,
            group: 2
        },
        {
            id: 10004,
            group: 2
        },
        {
            id: 10005,
            group: 2
        }
    ],
    links: [
        {
            source: 10000,
            target: 10001,
            value: 1
        },
        {
            source: 10001,
            target: 10002,
            value: 1
        },
        {
            source: 10002,
            target: 10003,
            value: 1
        },
        {
            source: 10003,
            target: 10004,
            value: 1
        },
        {
            source: 10004,
            target: 10005,
            value: 1
        }
    ]
};

export default class Bfs {
    constructor( paths ) {

    }
}

const bfs = new Bfs( testData );