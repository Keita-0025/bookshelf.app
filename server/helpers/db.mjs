import { connect } from 'mongoose';
import env from 'dotenv'

env.config();

connect(process.env.MONGO_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

