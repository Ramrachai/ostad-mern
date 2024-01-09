import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import Sale from "./models/Sales.js"
import fs from 'fs'


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });




app.get('/', async (request, response) => {
  console.log("Home route hit");
  const html = fs.readFileSync('./templates/index.html', 'utf8');
  response.contentType('text/html');
  return response.status(200).send(html);
});




// Endpoint to calculate total revenue
app.get('/api/sales/total-revenue', async (req, res) => {
  try {
    const totalRevenue = await Sale.aggregate([{ $group: { _id: null, total: { $sum: { $multiply: ['$quantity', '$price'] } } } }]);
    res.json({ totalRevenue: totalRevenue[0].total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to find total quantity sold for each product
app.get('/api/sales/quantity-by-product', async (req, res) => {
  try {
    const quantityByProduct = await Sale.aggregate([
      { $group: { _id: '$product', totalQuantity: { $sum: '$quantity' } } }
    ]);
    res.json(quantityByProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to retrieve top 5 products with highest total revenue
app.get('/api/sales/top-products', async (req, res) => {
  try {
    const topProducts = await Sale.aggregate([
      { $group: { _id: '$product', totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } } } },
      { $sort: { totalRevenue: -1 } },
      { $limit: 5 }
    ]);
    res.json(topProducts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to calculate average price of products sold
app.get('/api/sales/average-price', async (req, res) => {
  try {
    const averagePrice = await Sale.aggregate([
      { $group: { _id: null, average: { $avg: '$price' } } }
    ]);
    res.json({ averagePrice: averagePrice[0].average });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Revenue by month
app.get('/api/sales/revenue-by-month', async (req, res) => {
  try {
    const revenueByMonth = await Sale.aggregate([
      { 
        $group: {
          _id: { 
            month: { $month: '$date' },
            year: { $year: '$date' }  
          },
          totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] }}
        }
      }
    ]);
    res.json(revenueByMonth);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Highest quantity sold
app.get('/api/sales/highest-quantity-sold', async (req, res) => {
  try {
    const topSale = await Sale.aggregate([
      { $sort: { quantity: -1 } },
      { $limit: 1 } 
    ]);
    res.json(topSale[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Department salary expense
app.get('/api/sales/department-salary-expense', async (req, res) => {
  try {
    const expenses = await Sale.aggregate([
      { $group: { 
        _id: '$department',
        totalExpense: { $sum: { $multiply: ['$employee.salary', '$employee.commission'] }}  
      }}
    ]);
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
