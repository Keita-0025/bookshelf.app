import { connect } from 'mongoose';
import env from 'dotenv'

env.config();

connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

