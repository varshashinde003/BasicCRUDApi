const empDataImpl = require("./empDataImpl")

class empDataBusinessLogic {
    static async getData() {
        try {
            return await empDataImpl.getData()
        } catch (e) {
            throw e
        }
    }
    static async getDataId(data) {
        try {
            return await empDataImpl.getDataId(data)
        } catch (e) {
            throw e
        }
    }

    static async insertData(data) {
        try {
            return await empDataImpl.insertData(data)
        } catch (e) {
            throw e
        }
    }

    static async updateData(data) {
        try {
            return await empDataImpl.updateData(data)
        } catch (e) {
            throw e
        }
    }

    static async deleteData(data) {
        try {
            return await empDataImpl.deleteData(data)
        } catch (e) {
            throw e
        }
    }
}
module.exports = empDataBusinessLogic