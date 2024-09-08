import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from 'dotenv';
import { getAllUsers, getSingleUser } from './controllers/user.js';
import { schema } from './graphql/schema/schema.js';
import { connectToMongo } from './utils/dataBase.js';
import { getAllCourses, getAllLectures, getCourseById, getCourses } from "./controllers/course.js";

dotenv.config({ path: './.env', });

export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
const port = Number(process.env.PORT) || 3000;
const mongoUri = process.env.MONGO_URI!;

connectToMongo(mongoUri);


const myUsers = [];

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: {

    Mutation:{
      newUser:(parent, {name, age, gender})=>{
        myUsers.push({
          name,
          age,
          gender
        });
        return "user created successfully";
      }
    },

    Query: {
      coures: () => getCourseById,
      courses: () => getAllCourses,
      users: () => getAllUsers,
      lectures: () => getAllLectures,
      sampleUsers:()=>myUsers
    },
    // for the course finding single instructor easy way to use query here
    Course: {
      instructor: async (course) => {
        return await getSingleUser(course.instructor)
      }
    },
    User:{
      courses:()=>getCourses;
    },
    Lectures: {
      videoUrl: (lecture) => {
        return {
        - 480p: lecture.videoUrl["-480p"],
          -720p: lecture.videoUrl["720"]
      },
    }
  }
},
});

startStandaloneServer(server, {
  listen: {
    port
  }
}).then(() => {
  console.log("Sever is working on Port:" + port + "in" + envMode + "Mode.")
}).catch((err) => {
  console.error(err)
})


// const app = express();


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors({ origin: ' * ', credentials: true }));
// app.use(morgan('dev'))


// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // your routes here


// app.get("*", (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: 'Page not found'
//   });
// });

// app.use(errorMiddleware);


// app.listen(port, () => console.log('Server is working on Port:' + port + ' in ' + envMode + ' Mode.'));