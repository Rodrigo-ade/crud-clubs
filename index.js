import express from 'express';
import expressHandlebars from 'express-handlebars';
import { getClubsSummary } from './src/services/services.js';

const app = express();
const handlebars = expressHandlebars.create();

const PORT = 8080;

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use(express.static('./src/data'));
app.use('/uploads', express.static('uploads'));

app.get('/', async (req, res) => {
  const clubsSummary = await getClubsSummary();

  res.render('clubs', {
    layout: 'main',
    data: {
      clubsSummary,
    },
  });
});

app.listen(PORT);
console.log(`Listening at: http://localhost:${PORT}`);
