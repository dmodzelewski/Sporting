const graphql = require('graphql');
const graphqldate = require('graphql-iso-date')
const User = require('../models/User')
const Reservation = require('../models/Reservation')



const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
} = graphql;

const {
    GraphQLDate,
    GraphQLTime
} = graphqldate




const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        Login: { type: GraphQLString },
        Password: { type: GraphQLString },
        Name: { type: GraphQLString },
        Surname: { type: GraphQLString },
        Age: { type: GraphQLInt },
        reservation: {
            type: new GraphQLList(ReservationType),
            resolve(parent) {
                return Reservation.find({ reservationId: parent.id })
            }
        }
    })
});

const ReservationType = new GraphQLObjectType({
    name: 'Reserve',
    fields: () => ({
        id: { type: GraphQLID },
        Date: { type: GraphQLDate },
        Start_Reservation: { type: GraphQLTime },
        End_Reservation: { type: GraphQLTime },
        user: {
            type: UserType,
            resolve(parent) {
                return User.findById(parent.reservationId)
            }
        }
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        //Nazwa parametru do frontEndu(coś jak id)
        user: {
            type: UserType,
            //Parametry w funkcji user = > user(id)
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                //pobieranie adnych z bazy
                return User.findById(args.id)
            }
        },
        reservation: {
            type: ReservationType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Reservation.findById(args.id)
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve() {
                return User.find({})
            }
        },
        reservations: {
            type: new GraphQLList(ReservationType),
            resolve() {
                return Reservation.find({})
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                Login: { type: GraphQLString },
                Password: { type: GraphQLString },
                Name: { type: GraphQLString },
                Surname: { type: GraphQLString },
                Age: { type: GraphQLInt },
                reservationId: { type: GraphQLID }
            },
            resolve(parent, args) {
                let user = new User({
                    Login: args.Login,
                    Password: args.Password,
                    Name: args.Name,
                    Surname: args.Surname,
                    Age: args.Age,
                    reservationId: args.reservationId,
                })
                return user.save()
            }
        },
        addReservation: {
            type: ReservationType,
            args: {
                Date: { type: GraphQLDate },
                Start_Reservation: { type: GraphQLTime },
                End_Reservation: { type: GraphQLTime },
            },
            resolve(parent, args) {
                let reservation = new Reservation({
                    Date: args.Date,
                    Start_Reservation: args.Start_Reservation,
                    End_Reservation: args.End_Reservation
                })
                return reservation.save()
            }
        }
    }
})

// eslint-disable-next-line no-undef
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});