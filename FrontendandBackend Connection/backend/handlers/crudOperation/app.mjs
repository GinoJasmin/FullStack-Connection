// app.mjs
import app from '../../db/server.mjs';
import { executeQuery } from '../../db/server.mjs';

app.get('/details', async (req, res) => {
    console.log("GET /details endpoint called");
    try {
        const data = await executeQuery('SELECT * FROM REACT_CRUDOPERATION');
        console.log("Fetched data:", data);
        res.json(data);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Backend Connected on port ${PORT}`);
});
