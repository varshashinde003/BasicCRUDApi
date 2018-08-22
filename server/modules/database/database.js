const config = require("./config.json")
const MongoClient = require("mongodb").MongoClient

class Database {
    /*private methods and the common methods to be reused to avaoid redundancy.. */
    constructor() {
        this.read_new = async function(readParams) {
            try {
                const conn = await getConnection()
                const db = conn.db(config.database)
                const collection = db.collection(readParams.collection)
                const result = await collection.find(readParams.criteria, readParams.projection).toArray()
                conn.close()
                return result
            } catch (e) {
                throw e
            }
        } /*End of this.read_new*/

        this.read_new_id = async function(readParams) {
            try {
                const conn = await getConnection()
                const db = conn.db(config.database);
                const collection = db.collection(readParams.collection)
                const result = await collection.findOne(readParams.criteria, readParams.projection)
                return result
            } catch (e) {
                throw e
            }
        } /*End of this.delete_new*/

        async function getConnection() {
            try {
                const conn = await MongoClient.connect(config.dbUrl, { useNewUrlParser: true })
                return conn
            } catch (e) {
                throw e
            }
        } /*End of getConnection*/

        this.insert_new = async function(insertParams) {
            try {
                const conn = await getConnection()
                const db = conn.db(config.database)
                const collection = db.collection(insertParams.collection)
                const result = await collection.insert(insertParams.payload)
                conn.close()
                return result
            } catch (e) {
                throw e
            }
        } /*End of this.insert_new*/

        this.update_new = async function(updateParams) {
            try {
                const conn = await getConnection()
                const db = conn.db(config.database);
                const collection = db.collection(updateParams.collection)
                const result = await collection.update(updateParams.criteria, updateParams.payload)
                return result
            } catch (e) {
                throw e
            }
        } /*End of this.update_new*/

        this.delete_new = async function(deleteParams) {
            try {
                const conn = await getConnection()
                const db = conn.db(config.database);
                const collection = db.collection(deleteParams.collection)
                const result = await collection.remove(deleteParams.criteria)
                return result
            } catch (e) {
                throw e
            }
        } /*End of this.delete_new*/

        function closeConnection() {
            this.conn.close()
        }
    }
}

module.exports = Database