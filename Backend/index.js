import app from './app.js';

const PORT = process.env.APP_PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
