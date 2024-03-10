import  express  from 'express'
import { getMe, loginUser, registerUser } from '../controllers/userController'
import authMiddleware from '../middlewares/authMiddleware'
const router = express.Router()

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', authMiddleware.protect, getMe)

const routers = router
export default routers;