const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 4000;
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.post('/add', (req, res) => {
    const { operand1, operand2, operator} = req.body;
    let result = 0;

    if(operator === "add"){
        result = operand1 + operand2;
    }
    else if(operator === "sub"){
        result = operand1 - operand2;
    }
    else if(operator === "multi"){
        result = operand1 * operand2;
    }
    else if(operator === "div"){
        result = operand1 / operand2;
    }

    res.json({
        result
    });
});

app.listen(PORT, () => {
    console.log(`Server started ${PORT}`);
});