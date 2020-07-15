import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

import models, { connectDb } from './models';
import routes from './routes';
import logger from './logger';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// intercept each incoming request
app.use(async (req, res, next) => {
  const videos = await models.Video.find();
  req.context = {
    models,
    me: videos[0],
  };
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// User routes
app.use('/video', routes.video);

// curl -X POST -H "Content-Type:application/json" http://localhost:3000/video -d '{"text":"Hi again, World"}'
app.post('/video', (req, res) => {
  const id = uuidv4();
  const video = {
    id,
    text: req.body.text,
    userId: req.context.me._id,
  };
  return res.send(video);
});

app.put('/video/:videoId', (req, res) => res.send(
  `PUT HTTP method on video/${req.params.videoId} resource`,
));

app.delete('/video/:videoId', (req, res) => res.send(
  `DELETE HTTP method on video/${req.params.videoId} resource`,
));

// 404
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

const createSampleVideos = async () => {
  const video1 = new models.Video({
    username: 'Davis Chang',
    url: 'http://test.com/video1.mp4',
  });

  const video2 = new models.Video({
    username: 'Alex Chan',
    url: 'http://test.com/video2.mp4',
  });

  await video1.save();
  await video2.save();

  logger.info('CreateSampleVideos Success!!');
};

const eraseDatabaseOnSync = process.env.NODE_ENV === 'development';
connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.Video.deleteMany({}),
    ]);

    // Create Sample Data
    createSampleVideos();
  }

  app.listen(process.env.PORT, () => logger.info(`Version ${process.env.VISION_API_URL}, Video app listening on port ${process.env.PORT}!`));
});
