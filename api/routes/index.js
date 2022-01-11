//index.js
var express = require('express')
const {check, body} = require('express-validator');
var router = express.Router()

// upload file
var multer = require('multer')
var path = require('path')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'api/storage/temp/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})
var upload = multer({storage: storage});
// end upload file

const jwt = require('../_helpers/jwt');
const util = require('../_helpers/util');
const userController = require('../controllers/user');
const roleController = require('../controllers/role');
const messageController = require('../controllers/message');
const universityController = require('../controllers/university');
const subjectController =  require('../controllers/subject')
const certController =  require('../controllers/cert')
const experienceController =  require('../controllers/experience')
const educationsController =  require('../controllers/education')
const fileController = require('../controllers/file');
const adminUsersController = require('../controllers/admin/users');
const definitionsController = require('../controllers/admin/definitions');
const tutorTimingController = require('../controllers/tutorTiming');
const permissonHelper = require("../_helpers/permisson");
const requestController = require("../controllers/requests");
const notificationController = require("../controllers/notification");
const faqController = require("../controllers/admin/faq");
const reviewController = require("../controllers/review");
const languageController = require("../controllers/admin/langugeManager");
const myLessonsController = require("../controllers/mylessons");

const {Response} = require("express");

// const http = require('http')
// const server = http.createServer(express)
// const io = require('socket.io')(server, {
//   allowEIO3: true,
//   cors: {
//     origin: "http://localhost:3000", // from the screenshot you provided
//     methods: ["GET", "POST"]
//   }
// });
//
//
// const port = 3000
// // Listen the server
// server.listen(port, '0.0.0.0')
// console.log('Server listening on localhost:' + port) // eslint-disable-line no-console
//
// // Socket.io
// const messages = []
// io.on('connection', (socket) => {
//   socket.on('last-messages', function (fn) {
//     fn(messages.slice(-50))
//   })
//   socket.on('send-message', function (message) {
//     messages.push(message)
//     socket.broadcast.emit('new-message', message)
//   })
// })


// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })

// define the home page route
// router.get('/', function (req, res) {
//   res.status(200).send({
//     data: "Welcome Node Sequlize API v1"
//   })
// })


router.post('/user/create' , [ util.captcha ,
  check('email').isEmail().withMessage("emailNotValid"),
  check('password').isLength({min: 6}).withMessage('passMaxSize'),], userController.create);

router.post('/user/save-user-image',[jwt.checkAuth], upload.single('file'),  userController.saveUserImage);
router.post('/user/remove-user-image',[jwt.checkAuth],  userController.removeUserImage);
router.post('/user/save-student-detail',[jwt.checkAuth], upload.single('file'), userController.saveStudentDetail);
router.post('/user/get-student-detail',[jwt.checkAuth],  userController.getStudentDetail);
router.post('/user/change-password',[jwt.checkAuth],  userController.changePassword);
router.post('/user/activation',  userController.checkActivation);
router.post('/user/forget-password',  userController.forgetPassword);
router.post('/user/reset-password-code',  userController.checkResetPasswordCode);
router.post('/user/reset-password',  userController.resetPassword);
router.post('/user/getTutor',  userController.getTutor);
router.post('/user/tutors',  userController.getTutors);
router.post('/user/get-transcript',[jwt.checkAuth],  userController.getUserTranscript);
router.post('/user/save-transcript',[jwt.checkAuth],upload.single('file') ,  userController.saveUserTranscript);
router.post('/user/getTutorStatus',[jwt.checkAuth] ,  userController.getTutorStatus);
router.post('/user/reSendVerificationEmail',[jwt.checkAuth] ,  userController.reSendVerificationEmail);
router.post('/user/refreshLogin',[jwt.checkAuth] ,  userController.refreshLogin);
router.post('/user/get-disable-status',[jwt.checkAuth] ,  userController.getDisableStatus);
router.post('/user/set-disable-status',[jwt.checkAuth,jwt.hasRole('tutor')] ,  userController.disableAccount);
router.post('/user/get-course-count',[jwt.checkAuth,jwt.hasRole('tutor')] ,  userController.getCourseCount);


