import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    url: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true },
);

// Then Mongoose will create the model for your videos collection, not your Video collection.
const Video = mongoose.model('Video', videoSchema);

export default Video;
