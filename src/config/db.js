import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Завантаження змінних середовища

// URI для підключення до MongoDB Atlas
const URI = 'mongodb+srv://macsfedorkivvv:Wlwbv7h4M10YjQDH@projectgggcluster.bqfrt.mongodb.net/?retryWrites=true&w=majority&appName=ProjectGGGCluster';

// Підключення до MongoDB
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Підключено до MongoDB Atlas'))
    .catch((err) => console.error('Помилка підключення до MongoDB:', err));

export default mongoose;