router.post('/user/login', [util.captcha] ,  userController.login);
router.post('/user/change-to-tutor',[jwt.checkAuth]   ,  userController.changeToTutor);

// router.post('/user/logout',  userController.logout);
// router.get('/user',[jwt.checkAuth], userController.getUser);


router.post('/role/create',[jwt.checkAuth,jwt.hasRole('admin')],roleController.create);

router.post('/faq/create',[jwt.checkAuth,jwt.hasRole('admin')],faqController.create);
router.post('/faq/getAll',[jwt.checkAuth,jwt.hasRole('admin')],faqController.getAll);
router.post('/faq/deleteFaq',[jwt.checkAuth,jwt.hasRole('admin')],faqController.deleteFaq);
router.post('/faq/getFaqById',[jwt.checkAuth,jwt.hasRole('admin')],faqController.getFaqById);
router.post('/faq/getAllEnabled', faqController.getAllEnabled);


router.post('/messages',[jwt.checkAuth], messageController.getAll);
router.post('/message/create', [util.captcha] ,  messageController.create);
// router.post('/university/create',[jwt.checkAuth , jwt.hasRole("admin1")]  ,  universityController.create);

//subject
router.post('/subject/subjectList'  ,[jwt.checkAuth] ,  subjectController.subjectList);
router.post('/subject/edit'  ,[jwt.checkAuth] ,  subjectController.edit);
router.post('/subject/save-tutor-subject'  ,[jwt.checkAuth], upload.single('file') ,  subjectController.saveSubject);
router.post('/subject/save-tutor-subject-one'  ,[jwt.checkAuth], upload.single('file') ,  subjectController.save);
router.post('/subject/save-edit-tutor-subject-one'  ,[jwt.checkAuth],  subjectController.saveEdit);
router.post('/subject/max-price'  ,  subjectController.getMaxPrice);



router.post('/subject/items',[jwt.checkAuth]  ,  subjectController.items);

router.post('/subject/create',[jwt.checkAuth]  ,  subjectController.create);
router.post('/subject/delete',[jwt.checkAuth]  ,  subjectController.delete);
router.post('/timing/save-tutor-timing'  ,[jwt.checkAuth] ,  tutorTimingController.saveTiming);
router.post('/timing/getTiming'  ,[jwt.checkAuth] ,  tutorTimingController.getTiming);


//certificate
router.post('/cert/create' , [jwt.checkAuth]  , upload.single('file'), certController.create);
router.post('/cert/certList',[jwt.checkAuth]  ,  certController.certList);
router.post('/cert/delete',[jwt.checkAuth]  ,  certController.delete);
//experience
router.post('/educations/create' , [jwt.checkAuth]  , upload.single('file'), educationsController.create);
router.post('/educations/list',[jwt.checkAuth]  ,  educationsController.list);
router.post('/educations/delete',[jwt.checkAuth]  ,  educationsController.delete);

router.post('/experience/create' , [jwt.checkAuth]  , experienceController.create);
router.post('/experience/list',[jwt.checkAuth]  ,  experienceController.list);
router.post('/experience/delete',[jwt.checkAuth]  ,  experienceController.delete);

router.get('/download/:fileId',[jwt.checkAuth] , fileController.download);
router.post('/file/upload', fileController.upload)

//admin
router.post('/users/list',[jwt.checkAuth]  , [jwt.hasRole("admin")], adminUsersController.list);
router.post('/users/setRole',[jwt.checkAuth] ,[jwt.hasRole("admin")] ,  adminUsersController.setRole);
router.post('/definitions/getAllLessons' , definitionsController.getAllLessons);
router.post('/definitions/createLesson',[jwt.checkAuth],[jwt.hasRole("admin")]   ,  definitionsController.createLesson);
router.post('/definitions/createLessonBulk',[jwt.checkAuth],[jwt.hasRole("admin")]   ,  definitionsController.createLessonBulk);
router.post('/definitions/editLesson',[jwt.checkAuth]   ,  definitionsController.editLesson);
router.post('/definitions/lessonList' ,  definitionsController.lessonList);
router.post('/definitions/universityList',  definitionsController.universityList);
router.post('/definitions/createUny',[jwt.checkAuth] , [jwt.hasRole("admin")]  ,  definitionsController.createUniversity);
router.post('/definitions/editUny',[jwt.checkAuth] , [jwt.hasRole("admin")]  ,  definitionsController.editUniversity);
router.post('/users/changes',[jwt.checkAuth] , [jwt.hasRole("admin")]  ,  adminUsersController.changes);
router.post('/users/changeStatus',[jwt.checkAuth] , [jwt.hasRole("admin")]  ,  adminUsersController.changeStatus);
router.post('/users/changeCount',[jwt.checkAuth] , [jwt.hasRole("admin")]  ,  adminUsersController.changeCount);


