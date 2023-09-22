const {Router} = require("express")
const { getToDo, saveToDo, deleteToDo } = require("../controllers/ToDoController");

const router = Router();

router.get('/', getToDo)
router.get('/save', saveToDo)
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)

module.exports = router;
