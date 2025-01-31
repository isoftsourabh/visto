const express = require("express");
const router =express.Router();

const users = require('../controllers/user');
const hometable = require('../controllers/hometable');
const homepage = require('../controllers/homepage');
const employee= require('../controllers/employee');
const agent = require('../controllers/agent');
const dealer = require('../controllers/dealer');
const transport = require('../controllers/transport');
const customer = require('../controllers/customer');
const itemmaster = require('../controllers/itemMaster')
const lablemaster = require('../controllers/label_barcode')
const masterSetting = require('../controllers/masterSetting');
const sti = require('../controllers/sti');
const fillCombo = require('../controllers/fillCombo');
const addProductData= require('../controllers/addProductData');



router.post("/addProducts",addProductData.addProducts)
router.get('/getCodeTypeData', addProductData.getCodeTypeData);
router.get('/getCodeTypeAllData', addProductData.getCodeTypeAllData);
router.put('/editProducts/:primekeyid', addProductData.editProduct);
router.delete('/deleteProducts/:primekeyid', addProductData.deleteProduct);
router.get('/getCompanyId', addProductData.getCompanyId);
router.get('/getNextSequence', addProductData.getNextSequence);


router.post("/add_user",users.addUser);
router.post("/login",users.loginUser);
router.get("/getAllUsers",users.getAll);
router.delete("/deleteUsers/:id",users.deleteUser);
router.put("/editUser/:id",users.editUser);

//homepage
router.post("/add_data",homepage.add_data);
router.get("/get_data",homepage.get_data);
router.delete("/delete_data/:id",homepage.delete_data);
router.put("/update_data/:id",homepage.update_data);

//hometable
router.post("/add_hometable", hometable.add_data);
router.get("/get_hometable", hometable.get_data);
router.put("/update_hometable/:id", hometable.update_data);
// router.delete("/delete_hometable/:id", hometable.delete_data);



router.get("/getMasterSet",masterSetting.getMasterSetting);
router.get("/getCodetype",masterSetting.getAllMasterSettings)

// router.get("/getcmb/:id",fillCombo.getcmb);
router.post("/postcmb",fillCombo.postcmb);
router.post("/postcmbAW",fillCombo.postcmbAW);

router.get("/getMaster",agent.getMaster);
router.get("/getMasterPagination",agent.agents);
router.post("/addMaster",agent.addMaster);

router.get("/getStiDetail",sti.getStiDetail);

router.get("/getEmployee",employee.getEmployee);

router.get("/getDealer",dealer.getDealer);

router.get("/getTransport",transport.getTransport);

router.get("/getCustomer",customer.getCustomer);

router.get("/getItem",itemmaster.getItem);

router.get("/getLable",lablemaster.getLable);




module.exports = router