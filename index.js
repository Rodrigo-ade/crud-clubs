import express from 'express';
import expressHandlebars from 'express-handlebars';
import multer from 'multer';
import methodOverride from 'method-override';

import {
  addClubSummaryToDatabase,
  addClubToDatabase,
  getClubsSummary,
  getClub,
  deleteClub,
  deleteClubSummary,
} from './src/services/services.js';
import { transformBirthdateToAge } from './src/utilities/utilities.js';

const app = express();
const handlebars = expressHandlebars.create();
const upload = multer({ dest: './src/data/uploads/' });

const PORT = 8080;

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use(methodOverride('_method'));
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

app.get('/form', (req, res) => {
  res.render('form', {
    layout: 'main',
    data: {
      method: 'post',
      action: '/form',
      website: 'newWebsite',
      logoRequired: 'required',
      button: {
        text: 'Add Team',
        colorStyle: 'success',
      },
    },
  });
});

app.post('/form', upload.single('logo_file'), async (req, res) => {
  const data = req.body;
  const imageName = req.file.filename;
  data.crestUrl = `/uploads/${imageName}`;
  addClubSummaryToDatabase(data);
  addClubToDatabase(data);

  res.render('success', {
    layout: 'main',
  });
});

app.get('/info/club/:clubTla', async (req, res) => {
  const { clubTla } = req.params;
  const club = transformBirthdateToAge(await getClub(clubTla));

  res.render('info', {
    layout: 'main',
    data: {
      club,
    },
  });
});

app.get('/delete/club/:clubTla', (req, res) => {
  const { clubTla } = req.params;

  res.render('delete', {
    layout: 'main',
    clubTla,
  });
});

app.delete('/delete/club/:clubTla', (req, res) => {
  const { clubTla } = req.params;
  deleteClubSummary(clubTla);
  deleteClub(clubTla);

  res.render('success', {
    layout: 'main',
  });
});

app.get('/edit/club/:clubTla', async (req, res) => {
  const { clubTla } = req.params;
  const club = await getClub(clubTla);
  res.render('form', {
    layout: 'main',
    data: {
      method: 'post',
      action: `/edit/club/${clubTla}?_method=put`,
      website: 'website',
      button: {
        text: 'Update',
        colorStyle: 'warning',
      },
      club,
    },
  });
});

app.listen(PORT);
console.log(`Listening at: http://localhost:${PORT}`);
