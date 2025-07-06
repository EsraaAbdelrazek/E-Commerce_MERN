import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import { seedInitialProducts } from './services/productService';


const app = express();
const port = 3001 ; 

app.use(express.json()); // Middleware to parse JSON bodies
mongoose
    .connect('mongodb://localhost:27017/ecommerce')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));;


// Seed the products to database
seedInitialProducts();


app.use('/user', userRoute)
app.use("/product", productRoute);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 
