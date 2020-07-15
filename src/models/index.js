import mongoose from 'mongoose';
import Video from './video';

/* Make sure you have already had mongodb server
 * Error Message: UnhandledPromiseRejectionWarning:
 * MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017
*/
const connectDb = () => mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const models = { Video };

export { connectDb };

export default models;
