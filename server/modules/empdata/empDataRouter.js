const router = require("express").Router()
const empDataBusinessLogic = require("./empDataBusinessLogic")
class empDataRouter {
    static getRouter() {
        router.get("/", async(req, res) => {
            try {
                res.send(await empDataBusinessLogic.getData())
            } catch (e) {
                res.status(500).send(e)
            }
        })
        router.get("/:id", async(req, res) => {
            try {
                res.send(await empDataBusinessLogic.getDataId(req.params.id))
            } catch (e) {
                res.status(500).send(e)
            }
        })
        router.post("/", async(req, res) => {
            try {
                res.send(await empDataBusinessLogic.insertData(req.body))
            } catch (e) {
                console.log(e)
                res.status(500).send(e)
            }
        })
        router.put("/", async(req, res) => {
            try {
                res.send(await empDataBusinessLogic.updateData(req.body))
            } catch (e) {
                console.log(e)
                res.status(500).send(e)
            }
        })
        router.delete("/:id", async(req, res) => {
            try {
                res.send(await empDataBusinessLogic.deleteData(req.params.id))
            } catch (e) {
                res.status(500).send(e)
            }
        })
        return router
    }
}

module.exports = empDataRouter