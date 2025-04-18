const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'));

router.post('/soda', controllers.createRefresco);
router.get('/soda', controllers.getAllRefrescos);
router.get('/soda/:id', controllers.getRefresco);
router.delete('/soda/:id', controllers.deleteRefresco);
router.put('/soda/:id', controllers.updateRefresco);

module.exports = router;

