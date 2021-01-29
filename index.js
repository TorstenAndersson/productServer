const express = require("express");
const cors = require("cors")
const port = process.env.PORT;

const products = JSON.parse('{"products": [{"name":"Sudd Johan","description":"Bara gamla goda Johan...","price":{"discount": {"price":"10,99 kr","reason":"Fick vibbarna"},"original":"14, 99 kr"},"img":"imgs/Sudd/Sudd Johan.png","link":"sudd/sudd-johan","type":"sudd","onDisplay":"true"}, {"name":"Johans Hoodie","description":"fyfan va varmt","price":{"discount": {"price":"149,99 kr","reason":"2020 REA"},"original":"499,99 kr"},"img":"imgs/Johans Hoodie/Johans Hoodie White Front.jpg","link":"merchandise/johans-hoodie","type":"merchandise","onDisplay":"false"}, {"name":"Johans Flip-Flops","description":"LFIPÅPT FLOP","price":{"discount": {"price":"1000,99 kr","reason":"PÅSKREA"},"original":"349, 99 kr"},"img":"imgs/Johans Flip-Flops/Johans Flip-Flops Medium Above.png","link":"merchandise/johans-flip-flops","type":"merchandise","onDisplay":"true"}, {"name":"Johans Mobilskal","description":"Skydda din mobil!","price":{"original":"149,99 kr"},"img":"imgs/Johans Mobilskal/Johans Mobilskal iPhone 12 Pro Max.png","link":"merchandise/johans-mobilskal","type":"merchandise","onDisplay":"true"}]}');

express()
  .use(cors({options: "https://johanssudd.herokuapp.com/"}))

  .get("/", (req, res) => res.json(products))

  .listen(port);
