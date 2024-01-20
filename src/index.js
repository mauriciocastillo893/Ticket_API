const express = require('express');
import express from 'express'
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Definición de datos
const tiposDeVuelo = ['Por avión', 'Por autobús'];
const tarifasPorAvion = ['Tarifa1', 'Tarifa2']; // Agrega las tarifas reales
const tarifasPorAutobus = ['TarifaA', 'TarifaB']; // Agrega las tarifas reales
const metodosDePago = ['PayPal', 'Stripe', 'Open Pay'];
const membresias = ['Member', 'VIP', 'MVP'];

// Rutas
app.get('/tipos-de-vuelo', (req, res) => {
    res.json(tiposDeVuelo);
});

app.get('/tarifas/:tipo', (req, res) => {
    const tipo = req.params.tipo.toLowerCase();
    let tarifas = [];

    if (tipo === 'avion') {
        tarifas = tarifasPorAvion;
    } else if (tipo === 'autobus') {
        tarifas = tarifasPorAutobus;
    }

    res.json(tarifas);
});

app.get('/metodos-de-pago', (req, res) => {
    res.json(metodosDePago);
});

app.get('/membresias', (req, res) => {
    res.json(membresias);
});


// To start the server
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
