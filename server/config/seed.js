/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require ('../api/user/user.model');
var Product = require('../api/product/product.model');
var Catalog = require('../api/catalog/catalog.model');
var mainCatalog, livros, informatica, gestao;

User.find({}).removeAsync()
  .then(function() {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(function() {
      console.info('finished populating users');
    })
    .then(null, function (err) {
      console.error('Error populating products: ', err);
    });
  });

Catalog.find({}).remove()
  .then(function () {
    return Catalog.create({ name: 'Todos'});
  })
  .then(function (catalog) {
    mainCatalog = catalog;
    return mainCatalog.addChild({name: 'Livros'});
  })
  .then(function (category) {
    livros = category._id;
    return mainCatalog.addChild({name: 'Informática'});
  })
  .then(function (category) {
    informatica = category._id;
    return mainCatalog.addChild({name: 'Gestão'});
  })
  .then(function (category) {
    gestao = category._id;
  })
  .then(function() {
    console.log('finished populating categories');
  })
  .then(null, function (err) {
    console.error('Error populating categories: ', err);
  });

Product.find({}).remove()
  .then(function() {
    Product.create({
      title: 'Mean: Full stack JavaScript para aplicações web com MongoDB, Express, Angular e Node',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41sw5vx1qnL.jpg',
      price: 0,
      stock: 1,
      categories: [informatica],      
      description: 'Já pensou em desenvolver aplicações web ricas com recursos complexos, extremamente performáticos e robustos? É isso que você conseguirá fazer com a stack MEAN. Unindo várias das principais tecnologias do mercado, como o MongoDB, Express, Angular e Node.js em cima da linguagem JavaScript, é possível criar aplicações em um curto espaço de tempo em uma linguagem sobre a qual todo desenvolvedor web possui algum conhecimento.'
    }, {
      title: 'Mean Definitivo ',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51iwYqp1FVL._SX356_BO1,204,203,200_.jpg',
      price: 0,
      stock: 1,
      categories: [informatica],
      description: 'Os stacks tradicionais de web usam linguagens de programação diferentes em cada camada, resultando em uma confusão complexa de códigos e frameworks. Juntos, o banco de dados MongoDB, os frameworks Express e AngularJS, mais o Node.js, constituem o stack MEAN – uma plataforma poderosa que usa apenas uma linguagem, o JavaScript, de ponta a ponta. Os desenvolvedores e as empresas o idolatram porque é escalonável e econômico.'
    }, {
      title: 'Aplicações web real-time com Node.js',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41kWzQbG3RL._SY346_.jpg',
      price: 0,
      stock: 1,
      categories: [informatica],
      description: 'Node.js é uma poderosa plataforma. Ele permite escrever aplicações JavaScript no server-side, tirando proveito da sintaxe e familiaridade da linguagem para escrever aplicações web escaláveis. Como o Node.js usa um modelo orientado a eventos, focado em I/O não-bloqueante, desenvolver nele pode ser diferente para quem está acostumado às aplicações web tradicionais.'
    }, {
      title: 'Iwoz. A Verdadeira História da Apple Segundo Seu Cofundador',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41y2O3k4U9L._SX346_BO1,204,203,200_.jpg',
      price: 0,
      stock: 1,
      categories: [gestao],
      description: 'Desde a invenção do primeiro computador pessoal até a ascensão da Apple como um gigante da indústria, iWoz apresenta uma história sem censura, divertida, que constrói um perfil em primeira mão do inventor humanista que iniciou a revolução do computador.'
    }, {
      title: 'Sprint. O Método Usado no Google Para Testar e Aplicar Novas Ideias em Apenas Cinco Dias ',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51lvGdUYjYL._SX332_BO1,204,203,200_.jpg',
      price: 0,
      stock: 1,
      categories: [gestao],
      description: 'Como inovar? Por onde começar? Como montar uma boa equipe? Que forma terá uma ideia quando for colocada em prática? São muitas as perguntas que martelam na cabeça de quem precisa tirar ideias do papel, mas já existe um caminho infalível para responder a todas elas rapidamente: o sprint.'
    }, {
      title: 'TypeScript 2.0 Cookbook',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51StuPP6c0L.jpg',
      price: 0,
      stock: 1,
      categories: [informatica],
      description: 'Become a full stack developer using this latest guide on the webs most exciting language—TypeScript Enhance your web development skills and accelerate your development using the insightful recipes in this book.'
    }, {
      title: 'Angular 2 Development with TypeScript',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41YpfcnShoL._SX396_BO1,204,203,200_.jpg',
      price: 0,
      stock: 1,
      categories: [informatica],
      description: 'Angular 2 is a JavaScript-based development platform for building dynamic, interactive web applications, SPAs, and mobile apps. Angular applications can be built with JavaScript or TypeScript. TypeScript offers great IDE support and the TypeScript compiler helps coders quickly find and fix errors. TypeScript feels familiar, much like using ES6 with the same standard and third-party libraries, idioms, and tools. TypeScript supports classes, modules, annotations, and lazy loading and minimizes the amount of code for supporting the framework’s life cycle, letting developers focus on writing the application code.'
    })
    .then(function() {
      console.log('finished populating products');
    })
    .then(null, function (err) {
      console.error('Error populating products: ', err);
    });
  });