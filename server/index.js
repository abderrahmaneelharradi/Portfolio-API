const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(cors({ origin: 'http://localhost:5500' }));

const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const skillRoutes = require('./routes/skillRoutes');
const contactRoutes = require('./routes/contactRoutes');

app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/contacts', contactRoutes);

mongoose.connect(process.env.MONGO_URI)

.then(() => {
  console.log('✅ Connecté à MongoDB');
  app.listen(PORT, () => console.log(`🚀 Serveur sur http://localhost:${PORT}`));
})
.catch(err => console.error('❌ MongoDB error:', err));