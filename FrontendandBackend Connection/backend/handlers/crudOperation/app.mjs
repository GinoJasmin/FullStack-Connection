// app.mjs
import app from '../../db/server.mjs';
import { executeQuery } from '../../db/server.mjs';

app.get('/details', async (req, res) => {
    console.log("GET /details endpoint called");
    try {
        let query = `SELECT * FROM REACT_CRUDOPERATION`
        const data = await executeQuery(query);
        console.log("Fetched data:", data);
        res.json(data);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.post('/details', async (req, res) => {
    console.log("POST /details endpoint called");
    try {
        const { name, email, phone } = req.body;
        const created_at = new Date();

        let query = `INSERT INTO REACT_CRUDOPERATION(name,email,phone,created_at) VALUES(?, ?, ?, ?)`;
let Values = [name, email, phone, created_at];

        const data = await executeQuery(query, Values);
        console.log("Inserted data:", data);
        res.json(data);
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Backend Connected on port ${PORT}`);
});
