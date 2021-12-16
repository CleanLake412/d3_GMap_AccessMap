const stations = [
    {
        x: 50,
        y: 50,
        width: 150,
        name: 'Shin-Yokohama Station'
    },
    {
        x: 250,
        y: 50,
        width: 150,
        name: 'Tokyo Station'
    },
    {
        x: 450,
        y: 50,
        width: 150,
        name: 'Shibuya Station'
    },
    {
        x: 250,
        y: 200,
        width: 150,
        name: 'Yokohama Station'
    },
    {
        x: 50,
        y: 350,
        width: 250,
        name: 'Sakuragi Station'
    },
    {
        x: 450,
        y: 350,
        width: 150,
        name: 'Minatomira Station'
    },
    {
        x: 50,
        y: 500,
        width: 550,
        name: 'Teppanyaki Yokohama'
    },
];

const links = [
    {
        source: 'Shin-Yokohama Station',
        target: 'Sakuragi Station',
        transport: 'TRANSIT',
        line: 'JR Yokohama Line',
        duration: 900
    },
    {
        source: 'Tokyo Station',
        target: 'Yokohama Station',
        transport: 'TRANSIT',
        line: 'JR Tokaido Line',
        duration: 1800
    },
    {
        source: 'Shibuya Station',
        target: 'Minatomira Station',
        transport: 'TRANSIT',
        line: 'Tokyu Toyoko Line',
        duration: 1800
    },
    {
        source: 'Yokohama Station',
        target: 'Sakuragi Station',
        transport: 'TRANSIT',
        line: 'JR Keihin Tohoku Line',
        duration: 180
    },
    {
        source: 'Sakuragi Station',
        target: 'Teppanyaki Yokohama',
        transport: 'WALKING',
        line: '',
        duration: 300
    },
    {
        source: 'Minatomira Station',
        target: 'Teppanyaki Yokohama',
        transport: 'WALKING',
        line: '',
        duration: 180
    },
];