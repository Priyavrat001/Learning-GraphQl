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
}

type Course{
    //enter all your courese data which is not null or difine its type here
}

type Query {
    hello:String
    wow:String
    users:[User]
    courses:[Course]
    course(id:ID!):Course
    # sections:[Section]
    # lectures:[Lecture]
}

`;
