const express = require('express');
const bodyparser = require('body-parser');

const app = new express();
const PORT = process.env.PORT || 3000;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const allData = [
    {
        "name": "watanabe",
        "height": 157,
        "weight": 60,
        "hobby": {
            "sports": [
                "mogul",
                "basketBall",
                "kyudo"
            ],
            "game": [
                "residentEvil",
                "pokemon"
            ]
        },
        "language": [
            "Python",
            "JavaScript",
            "TypeScript",
            "SQL"
        ]
    },
    {
        "name":"samplePerson1",
        "height": 182,
        "weight": 110,
        "hobby": {
            "sports": [
                "football",
                "soccer",
            ],
            "game": [
                "winning eleven"
            ]
        },
        "language": [
            "English",
            "Japanese"
        ]
    }
];

app.get("/", (req, res) => {
    res.status(200).send(allData);
});

app.get("/:name", (req, res) => {
    const { name } = req.params;
    const data = allData.find(elem => elem.name === name);

    data? res.send(data) : res.status(404).send('not found');

});


app.post('/post', (req, res) => {
    const newData = req.body;
    allData.push(newData);

    res.status(200).send("success");
})

app.listen(PORT);
console.log(`ポート${PORT}番でExpressサーバーを実行中です…`);