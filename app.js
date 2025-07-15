const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('🚀 App funcionando con CI/CD desde GitHub Actions! 🚀'));

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});