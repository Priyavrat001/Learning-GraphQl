export const schema = `#graphql

type User{
    _id:ID!
    name:String!
    email:String!
    password:String!
    googleId:String!
    role:String!
    avatar:String!
    verified:Boolean!
    createdAt:String!
    updatedAt:String!
    courses:[Course]
}

type Course{
    //enter all your courese data which is not null or difine its type here
}
type Lecture{
    //enter all your lectures data here which is not null or difine its type here
}

type videoUrl {
    -480p:String
    -720p:String
}

type SampleUser{
    name:String!
    age:Int!
    gender:String!
}

type Query {
    hello:String
    wow:String
    users:[User]        //difining the courese as an array
    courses:[Course]
    course(id:ID!):Course
    lectures:[Lecture]
    sampleUsers:[SampleUser]
    # sections:[Section]
}

type Mutation{
    newUser(name:String!, age:Int!, gender:String!):String
}

`