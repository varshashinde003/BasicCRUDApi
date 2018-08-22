const Database = require("../database/database")
const ObjectID = require("mongodb").ObjectID

class empDataImpl {
    static async getData() {
        try {
            const result = await new Database().read_new({
                "collection": "empData",
                "criteria": {},
                "projection": {}
            })
            return result
        } catch (e) {
            throw e
        }
    }

    static async getDataId(data) {
        try {
            const result = await new Database().read_new_id({
                "collection": "empData",
                "criteria": {
                    "_id": new ObjectID(data)
                },
                "projection": {}
            })
            return result
        } catch (e) {
            throw e
        }
    }

    static async insertData(data) {
        try {
            const result = await new Database().insert_new({
                "collection": "empData",
                "payload": data
            })
            return result
        } catch (e) {
            throw e
        }
    }

    static async updateData(data) {
        try {
            const result = await new Database().update_new({
                "collection": "empData",
                "criteria": {
                    "_id": new ObjectID(data.id)
                },
                "payload": {
                    "$set": {
                        "name": data.name,
                "age": data.age,
                "dept": data.dept,
                "addr": data.addr,
                "email": data.email
                    }
                }
            })
            return result
        } catch (e) {
            throw e
        }
    }

    static async deleteData(data) {
        try {
            const result = await new Database().delete_new({
                "collection": "empData",
                "criteria": {
                    "_id": new ObjectID(data)
                }
            })
            return result
        } catch (e) {
            throw e
        }
    }
}

module.exports = empDataImpl