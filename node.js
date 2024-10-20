const express = require('express');
const app = express();

// Serve static files without needing .html extension
app.use(express.static('public', {
    extensions: ['html']
}));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