router.post("/permisson/hasPermission", permissonHelper.hasPermission);
router.post("/permisson/getRoles", permissonHelper.getRoles);

router.post("/request/create" ,[jwt.checkAuth] , requestController.createRequest)
router.post("/request/getRequests" , [jwt.checkAuth]  , requestController.getRequests)
router.post("/request/deleteRequest" ,[jwt.checkAuth]  ,  requestController.deleteRequest)
router.post("/request/setview" ,[jwt.checkAuth]  ,  requestController.setView)
router.post("/request/getUserRequests" ,[jwt.checkAuth]  ,  requestController.getUserRequests)
router.post("/request/has-unread-request" ,[jwt.checkAuth]  ,  requestController.hasUnread)
router.post("/request/delete-all-request" ,[jwt.checkAuth]  ,  requestController.deleteAllUserMessage)

router.post("/notification/getAllNotification" ,[jwt.checkAuth] , notificationController.getAllNotification)
router.post("/subject/getUserLessonsByUserId" ,[jwt.checkAuth] , subjectController.getUserLessonsByUserId)

router.post("/review/create" ,[jwt.checkAuth] , reviewController.create)
router.post("/review/delete" ,[jwt.checkAuth] , reviewController.delete)
router.post("/review/getReviews" ,[jwt.checkAuth] , reviewController.getReviews)
router.post("/review/edit" ,[jwt.checkAuth] , reviewController.edit)
router.post("/review/getReviewSearch" ,[jwt.checkAuth ] , [jwt.hasRole("admin")] , reviewController.getReviewSearch)
router.post("/review/changeAcceptStatus" ,[jwt.checkAuth ] , [jwt.hasRole("admin")] , reviewController.changeAcceptStatus)


router.post("/language/readFiles" , languageController.readFiles)
router.post("/language/saveAndReload" , languageController.saveAndReload)
router.post("/language/getAll" , languageController.getAll)
router.post("/language/saveLanguage" , languageController.saveLanguage)

router.post("/mylessons/getTutorMylessons" ,[jwt.checkAuth] , myLessonsController.getTutorMylessons)
router.post("/mylessons/get-student-mylessons" ,[jwt.checkAuth] , myLessonsController.getStudentMylessons)
router.post("/mylessons/saveMyLesson" ,[jwt.checkAuth] , myLessonsController.saveMyLesson)
router.post("/mylessons/acceptMyLessonByTutor" ,[jwt.checkAuth] , myLessonsController.acceptMyLessonByTutor)
router.post("/mylessons/get-tutor-lessons" ,[jwt.checkAuth] , myLessonsController.getTutorlessons)
router.post("/mylessons/get-student-lessons" ,[jwt.checkAuth] , myLessonsController.getStudentlessons)
router.post("/mylessons/save-mylesson-replay" ,[jwt.checkAuth] , myLessonsController.saveMyLessonReplay)

router.post("/notification/get-notification-detail" ,[jwt.checkAuth] , notificationController.getNotificationDetail)
router.post("/notification/create" ,[jwt.checkAuth],  [jwt.hasRole("admin")], notificationController.createNotification)
router.post("/notification/get-all" ,[jwt.checkAuth] , notificationController.getAllNotification)
router.post("/notification/get-admin-notifications" ,[jwt.checkAuth] ,  [jwt.hasRole("admin")], notificationController.getAdminAllNotification)



module.exports = router

