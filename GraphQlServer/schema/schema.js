const graphql = require('graphql');
const graphqldate = require('graphql-iso-date')
const User = require('../models/User')
const Reservation = require('../models/Reservation')
const Gym = require('../models/Gym')
const Equipment = require('../models/Equipment')



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
                return Reservation.find({ userID: parent.id })
            }
        }
    })
});

const ReservationType = new GraphQLObjectType({
    name: 'Reservation',
    fields: () => ({
        id: { type: GraphQLID },
        Date: { type: GraphQLDate },
        Start_Reservation: { type: GraphQLTime },
        End_Reservation: { type: GraphQLTime },
        user: {
            type: UserType,
            resolve(parent) {
                return User.findById(parent.userID)
            }
        },
        gym:{
            type:GymType,
            resolve(parent){
               return Gym.findById(parent.gymID)
            }
        }

    })
});

const GymType = new GraphQLObjectType({
    name: 'Gym',
    fields: () => ({
        id: { type: GraphQLID },
        Type: { type: GraphQLString },
        Quantity: { type: GraphQLInt },
        reservation: {
            type: new GraphQLList(ReservationType),
            resolve(parent) {
                return Reservation.find({ gymID: parent.id })
            }
        },
        equipment:{
            type:new GraphQLList(EquipmentType),
            resolve(parent){
                return Equipment.find({gymID:parent.id})
            }
        }
        
    })
});

const EquipmentType = new GraphQLObjectType({
    name: 'Equipment',
    fields: () => ({
        id: { type: GraphQLID },
        Type: { type: GraphQLString },
        Count: { type: GraphQLInt },
        gym:{
            type: new GraphQLList(GymType),
            resolve(parent){
                return Gym.findById(parent.gymID)
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
        gym: {
            type: GymType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Gym.findById(args.id)
            }
        },
        equipment: {
            type: EquipmentType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Equipment.findById(args.id)
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
        },
        gyms: {
            type: new GraphQLList(GymType),
            resolve() {
                return Gym.find({})
            }
        },
        equipments: {
            type: new GraphQLList(EquipmentType),
            resolve() {
                return Equipment.find({})
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
            },
            resolve(parent, args) {
                let user = new User({
                    Login: args.Login,
                    Password: args.Password,
                    Name: args.Name,
                    Surname: args.Surname,
                    Age: args.Age,
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
                userID:{type:GraphQLID},
                gymID:{type:GraphQLID}
            },
            resolve(parent, args) {
                let reservation = new Reservation({
                    Date: args.Date,
                    Start_Reservation: args.Start_Reservation,
                    End_Reservation: args.End_Reservation,
                    userID:args.userID,
                    gymID:args.gymID
                })
                return reservation.save()
            }
        },
        addGym: {
            type: GymType,
            args: {
                Type: { type: GraphQLString },
                Quantity: { type:GraphQLInt },
            },
            resolve(parent, args) {
                let gym = new Gym({
                    Type: args.Type,
                    Quantity:args.Quantity
                })
                return gym.save()
            }
        },
        addEquipment: {
            type: EquipmentType,
            args: {
                Type: { type: GraphQLString },
                Count: { type:GraphQLInt },
                gymID: {type:GraphQLID}
            },
            resolve(parent, args) {
                let equipment = new Equipment({
                    Type: args.Type,
                    Count:args.Count,
                    gymID:args.gymID
                })
                return equipment.save()
            }
        },
    }
})

// eslint-disable-next-line no-undef
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});