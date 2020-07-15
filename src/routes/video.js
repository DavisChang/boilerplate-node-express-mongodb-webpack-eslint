import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const videos = await req.context.models.Video.find();
  return res.send(Object.values(videos));
});

// Don't need to define the /users URI (path) but only the subpaths
router.get('/:videoId', async (req, res) => {
  const video = await req.context.models.Video.findById(req.params.videoId);
  return res.send(video);
});

export default router;
