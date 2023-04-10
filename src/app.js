// imports
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path')
const ehbs = require("express-handlebars");
const handlebars = require("handlebars");

const { renderPdf } = require("./renderPdf")
const { meeting, user } = require("./pageSchemas/mockData")
const pageSchemas = require("./pageSchemas/pageSchemas")



const pages = pageSchemas(
   meeting,
   user,
   path.join(__dirname, "/assets/images/summaryExportCover.png"),
   path.join(__dirname, "/assets/images/summaryExportPage.png"),
)

const app = express();

// middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('/public'));


handlebars.registerPartial('CoverHeader', 'CoverHeader')


// engine

const engineConfig = {
  extname: '.handlebars',
  defaultLayout: 'main',
  layoutsDir: 'src/views/layouts/',
  partialsDir: 'src/views/partials/'
};

app.engine('handlebars', ehbs.engine(engineConfig)) 
app.set('views', 'src/views')
app.set('view engine', 'handlebars')



// endpoints

app.get('/', (req, res) => {
  // console.log(JSON.stringify(pages))
  res.send(meeting)
});

app.post('/getSummaryPDF', (req, res)=> {
  // const meeting = req.body;
  res.render('summary', { pages }, async (err, html) => {
    if (err) throw err;
    fs.writeFile('src/renders/summary.html', html, async (err) => {
      if (err) throw err;
      await renderPdf(
        fs.readFileSync("src/renders/summary.html", "utf8"),
        'src/renders/summary.pdf'
      );
      res.send(meeting);
    });
  });

});

app.listen(8080, ()=> console.log('====================== √ server up!'))
