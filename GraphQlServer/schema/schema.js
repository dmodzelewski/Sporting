const graphql = require('graphql');
const graphqldate = require('graphql-iso-date')
const User = require('../models/User')
const Reservation = require('../models/Reservation')
const Gym = require('../models/Gym')
const Equipment = require('../models/Equipment')
const SportObject = require('../models/SportObject')
const Opinion = require('../models/Opinion')
const Address = require('../models/Address')
const Company = require('../models/Company')




const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLFloat,
    GraphQLNonNull
} = graphql;

const {
    GraphQLDate,
    GraphQLTime
} = graphqldate

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        Login: { type: new GraphQLNonNull(GraphQLString) },
        Password: { type: new GraphQLNonNull(GraphQLString) },
        Name: { type: GraphQLString },
        Surname: { type: GraphQLString },
        Age: { type: GraphQLInt },
        reservation: {
            type: new GraphQLList(ReservationType),
            resolve(parent) {
                return Reservation.find({ userID: parent.id })
            }
        },
        opinions: {
            type: new GraphQLList(OpinionType),
            resolve(parent) {
                return Opinion.find({ userID: parent.id })
            }
        },

    })
});

const ReservationType = new GraphQLObjectType({
    name: 'Reservation',
    fields: () => ({
        id: { type: GraphQLID },
        Date: { type: new GraphQLNonNull(GraphQLDate) },
        Start_Reservation: { type: new GraphQLNonNull(GraphQLTime) },
        End_Reservation: { type: GraphQLTime },
        user: {
            type: UserType,
            resolve(parent) {
                return User.findById(parent.userID)
            }
        },
        gym: {
            type: GymType,
            resolve(parent) {
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
        equipment: {
            type: new GraphQLList(EquipmentType),
            resolve(parent) {
                return Equipment.find({ gymID: parent.id })
            }
        },
        opinions: {
            type: new GraphQLList(OpinionType),
            resolve(parent) {
                return Opinion.find({ gymID: parent.id })
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
        gym: {
            type: new GraphQLList(GymType),
            resolve(parent) {
                return Gym.findById(parent.gymID)
            }
        }
    })
});

const SportObjectType = new GraphQLObjectType({
    name: 'SportObject',
    fields: () => ({
        id: { type: GraphQLID },
        Name: { type: GraphQLString },
        NumberOfGyms: { type: GraphQLInt },
        gym: {
            type: new GraphQLList(GymType),
            resolve(parent) {
                return Gym.find({ SportObjectID: parent.id })
            }
        },
        address: {
            type:new GraphQLList(AddressType),
            resolve(parent) {
                return Address.find({SportObjectID: parent.id})
            }
        },
    })
});

const OpinionType = new GraphQLObjectType({
    name: 'Opinion',
    fields: () => ({
        id: { type: GraphQLID },
        Descryption: { type: new GraphQLNonNull(GraphQLString) },
        StarRate: { type: new GraphQLNonNull(GraphQLFloat) },
        gym: {
            type: GymType,
            resolve(parent) {
                return Gym.findById(parent.gymID)
            }
        },
        user: {
            type: UserType,
            resolve(parent) {
                return User.findById(parent.userID)
            }
        }

    })
});

const AddressType = new GraphQLObjectType({
    name: 'Address',
    fields: () => ({
        id: { type: GraphQLID },
        Street: { type: new GraphQLNonNull(GraphQLString) },
        Number: { type: new GraphQLNonNull(GraphQLString) },
        ZipCode: { type: new GraphQLNonNull(GraphQLString) },
        City: { type: new GraphQLNonNull(GraphQLString) },
        Province: { type: new GraphQLNonNull(GraphQLString) },
        sportObject: {
            type: SportObjectType,
            resolve(parent) {
                return SportObject.findById(parent.SportObjectID)
            }
        },
        company:{
            type: CompanyType,
            resolve(parent) {
                return Company.findById(parent.CompanyID)
            }
        }
    })
});

const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
        id: { type: GraphQLID },
        Name: { type: new GraphQLNonNull(GraphQLString) },
        Nip: { type: new GraphQLNonNull(GraphQLString) },
        address: {
            type:new GraphQLList(AddressType),
            resolve(parent) {
                return Address.find({SportObjectID: parent.id})
            }
        },
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
        sportObject: {
            type: SportObjectType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return SportObject.findById(args.id)
            }
        },
        opinion: {
            type: OpinionType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Opinion.findById(args.id)
            }
        },
        address: {
            type: AddressType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Address.findById(args.id)
            }
        },
        company: {
            type: CompanyType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Company.findById(args.id)
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
        },
        sportObjects: {
            type: new GraphQLList(SportObjectType),
            resolve() {
                return SportObject.find({})
            }
        },
        opinions: {
            type: new GraphQLList(OpinionType),
            resolve() {
                return Opinion.find({})
            }
        },
        adresses: {
            type: new GraphQLList(AddressType),
            resolve() {
                return Address.find({})
            }
        },
        companies: {
            type: new GraphQLList(CompanyType),
            resolve() {
                return Company.find({})
            }
        },
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                Login: { type: new GraphQLNonNull(GraphQLString) },
                Password: { type: new GraphQLNonNull(GraphQLString) },
                Name: { type: GraphQLString },
                Surname: { type: GraphQLString },
                Age: { type: GraphQLInt },
            },
            resolve(parent, args) {
                let user = new User(args)
                return user.save()
            }
        },
        updateUser: {
            type: UserType,
            args: {
                id: { type: GraphQLID },
                Password: { type: new GraphQLNonNull(GraphQLString) },
                Name: { type: GraphQLString },
                Surname: { type: GraphQLString },
                Age: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return User.findByIdAndUpdate(args.id, args);
            }
        },
        deleteUser: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return User.findByIdAndRemove(args.id);
            }
        },
        addReservation: {
            type: ReservationType,
            args: {
                Date: { type: new GraphQLNonNull(GraphQLDate) },
                Start_Reservation: { type: new GraphQLNonNull(GraphQLTime) },
                End_Reservation: { type: GraphQLTime },
                userID: { type: GraphQLID },
                gymID: { type: GraphQLID }
            },
            resolve(parent, args) {
                let reservation = new Reservation(args)
                return reservation.save()
            }
        },
        updateReservation: {
            type: ReservationType,
            args: {
                Date: { type: new GraphQLNonNull(GraphQLDate) },
                Start_Reservation: { type: new GraphQLNonNull(GraphQLTime) },
                End_Reservation: { type: GraphQLTime },
                userID: { type: GraphQLID },
                gymID: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Reservation.findByIdAndUpdate(args.id, args);
            }
        },
        deleteReservation: {
            type: ReservationType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Reservation.findByIdAndRemove(args.id);
            }
        },
        addGym: {
            type: GymType,
            args: {
                Type: { type: GraphQLString },
                Quantity: { type: GraphQLInt },
                SportObjectID: { type: GraphQLID }
            },
            resolve(parent, args) {
                let gym = new Gym(args)
                return gym.save()
            }
        },
        updateGym: {
            type: GymType,
            args: {
                id: { type: GraphQLID },
                Type: { type: GraphQLString },
                Quantity: { type: GraphQLInt },
                SportObjectID: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Gym.findByIdAndUpdate(args.id, args);
            }
        },
        deleteGym: {
            type: GymType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Gym.findOneAndDelete(args.id)
            }
        },
        addEquipment: {
            type: EquipmentType,
            args: {
                Type: { type: GraphQLString },
                Count: { type: GraphQLInt },
                gymID: { type: GraphQLID }
            },
            resolve(parent, args) {
                let equipment = new Equipment(args)
                return equipment.save()
            }
        },
        updateEquipment: {
            type: EquipmentType,
            args: {
                id: { type: GraphQLID },
                Type: { type: GraphQLString },
                Count: { type: GraphQLInt },
                gymID: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Equipment.findByIdAndUpdate(args.id, args);
            }
        },
        deleteEquipment: {
            type: EquipmentType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Equipment.findOneAndDelete(args.id)
            }
        },
        addSportObject: {
            type: SportObjectType,
            args: {
                Name: { type: GraphQLString },
                NumberOfGyms: { type: GraphQLInt },
            },
            resolve(parent, args) {
                let sportObject = new SportObject(args)
                return sportObject.save()
            }
        },
        updateSportObject: {
            type: SportObjectType,
            args: {
                id: { type: GraphQLID },
                Name: { type: GraphQLString },
                NumberOfGyms: { type: GraphQLInt },
                AddressID:{type:GraphQLID}
            },
            resolve(parent, args) {
                return SportObject.findByIdAndUpdate(args.id, args);
            }
        },
        deleteSportObject: {
            type: EquipmentType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return SportObject.findOneAndDelete(args.id)
            }
        },
        addOpinion: {
            type: OpinionType,
            args: {
                Descryption: { type: new GraphQLNonNull(GraphQLString) },
                StarRate: { type: new GraphQLNonNull(GraphQLFloat) },
                gymID: { type: new GraphQLNonNull(GraphQLID) },
                userID: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                let opinion = new Opinion(args)
                return opinion.save()
            }
        },
        updateOpinion: {
            type: OpinionType,
            args: {
                id: { type: GraphQLID },
                Descryption: { type: new GraphQLNonNull(GraphQLString) },
                StarRate: { type: new GraphQLNonNull(GraphQLFloat) },
                gymID: { type: new GraphQLNonNull(GraphQLID) },
                userID: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                return Opinion.findByIdAndUpdate(args.id, args);
            }
        },
        deleteOpinion: {
            type: EquipmentType,
            args: {
                id: { type: GraphQLID },
            },
            resolve(parent, args) {
                return Opinion.findOneAndDelete(args.id)
            }
        },
        addAddress: {
            type: AddressType,
            args: {
                Street: { type: new GraphQLNonNull(GraphQLString) },
                Number: { type: new GraphQLNonNull(GraphQLString) },
                ZipCode: { type: new GraphQLNonNull(GraphQLString) },
                City: { type: new GraphQLNonNull(GraphQLString) },
                Province: { type: new GraphQLNonNull(GraphQLString) },
                SportObjectID: { type: GraphQLID }

            },
            resolve(parent, args) {
                let address = new Address(args)
                return address.save()
            }
        },
        updateAdress: {
            type: AddressType,
            args: {
                Street: { type: GraphQLString },
                Number: { type: GraphQLString },
                ZipCode: { type: GraphQLString },
                City: { type: GraphQLString },
                Province: { type: GraphQLString },
                SportObjectID: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Address.findByIdAndUpdate(args.id, args);
            }
        },
        deleteAddress: {
            type: AddressType,
            args: {
                id: { type: GraphQLID },
            },
            resolve(parent, args) {
                return Address.findOneAndDelete(args.id)
            }
        },
        addCompany: {
            type: CompanyType,
            args: {
                Name: { type: new GraphQLNonNull(GraphQLString) },
                Nip: { type: new GraphQLNonNull(GraphQLString) },               
            },
            resolve(parent, args) {
                let company = new Company(args)
                return company.save()
            }
        },
        updateCompany: {
            type: CompanyType,
            args: {
                Name: { type: new GraphQLNonNull(GraphQLString) },
                Nip: { type: new GraphQLNonNull(GraphQLString) },  
            },
            resolve(parent, args) {
                return Company.findByIdAndUpdate(args.id, args);
            }
        },
        deleteCompany: {
            type: CompanyType,
            args: {
                id: { type: GraphQLID },
            },
            resolve(parent, args) {
                return Company.findOneAndDelete(args.id)
            }
        },

    }
})

// eslint-disable-next-line no-undef
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});