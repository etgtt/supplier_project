const express = require('express');
const router = express.Router();
const Product = require('../models/Client');



router.post('/search', (req, res) => {
    const { product, quantity } = req.body;

    // Search product information in the database
    Product.findAll({
        where: { product },
        raw: true
    }).then(products => {
        if (products.length === 0) {
            res.render('results', { product, quantity, cheapestSupplier: null });
            return;
        }        

        const cheapestSupplier = calculateCheapestSupplier(products, quantity);

        res.render('results', { product, quantity, cheapestSupplier });
    }).catch(err => {
        console.error(err);
        res.status(500).send('Error fetching product information');
    });
});

function calculateCheapestSupplier(products, quantity) {
    let cheapestSupplier = null;
    let lowestTotalPrice = Number.MAX_SAFE_INTEGER;

    products.forEach(product => {     

        const price = parseFloat(product.price);
        const stock = parseInt(product.stock);
        const supplier = product.supplier;
        const discount = parseFloat(product.discount);
        const discountQuantity = parseInt(product.discountQuantity);
        const deadline = parseInt(product.deadline);

        let adjustedDiscount = 0; // Initialize with no discount

        if (quantity > discountQuantity && supplier === 'A') {
            adjustedDiscount = discount;
        } else if (quantity > discountQuantity && supplier === 'B') {
            adjustedDiscount = discount;
        } else if (quantity > discountQuantity && supplier === 'C') {
            adjustedDiscount = discount;
        }

        if (quantity <= stock) {
            const totalPrice = price * quantity * (1 - adjustedDiscount);
                 
            if (totalPrice < lowestTotalPrice) {
                lowestTotalPrice = totalPrice;
                cheapestSupplier = {
                    supplier,
                    product: product.product,
                    price,
                    discount: adjustedDiscount,
                    total: totalPrice,
                    deadline
                };
            }
        }
    });

    return cheapestSupplier;
}

module.exports = router;


