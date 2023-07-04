-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 28, 2021 at 02:17 PM
-- Server version: 10.3.32-MariaDB
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tutorloo_teach`
--

DELIMITER $$
--
-- Procedures
--
$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `Certificates`
--

CREATE TABLE `Certificates` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `certName` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `startYear` int(11) DEFAULT NULL,
  `endYear` int(11) DEFAULT NULL,
  `fileId` int(11) DEFAULT NULL,
  `issuedby` varchar(255) DEFAULT NULL,
  `acceptStatus` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Certificates`
--

INSERT INTO `Certificates` (`id`, `userId`, `certName`, `description`, `startYear`, `endYear`, `fileId`, `issuedby`, `acceptStatus`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'ICDL', 'ICDL description', 2015, 2017, 2, 'Microsoft', 0, '2021-10-10 07:03:54', '2021-10-10 07:03:54'),
(2, 3, 'very', 'ok', 1960, 1961, 5, 'TV', 0, '2021-10-11 18:58:41', '2021-10-11 18:58:41');

-- --------------------------------------------------------

--
-- Table structure for table `ChangeLogs`
--

CREATE TABLE `ChangeLogs` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Communications`
--

CREATE TABLE `Communications` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `accountId` varchar(128) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Communications`
--

INSERT INTO `Communications` (`id`, `name`, `accountId`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'Skype', '@skipi', 1, '2021-10-10 06:58:39', '2021-10-10 06:58:39'),
(2, 'Skype', '1234', 2, '2021-10-10 23:02:53', '2021-10-10 23:02:53'),
(3, 'Skype', '123', 3, '2021-10-11 18:57:44', '2021-10-11 18:57:44'),
(4, 'Skype', '1234123', 7, '2021-10-18 14:27:31', '2021-10-18 14:27:31'),
(5, 'Skype', '123', 8, '2021-10-18 14:54:17', '2021-10-18 14:54:17'),
(6, 'Skype', '12312', 9, '2021-10-18 15:30:05', '2021-10-18 15:30:05'),
(7, 'Skype', '123213', 10, '2021-10-21 14:13:08', '2021-10-21 14:13:08'),
(8, 'Skype', '111', 12, '2021-10-24 04:13:35', '2021-10-24 04:13:35');

-- --------------------------------------------------------

--
-- Table structure for table `Educations`
--

CREATE TABLE `Educations` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `university` varchar(255) DEFAULT NULL,
  `fileId` int(11) DEFAULT NULL,
  `startYear` int(11) DEFAULT NULL,
  `endYear` int(11) DEFAULT NULL,
  `acceptStatus` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `levelEducation` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Educations`
--

INSERT INTO `Educations` (`id`, `userId`, `university`, `fileId`, `startYear`, `endYear`, `acceptStatus`, `createdAt`, `updatedAt`, `levelEducation`, `department`) VALUES
(2, 3, 'ttt', 6, 1960, 1961, 0, '2021-10-14 07:32:15', '2021-10-14 07:32:15', NULL, NULL),
(5, 9, 'asdfa', 12, 1960, 1961, 2, '2021-10-18 15:33:45', '2021-12-10 18:34:49', NULL, NULL),
(6, 9, 'asdfasdf', 13, 1960, 1961, 2, '2021-10-18 15:33:54', '2021-12-10 18:34:53', NULL, NULL),
(7, 12, 'cscscs', 16, 1960, 1961, 0, '2021-10-24 04:40:35', '2021-10-24 04:40:35', NULL, NULL),
(9, 22, 'x', 0, 1963, 1964, 0, '2021-10-30 17:06:10', '2021-10-30 17:06:10', 'c', 'c'),
(10, 34, 'sdvs', 0, 1963, 1978, 1, '2021-11-13 17:07:24', '2021-11-13 17:17:04', 'vdvsd', 'vsdvs'),
(11, 35, 'sdfsdf', 0, 1962, 1964, 0, '2021-11-13 17:08:16', '2021-11-13 17:08:16', 'sdfsdf', 'sdfdfgdfg'),
(12, 36, 'University of Manitoba', 0, 2010, 2018, 0, '2021-11-13 17:21:02', '2021-11-13 17:21:02', 'Undergraduate Science Student', 'Science'),
(13, 41, 'c', 0, 1982, 1989, 0, '2021-11-27 22:15:52', '2021-11-27 22:15:52', 'Undergraduate Science Student', 'Science'),
(14, 6, 'Carleton University', 37, 1961, 1963, 0, '2021-12-21 16:07:25', '2021-12-21 16:07:25', 'Bachelor', 'Computer Science'),
(15, 47, 'test', 0, 2013, 2020, 0, '2021-12-25 04:01:12', '2021-12-25 04:01:12', 'test', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `Experiences`
--

CREATE TABLE `Experiences` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `startYear` int(11) DEFAULT NULL,
  `endYear` int(11) DEFAULT NULL,
  `acceptStatus` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Experiences`
--

INSERT INTO `Experiences` (`id`, `userId`, `company`, `position`, `startYear`, `endYear`, `acceptStatus`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Andishe', 'Network Manager', 2008, 2018, 0, '2021-10-10 07:05:39', '2021-10-10 07:05:39'),
(2, 3, 'ok', 'yyt', 1960, 1961, 0, '2021-10-11 18:59:10', '2021-10-11 18:59:10');

-- --------------------------------------------------------

--
-- Table structure for table `FAQs`
--

CREATE TABLE `FAQs` (
  `id` int(11) NOT NULL,
  `question` varchar(255) DEFAULT NULL,
  `answer` text DEFAULT NULL,
  `sortNumber` int(11) DEFAULT NULL,
  `isEnable` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `FAQs`
--

INSERT INTO `FAQs` (`id`, `question`, `answer`, `sortNumber`, `isEnable`, `createdAt`, `updatedAt`) VALUES
(1, 'How to become a tutor ', '<p>STEP 1. Click \"Sign up/Sign in\" at the top right of this page.</p><p>STEP 2. Click \"Sign up\" and and sign up as \"Tutor\". </p><p>STEP 3. Complete the five-step registration process so we can create you a professional advertisement. </p><p>\n</p>', 6, 1, '2021-11-06 21:31:43', '2021-12-17 00:40:07'),
(3, 'How to Leave a Review', '<p>1) After a tutoring session you can leave a comment on the profile of the person who tutored you.</p><p>2) Click on the profile of the tutor.</p><p>3) Scroll down to the bottom of their profile page to the ‘Review’ Section.</p><p>4) Submit your review. </p><p><br></p><p>You can only leave reviews for tutors who already accepted to tutor you.</p>', 4, 1, '2021-11-06 21:33:49', '2021-12-17 00:42:48'),
(5, 'How to find a tutor', '<p>STEP 1. Go to the front page.</p><p>STEP 2. Click on the drop-down menu to select a class that you want help with or click on \"Find Tutor\" at the top right of this page.</p><p>STEP 3. Select a tutor profile and send them a message.\n</p>', 5, 1, '2021-12-13 17:30:34', '2021-12-17 00:41:18'),
(6, 'How to add a new Subject to your tutoring Ad ', '<p>STEP 1. Open your profile by clicking your name in the right-hand corner of this page.</p><p>STEP 2. On the left side of the page, click “Lessons”. \n</p><p>STEP 3. Click on the Plus sign in front of “Subject” and fill out the details.\n</p>', 4, 1, '2021-12-13 17:47:25', '2021-12-17 00:43:11'),
(7, 'How to disable a tutoring Ad ', '<p>STEP 1. Open your profile by clicking your name in the right-hand corner of this page. </p><p>STEP 2. Click “My Account”\n</p><p>STEP 3. Disable or remove you Ad by clicking \"Delete my Ad\"</p>', 1, 1, '2021-12-13 17:50:01', '2021-12-17 00:43:28');

-- --------------------------------------------------------

--
-- Table structure for table `Files`
--

CREATE TABLE `Files` (
  `id` int(11) NOT NULL,
  `path` varchar(255) DEFAULT NULL,
  `ext` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Files`
--

INSERT INTO `Files` (`id`, `path`, `ext`, `userId`, `createdAt`, `updatedAt`) VALUES
(2, 'api/storage/tutor/1/cert_1633849434550.jpg', '.jpg', 1, '2021-10-10 07:03:54', '2021-10-10 07:03:54'),
(3, 'api/storage/tutor/1/educ_1633849509271.jpg', '.jpg', 1, '2021-10-10 07:05:09', '2021-10-10 07:05:09'),
(5, 'api/storage/tutor/3/cert_1633978719697.jpg', '.jpg', 3, '2021-10-11 18:58:40', '2021-10-11 18:58:40'),
(6, 'api/storage/tutor/3/educ_1634196735232.png', '.png', 3, '2021-10-14 07:32:15', '2021-10-14 07:32:15'),
(7, 'storage/tutor/3/avatar_1634196850670.jpg', '.jpg', 3, '2021-10-14 07:34:10', '2021-10-14 07:34:10'),
(8, 'storage/tutor/7/avatar_1634567247809.jpg', '.jpg', 7, '2021-10-18 14:27:31', '2021-10-18 14:27:31'),
(9, 'api/storage/tutor/7/educ_1634567538221.jpg', '.jpg', 7, '2021-10-18 14:32:18', '2021-10-18 14:32:18'),
(10, 'api/storage/tutor/7/educ_1634567536767.jpg', '.jpg', 7, '2021-10-18 14:32:19', '2021-10-18 14:32:19'),
(11, 'storage/tutor/9/avatar_1634571004655.jpg', '.jpg', 9, '2021-10-18 15:30:05', '2021-10-18 15:30:05'),
(12, 'api/storage/tutor/9/educ_1634571225519.jpg', '.jpg', 9, '2021-10-18 15:33:45', '2021-10-18 15:33:45'),
(13, 'api/storage/tutor/9/educ_1634571234385.jpg', '.jpg', 9, '2021-10-18 15:33:54', '2021-10-18 15:33:54'),
(14, 'storage/tutor/10/avatar_1634825585154.jpg', '.jpg', 10, '2021-10-21 14:13:05', '2021-10-21 14:13:05'),
(15, 'storage/tutor/12/avatar_1635048813730.jpg', '.jpg', 12, '2021-10-24 04:13:33', '2021-10-24 04:13:33'),
(16, 'api/storage/tutor/12/educ_1635050435263.jpg', '.jpg', 12, '2021-10-24 04:40:35', '2021-10-24 04:40:35'),
(17, 'api/storage/tutor/12/educ_1635050453513.jpg', '.jpg', 12, '2021-10-24 04:40:53', '2021-10-24 04:40:53'),
(18, 'storage/tutor/15/transcript_1635544716503.png', '.png', 15, '2021-10-29 21:58:37', '2021-10-29 21:58:37'),
(19, '/storage/tutor/21/avatar_1635599404928.jpg', '.jpg', 21, '2021-10-30 13:10:04', '2021-10-30 13:10:04'),
(20, 'storage/tutor/29/avatar_1636234115649.jpg', '.jpg', 29, '2021-11-06 21:28:36', '2021-11-06 21:28:36'),
(21, 'storage/tutor/1/avatar_1636292287906.jpg', '.jpg', 1, '2021-11-07 13:38:07', '2021-11-07 13:38:07'),
(22, 'storage/tutor/1/transcript_1636292815998.jpg', '.jpg', 1, '2021-11-07 13:46:56', '2021-11-07 13:46:56'),
(23, 'storage/tutor/32/avatar_1636822590779.jpg', '.jpg', 32, '2021-11-13 16:56:30', '2021-11-13 16:56:30'),
(24, 'storage/tutor/33/avatar_1636822603829.jpg', '.jpg', 33, '2021-11-13 16:56:43', '2021-11-13 16:56:43'),
(28, 'storage/tutor/35/avatar_1636822833238.jpg', '.jpg', 35, '2021-11-13 17:00:37', '2021-11-13 17:00:37'),
(29, 'storage/tutor/34/avatar_1636822870877.jpg', '.jpg', 34, '2021-11-13 17:01:10', '2021-11-13 17:01:10'),
(31, 'storage/tutor/35/transcript_1636823178749.png', '.png', 35, '2021-11-13 17:06:19', '2021-11-13 17:06:19'),
(33, 'storage/tutor/40/avatar_1637568779900.jpg', '.jpg', 40, '2021-11-22 08:13:00', '2021-11-22 08:13:00'),
(34, 'storage/tutor/6/avatar_1639931860329.jpg', '.jpg', 6, '2021-12-19 16:37:40', '2021-12-19 16:37:40'),
(36, 'storage/tutor/2/avatar_1639934219021.jpg', '.jpg', 2, '2021-12-19 17:16:59', '2021-12-19 17:16:59'),
(37, 'api/storage/tutor/6/educ_1640102844669.jpg', '.jpg', 6, '2021-12-21 16:07:24', '2021-12-21 16:07:24'),
(41, 'storage/tutor/48/avatar_1640625118542.jpg', '.jpg', 48, '2021-12-27 17:11:59', '2021-12-27 17:11:59');

-- --------------------------------------------------------

--
-- Table structure for table `Gender`
--

CREATE TABLE `Gender` (
  `id` int(11) NOT NULL,
  `title` varchar(60) NOT NULL,
  `disable` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Languages`
--

CREATE TABLE `Languages` (
  `id` int(11) NOT NULL,
  `key` varchar(128) DEFAULT NULL,
  `value` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Languages`
--

INSERT INTO `Languages` (`id`, `key`, `value`) VALUES
(1, 'welcome', 'Welcome'),
(2, 'faq', 'FAQ'),
(3, 'home', 'Home'),
(4, 'contactUs', 'Contact Us'),
(5, 'about', 'About Us'),
(7, 'language', 'Resources'),
(8, 'err404', 'Page Not Found ...'),
(9, 'email', 'Email'),
(10, 'role', 'Role'),
(11, 'oldPassword', 'Old Password'),
(12, 'newPassword', 'New Password'),
(13, 'confirmNewPassword', 'Confirm New Password'),
(14, 'password', 'Password'),
(15, 'confirmPassword', 'Confirm Password'),
(16, 'passwordRequired', 'Password is required'),
(17, 'oldPasswordRequired', 'Old Password is required'),
(18, 'passwordsIdentical', 'Passwords must be identical'),
(19, 'passwordMinLen', 'Password must have at least {minLenNum} letters'),
(20, 'loginFailed', 'Email or Password is wrong'),
(21, 'roleNotValid', 'Role is not valid'),
(22, 'emailRequired', 'Email is required'),
(23, 'emailNotValid', 'Email is not valid'),
(24, 'emailReserved', 'This email is already registered'),
(25, 'roleReserved', 'This role is already registered'),
(26, 'welcomeRegister', 'Welcome To Register'),
(27, 'welcomeLogin', 'Welcome To Login'),
(28, 'alreadyAccount', 'Already have an account?'),
(29, 'dontAccount', 'Don\'t have an account?'),
(30, 'forgotPassword', 'Forgot Password'),
(31, 'youCanSign', 'You can also Sign In with'),
(32, 'signUp', 'Sign Up'),
(33, 'signIn', 'Sign In'),
(34, 'register', 'Register'),
(35, 'student', 'Student'),
(36, 'tutor', 'Tutor'),
(37, 'agree', 'I agree to'),
(38, 'termsConditions', 'Terms and Conditions'),
(39, 'privacyPolicy', 'Privacy Policy'),
(40, 'and', '&'),
(41, 'completeRegistration', 'Complete registration'),
(42, 'fName', 'First Name'),
(43, 'lName', 'Last Name'),
(44, 'firstNameRequired', 'First Name is required'),
(45, 'lastNameRequired', 'Last Name is required'),
(46, 'communication', 'Communication channel'),
(47, 'addChannel', 'Add one more channel'),
(48, 'accountId', 'Id'),
(49, 'subject', 'Subject'),
(50, 'next', 'Next'),
(51, 'save', 'Save'),
(52, 'end_year_not_valid', 'End year is not valid.'),
(53, 'start_year_not_valid', 'Start year is not valid.'),
(54, 'enterTitle', 'Enter the company name'),
(55, 'enterPosition', 'Enter the position'),
(56, 'search_error', 'An error occurred while searching'),
(57, 'name', 'Name'),
(58, 'lastname', 'Last Name'),
(59, 'status', 'Status'),
(60, 'isactive', 'Active'),
(61, 'active', 'Active'),
(62, 'new', 'New'),
(63, 'search', 'Search'),
(64, 'lesson', 'Subjects'),
(65, 'Add_new_lesson', 'Add new lesson'),
(66, 'edit_lesson', 'Edit lesson'),
(67, 'required', 'Required'),
(68, 'Status', 'Status'),
(69, 'fillCommunication', 'Fill Communication item'),
(70, 'duplicateItem', 'This item has already been registered'),
(71, 'headlineRequired', 'Headline is required'),
(72, 'bioMoreRequired', 'Bio is required'),
(73, 'headline', 'Headline'),
(74, 'bioMore', 'Bio'),
(75, 'desc', 'Description'),
(76, 'fillSubject', 'Select one subject'),
(77, 'issuedBy.label', 'Issued by'),
(78, 'company.label', 'Company'),
(79, 'issuedBy.required', 'Issued by is required'),
(80, 'company.required', 'Company is required'),
(81, 'position.label', 'Work Position'),
(82, 'position.required', 'Position is required'),
(83, 'startYear.label', 'Start Year'),
(84, 'startYear.required', 'Start Year is required'),
(85, 'endYear.label', 'End Year'),
(86, 'endYear.required', 'End Year is required'),
(87, 'file.label', 'File'),
(88, 'file.required', 'File is required'),
(89, 'file.isValidSize', 'File size is not valid. The file size should be less than 2 MB.'),
(90, 'file.saved', 'Save the image'),
(91, 'back', 'Back'),
(92, 'chooseFile', 'Choose a file or drop it here...'),
(93, 'dropFile', 'Drop file here...'),
(94, 'browse', 'Browse'),
(95, 'add', 'Add'),
(96, 'subjects.title', 'Subjects'),
(97, 'subjects.label', 'Subject'),
(98, 'subjects.subject', 'What Course do you want to tutor?'),
(99, 'subjects.description', 'Description'),
(100, 'subjects.add', 'Add'),
(101, 'subjects.grade_placeholder', 'What was your grade for this course?'),
(102, 'subjects.grade_title', 'Grade received'),
(103, 'subjects.complete_year', 'Which year did you complete this course?'),
(104, 'subjects.lesson.required', 'Required'),
(105, 'subjects.grade.required', 'Required'),
(106, 'subjects.year', 'Year class was taken'),
(107, 'subjects.year_placeholder', 'ex. 2021, 2020, 2019…'),
(108, 'subjects.subject_empty_alert', 'If you don\'t choose any courses, your profile would not be shown on the search. Would you like to continue?'),
(109, 'subjects.price.label', 'Price'),
(110, 'subjects.price.placeholder', 'Enter price per session'),
(111, 'subjects.price.required', 'Required'),
(112, 'subjects.header_alert', 'You can also enter this information later in your profile menu.'),
(113, 'generalInfo', 'General info'),
(114, 'university_name', 'What university do you go to?'),
(115, 'Please_enter_university_name', 'E.g. Carleton University'),
(116, 'university_email', 'University e-mail'),
(117, 'university_emailPattern', 'University email domain'),
(118, 'Save', 'Save'),
(119, 'cancel', 'Cancel'),
(120, 'accountSetting', 'Account Setting'),
(121, 'profile', 'Profile'),
(122, 'lessons', 'Lessons'),
(123, 'courses', 'Courses'),
(124, 'calendar', 'Calendar'),
(125, 'requests', 'Messages'),
(126, 'account', 'Account'),
(127, 'setting', 'Setting'),
(128, 'changePassword', 'Change Password'),
(129, 'done_successfully', 'Done successfully'),
(130, 'v_enter_university_emailPattern', 'University Email Domain Required.'),
(131, 'v_enter_university_email', 'University Email Required.'),
(132, 'v_enter_university_name', 'University Name Required.'),
(133, 'user_change', 'Review Changes'),
(134, 'finish', 'Finish'),
(135, 'review_change', 'Review Change'),
(136, 'reject', 'Reject'),
(137, 'accept', 'Verified'),
(138, 'accept_confim', 'Are you sure accept?'),
(139, 'reject_confim', 'Are you sure reject?'),
(140, 'tutorApplication', 'Tutor Application'),
(141, 'tutorTimingSubject1', 'Click on any time slot to specify your availability'),
(142, 'tutorTimingSubject2', 'You can remove the availability by clicking on the slot again. You can also change your availability later by going to your profile and clicking Calendar'),
(143, 'education', 'Education'),
(144, 'v_enter_Required', 'Required !'),
(145, 'please_enter_subject', 'Please enter subject'),
(146, 'admin', 'Administrator'),
(147, 'Disable', 'Disable'),
(148, 'confirmed', 'Confirmed'),
(149, 'notconfirmed', 'Not Confirmed'),
(150, 'availability', 'Availability'),
(151, 'findTutors', 'Find Tutors'),
(152, 'aboutMe', 'About Us'),
(153, 'tutorName', 'Tutor Name'),
(154, 'findTutor', 'Find Tutor'),
(155, 'UserPicture', 'User Picture'),
(156, 'CreateAt', 'Created At'),
(157, 'UpdatedAt', 'Updated At'),
(158, 'UserChange', 'User Change'),
(159, 'UserChangeCount', 'Count of Changes'),
(160, 'IncompleteChangeCount', 'Count of Incomplete Users'),
(161, 'edit', 'Edit'),
(162, 'remove', 'Remove'),
(163, 'pending', 'Not Verified'),
(164, 'success_delete', 'Successfully deleted.'),
(165, 'success_failed', 'Deleted failed'),
(166, 'delete_confirm', 'Are you sure?'),
(167, 'educations.title', 'Education'),
(168, 'educations.enterUniversity', 'Enter university name'),
(169, 'educations.degree.label', 'Degree'),
(170, 'educations.degree.required', 'Required'),
(171, 'educations.university.label', 'What university do you go to?'),
(172, 'educations.university.required', 'Required'),
(173, 'educations.levelEducation.label', 'What is your level of education?'),
(174, 'educations.levelEducation.required', 'Required'),
(175, 'educations.levelEducation.eg', 'E.g. Undergraduate Student in Electrical Engineering'),
(176, 'educations.department.label', 'What is your department?'),
(177, 'educations.department.eg', 'E.g. Science'),
(178, 'educations.department.required', 'Required'),
(179, 'experience.title', 'Experience'),
(180, 'experience.label', 'Experience'),
(181, 'experience.company.label', 'Company'),
(182, 'experience.company.required', 'Required'),
(183, 'experience.company.enterHelp', 'Please enter company name'),
(184, 'experience.position.label', 'Position'),
(185, 'experience.position.required', 'Required'),
(186, 'experience.position.enterHelp', 'Please enter company name'),
(187, 'certificate.title', 'Certificate'),
(188, 'certificate.description.label', 'Description'),
(189, 'certificate.description.required', 'Required'),
(190, 'certificate.certName.label', 'Certificate Name'),
(191, 'certificate.certName.required', 'Required'),
(192, 'certificate.issuedBy.label', 'Issued by'),
(193, 'certificate.issuedBy.required', 'Required'),
(194, 'sendMessage', 'Send Message'),
(195, 'please_type_message', 'Please type a message'),
(196, 'sendMessage_success', 'Message sent successfully.'),
(197, 'sendMessage_error', 'Failed to send message.'),
(198, 'SetRole', 'Set Role'),
(199, 'myLesson.saveerror', 'An error occurred while saving.'),
(200, 'myLesson.userlessonId.required', 'This field is required.'),
(201, 'myLesson.description_placeholder', 'Please enter description'),
(202, 'mylesson.exist', 'This lesson has already been selected.'),
(203, 'myLesson.added', 'This time was chosen for you.'),
(204, 'myLesson.SendRequest', 'Send Request'),
(205, 'program', 'Program'),
(206, 'upload', 'Upload'),
(207, 'information.trainingMethods.label', 'What kind of tutoring do you offer?'),
(208, 'information.trainingMethods.placeholder', 'Please select method'),
(209, 'information.trainingMethods.required', 'Required'),
(210, 'Reviews', 'Reviews'),
(211, 'PostReview', 'Post a Review'),
(212, 'review.reviewLessonId.label', 'Choose a lesson'),
(213, 'review.reviewLessonId.placeholder', 'Select a subject'),
(214, 'review.reviewLessonId.required', 'Required'),
(215, 'review.rate.label', 'Rate'),
(216, 'review.rate.required', 'Required'),
(217, 'review.comment.label', 'Comment'),
(218, 'review.comment.placeholder', 'Please write your comment'),
(219, 'review.comment.required', 'Required'),
(220, 'Send', 'Send'),
(221, 'program_placeholder', 'E.g. Undergraduate Student in Electrical Engineering'),
(222, 'headline_placeholder', '3rd year mechanical Engineering student'),
(223, 'bioMore_placeholder', 'When students are hooked in by your headline, they can read more about your accomplishments, teaching style and experience.'),
(224, 'comfirm_email_after_register', 'An account activation link has been sent to you. Please check your email.'),
(225, 'transcript.title', 'Transcript'),
(226, 'transcript.header_alert', 'OPTIONAL: upload your transcript to put a ‘verified’ badge on your ad. Please highlight, on your transcript, the course you want to receive verification for.'),
(227, 'transcript.label', 'Transcript'),
(228, 'transcript.download', 'Download'),
(229, 'transcript.history', 'History'),
(230, 'privacyPolicyChecked', 'Required'),
(231, 'skipStep', 'Skip Step'),
(232, 'Timing', 'My Availability'),
(233, 'tutor_account_profile', 'Tutor Account'),
(234, 'student_account_profile', 'Student Account'),
(235, 'mycourses', 'My Courses'),
(236, 'accepted', 'Verified'),
(237, 'tutor_register_finish', 'Your account has been successfully completed.'),
(238, 'no_subject', 'You have not entered a lesson for yourself. You will not be displayed in the search'),
(239, 'email_not_confirmed', 'Your email not confirmed.'),
(240, 'faild_message', 'An error occurred, Operation failed.'),
(241, 'review_nolesson', 'You did not take this lesson with this tutor'),
(242, 'review_rateNotValid', 'Rate is not valid'),
(243, 'all', 'All'),
(244, 'tutorLname', 'Tutor Last name'),
(245, 'review_commentLong', 'Comment length is not allowed'),
(246, 'review_exist', 'You have already submitted comments for this lesson.'),
(247, 'review.saveSuccess', 'Your comment and rating were saved successfully. They will be shown on your profile after going through a review.'),
(248, 'price-0', 'Free'),
(249, 'verified_msg', 'Successfully verified.'),
(250, 'reject_msg', ' Failed'),
(251, 'verify_failed_msg', 'verify operation failed'),
(252, 'subjects.incomplete_form', 'Please use \"Add\" to save your information. Would you like to continue without saving the information?'),
(253, 'educations.incomplete_form', 'Please use \"Add\" to save your information. Would you like to continue without saving the information?'),
(254, 'educations.file.message', 'You can upload a degree document. This will increase the credibility of your account.'),
(255, 'educations.file.size_message', 'Maximum file size – 2MB.'),
(256, 'educations.header_alert', 'Educational information is not mandatory. You can skip this step or add it later by going to your profile.'),
(257, 'myLessons', 'Request Management '),
(258, 'bookLesson', 'Book Lesson'),
(259, 'mylesson.filter.lessons', 'Lesson'),
(260, 'mylesson.filter.placeholder', 'Select Lesson'),
(261, 'mylesson.filter.acceptStatus', 'Status'),
(262, 'mylesson.filter.status.verified', 'Accepted'),
(263, 'mylesson.filter.status.pending', 'Not Verified'),
(264, 'mylesson.filter.status.all', 'All'),
(265, 'account.sendEmailAgain', 'Resend Email'),
(266, 'mylesson.filter.status.rejected', 'Rejected'),
(267, 'account.verified', 'Verified'),
(268, 'account.unVerified', 'Unverified'),
(269, 'account.unVerifiedAlert', 'Your Email Address has not been verified yet. \nPlease check your email, and complete the verification process.'),
(270, 'account.reSendMessage', 'You can resend the verification email here if you haven\'t received it. '),
(271, 'account.unVerifiedHeaderMessage', 'Your email has not been verified yet.'),
(272, 'account.reSendSuccessFull', 'New verification email has been sent to your email address. '),
(273, 'mylessons.acceptStatus.verify.alert', 'Would you like to accept this lesson?'),
(274, 'mylessons.acceptStatus.reject.alert', 'Would you like to reject this lesson?'),
(275, 'mylesson.acceptStatus.pending', 'Not Verified'),
(276, 'mylesson.acceptStatus.verified', 'Verified'),
(277, 'mylesson.acceptStatus.rejected', 'Rejected'),
(278, 'tutors.trainingMethods.label', 'Training Method'),
(279, 'tutors.find', 'Find Tutors'),
(280, 'change_to_tutor.title', 'Do you like to work as a tutor?'),
(281, 'change_to_tutor', 'Change to Tutor'),
(282, 'change_to_tutor.alert', 'If you switch to Tutor account you would still be able to book lessons with other tutors. By clicking on \"Change\" you will be redirected to the registration page. '),
(283, 'contactus.text', 'If you have any questions, or suggestions or just want to give us a shoutout, we’d love to hear from you!'),
(284, 'insert.review', 'You can leave your review about this tutor here. Please select the course that you took, rate the tutor and leave your comment. '),
(285, 'schedule.label', 'Schedule'),
(286, 'schedule.title', 'Please select any available time slot If you like to schedule a lesson with the tutor.'),
(287, 'tutor_account_system_msg', 'Notifications'),
(288, 'mylesson.grid.status', 'Status'),
(289, 'mylesson.grid.takendate', 'Date'),
(290, 'mylesson.grid.tutorname', 'Tutor Name'),
(291, 'myLessons.taken', 'My Lessons'),
(292, 'mylesson.held.notfinished', 'Not Finish'),
(293, 'mylesson.grid.held', 'Held'),
(294, 'mylesson.grid.lesson', 'Lesson'),
(295, 'mylesson.grid.date', 'Date'),
(296, 'mylesson.held.finished', 'Finished'),
(297, 'tutor_register_finish_line2', 'Your account has been successfully completed.'),
(298, 'schedule.empty_alert', 'You have not chosen any time for training. Will you do it later?'),
(299, 'tutor_register_finish_line1', 'Your account has been successfully completed.'),
(300, 'mylesson.request.verify.user', 'Your request has been accepted.'),
(301, 'mylesson.request.from.user', 'You have a training request.'),
(302, 'mylesson.request.from.user.link', 'Click here to view'),
(303, 'subjects.tutor.year', 'Class year'),
(304, 'mylesson.request.reject.user', 'Sorry, your request was not accepted.'),
(305, 'mylesson.reject.messages.temp.2', ''),
(306, 'mylesson.reject.messages.temp.1', ''),
(307, 'mylesson.reject.messages.temp.4', ''),
(308, 'mylesson.verify.messages.temp.1', ''),
(309, 'mylesson.reject.messages.temp.3', ''),
(310, 'mylesson.verify.messages.temp.4', ''),
(311, 'mylesson.verify.messages.temp.3', ''),
(312, 'mylesson.verify.messages.temp.2', ''),
(313, 'tutor_register_finish.nosubject', 'You have not defined any lessons for yourself.'),
(314, 'tutor_register_finish.timing', 'Your account has been successfully completed.'),
(315, 'price.label', 'Price'),
(316, 'mylesson.tutor.message.required', 'Required'),
(317, 'rate.label', 'Rate'),
(318, 'Please_select_one_message', 'Please select one message'),
(319, 'requests.delete_all', 'Would you like to delete this conversation?'),
(320, 'findTutors-notFound', 'No tutors found'),
(321, 'no_message', 'No Message'),
(322, 'forgetPassword', 'Enter your email address associated with your account. We will send you the instructions to reset your password.'),
(323, 'rememberPassword', 'Do you have a user account?'),
(324, 'account.disableMessage', 'By deactivating your account, you remove your profile from search results, hide your profile from the public, but still have the ability to restore and reuse your account.'),
(325, 'account.activeMessage', 'Your account is currently inactive. Activate it by pressing the button below.'),
(326, 'forgetPasswordTitle', 'Forgot Password'),
(327, 'account.disable', 'Disable Account'),
(328, 'account.active', 'Activate Account'),
(329, 'account.delete', 'Remove Account'),
(330, 'account.disable.alert', 'Would you like to deactivate your account?'),
(331, 'mylesson.grid.studentname', 'Student Name'),
(332, 'reviews.no_comment', 'No comments have been posted. You post the first comment.'),
(333, 'contactus.text1', 'To contact us, send us an email or fill out the form below.'),
(334, 'account.disabledHeaderMessage', 'Your account is disabled.'),
(335, 'department', 'Department'),
(336, 'years', 'Years'),
(337, 'levelEducation', 'Level of education');

-- --------------------------------------------------------

--
-- Table structure for table `Lessons`
--

CREATE TABLE `Lessons` (
  `id` int(11) NOT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `isEnable` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Lessons`
--

INSERT INTO `Lessons` (`id`, `subject`, `code`, `isEnable`) VALUES
(2, 'AERO 2001\r', 'AERO', 1),
(3, 'AERO 3240\r', 'AERO', 1),
(4, 'AERO 3700\r', 'AERO', 1),
(5, 'AERO 4003\r', 'AERO', 1),
(6, 'AERO 4302\r', 'AERO', 1),
(7, 'AERO 4306\r', 'AERO', 1),
(8, 'AERO 4402\r', 'AERO', 1),
(9, 'AERO 4446\r', 'AERO', 1),
(10, 'AERO 4540\r', 'AERO', 1),
(11, 'AERO 4608\r', 'AERO', 1),
(12, 'AERO 4842\r', 'AERO', 1),
(13, 'AFRI 1001\r', 'AFRI', 1),
(14, 'AFRI 2002\r', 'AFRI', 1),
(15, 'AFRI 2006\r', 'AFRI', 1),
(16, 'AFRI 3001\r', 'AFRI', 1),
(17, 'AFRI 3003\r', 'AFRI', 1),
(18, 'AFRI 3609\r', 'AFRI', 1),
(19, 'AFRI 3900\r', 'AFRI', 1),
(20, 'AFRI 4060\r', 'AFRI', 1),
(21, 'AFRI 4900\r', 'AFRI', 1),
(22, 'ASLA 1010\r', 'ASLA', 1),
(23, 'ASLA 1020\r', 'ASLA', 1),
(24, 'ASLA 2010\r', 'ASLA', 1),
(25, 'ASLA 3010\r', 'ASLA', 1),
(26, 'ASLA 4010\r', 'ASLA', 1),
(27, 'ANTH 1001\r', 'ANTH', 1),
(28, 'ANTH 1002\r', 'ANTH', 1),
(29, 'ANTH 2001\r', 'ANTH', 1),
(30, 'ANTH 2020\r', 'ANTH', 1),
(31, 'ANTH 2060\r', 'ANTH', 1),
(32, 'ANTH 2070\r', 'ANTH', 1),
(33, 'ANTH 2180\r', 'ANTH', 1),
(34, 'ANTH 2500\r', 'ANTH', 1),
(35, 'ANTH 2550\r', 'ANTH', 1),
(36, 'ANTH 2620\r', 'ANTH', 1),
(37, 'ANTH 2850\r', 'ANTH', 1),
(38, 'ANTH 2915\r', 'ANTH', 1),
(39, 'ANTH 3005\r', 'ANTH', 1),
(40, 'ANTH 3007\r', 'ANTH', 1),
(41, 'ANTH 3027\r', 'ANTH', 1),
(42, 'ANTH 3215\r', 'ANTH', 1),
(43, 'ANTH 3355\r', 'ANTH', 1),
(44, 'ANTH 3570\r', 'ANTH', 1),
(45, 'ANTH 3915\r', 'ANTH', 1),
(46, 'ANTH 4020\r', 'ANTH', 1),
(47, 'ANTH 4100\r', 'ANTH', 1),
(48, 'ANTH 4109\r', 'ANTH', 1),
(49, 'ANTH 4215\r', 'ANTH', 1),
(50, 'ANTH 4590\r', 'ANTH', 1),
(51, 'ANTH 4610\r', 'ANTH', 1),
(52, 'ANTH 4730\r', 'ANTH', 1),
(53, 'ANTH 4900\r', 'ANTH', 1),
(54, 'ANTH 4915\r', 'ANTH', 1),
(55, 'ALDS 1001\r', 'ALDS', 1),
(56, 'ALDS 2201\r', 'ALDS', 1),
(57, 'ALDS 2203\r', 'ALDS', 1),
(58, 'ALDS 2604\r', 'ALDS', 1),
(59, 'ALDS 2704\r', 'ALDS', 1),
(60, 'ALDS 3202\r', 'ALDS', 1),
(61, 'ALDS 3205\r', 'ALDS', 1),
(62, 'ALDS 3401\r', 'ALDS', 1),
(63, 'ALDS 3900\r', 'ALDS', 1),
(64, 'ALDS 3901\r', 'ALDS', 1),
(65, 'ALDS 3903\r', 'ALDS', 1),
(66, 'ALDS 4206\r', 'ALDS', 1),
(67, 'ALDS 4305\r', 'ALDS', 1),
(68, 'ALDS 4404\r', 'ALDS', 1),
(69, 'ALDS 4405\r', 'ALDS', 1),
(70, 'ALDS 4414\r', 'ALDS', 1),
(71, 'ALDS 4602\r', 'ALDS', 1),
(72, 'ALDS 4709\r', 'ALDS', 1),
(73, 'ALDS 4801\r', 'ALDS', 1),
(74, 'ALDS 4900\r', 'ALDS', 1),
(75, 'ALDS 4901\r', 'ALDS', 1),
(76, 'ALDS 4908\r', 'ALDS', 1),
(77, 'ARAB 1110\r', 'ARAB', 1),
(78, 'ARCY 1008\r', 'ARCY', 1),
(79, 'ARCS 1005\r', 'ARCS', 1),
(80, 'ARCS 2105\r', 'ARCS', 1),
(81, 'ARCS 2303\r', 'ARCS', 1),
(82, 'ARCS 3105\r', 'ARCS', 1),
(83, 'ARCS 3301\r', 'ARCS', 1),
(84, 'ARCS 3303\r', 'ARCS', 1),
(85, 'ARCS 4105\r', 'ARCS', 1),
(86, 'ARCS 4301\r', 'ARCS', 1),
(87, 'ARCC 2202\r', 'ARCC', 1),
(88, 'ARCC 2203\r', 'ARCC', 1),
(89, 'ARCC 3202\r', 'ARCC', 1),
(90, 'ARCC 3502\r', 'ARCC', 1),
(91, 'ARCC 4801\r', 'ARCC', 1),
(92, 'ARCN 2106\r', 'ARCN', 1),
(93, 'ARCN 4100\r', 'ARCN', 1),
(94, 'ARCH 1000\r', 'ARCH', 1),
(95, 'ARCH 2006\r', 'ARCH', 1),
(96, 'ARCH 2300\r', 'ARCH', 1),
(97, 'ARCH 4200\r', 'ARCH', 1),
(98, 'ARTH 1100\r', 'ARTH', 1),
(99, 'ARTH 1105\r', 'ARTH', 1),
(100, 'ARTH 1200\r', 'ARTH', 1),
(101, 'ARTH 2005\r', 'ARTH', 1),
(102, 'ARTH 2007\r', 'ARTH', 1),
(103, 'ARTH 2009\r', 'ARTH', 1),
(104, 'ARTH 2300\r', 'ARTH', 1),
(105, 'ARTH 2310\r', 'ARTH', 1),
(106, 'ARTH 2600\r', 'ARTH', 1),
(107, 'ARTH 2610\r', 'ARTH', 1),
(108, 'ARTH 2710\r', 'ARTH', 1),
(109, 'ARTH 2807\r', 'ARTH', 1),
(110, 'ARTH 3000\r', 'ARTH', 1),
(111, 'ARTH 3100\r', 'ARTH', 1),
(112, 'ARTH 3105\r', 'ARTH', 1),
(113, 'ARTH 3600\r', 'ARTH', 1),
(114, 'ARTH 3809\r', 'ARTH', 1),
(115, 'ARTH 3810\r', 'ARTH', 1),
(116, 'ARTH 3900\r', 'ARTH', 1),
(117, 'ARTH 4008\r', 'ARTH', 1),
(118, 'ARTH 4107\r', 'ARTH', 1),
(119, 'ARTH 4800\r', 'ARTH', 1),
(120, 'ARTH 4809\r', 'ARTH', 1),
(121, 'ARTH 4900\r', 'ARTH', 1),
(122, 'ARTH 4909\r', 'ARTH', 1),
(123, 'BIOC 2200\r', 'BIOC', 1),
(124, 'BIOC 2300\r', 'BIOC', 1),
(125, 'BIOC 2400\r', 'BIOC', 1),
(126, 'BIOC 3101\r', 'BIOC', 1),
(127, 'BIOC 3103\r', 'BIOC', 1),
(128, 'BIOC 3202\r', 'BIOC', 1),
(129, 'BIOC 3203\r', 'BIOC', 1),
(130, 'BIOC 3400\r', 'BIOC', 1),
(131, 'BIOC 4009\r', 'BIOC', 1),
(132, 'BIOC 4708\r', 'BIOC', 1),
(133, 'BIOC 4901\r', 'BIOC', 1),
(134, 'BIOC 4906\r', 'BIOC', 1),
(135, 'BIOC 4907\r', 'BIOC', 1),
(136, 'BIOC 4908\r', 'BIOC', 1),
(137, 'BIOL 1010\r', 'BIOL', 1),
(138, 'BIOL 1103\r', 'BIOL', 1),
(139, 'BIOL 1105\r', 'BIOL', 1),
(140, 'BIOL 1902\r', 'BIOL', 1),
(141, 'BIOL 2002\r', 'BIOL', 1),
(142, 'BIOL 2005\r', 'BIOL', 1),
(143, 'BIOL 2200\r', 'BIOL', 1),
(144, 'BIOL 2201\r', 'BIOL', 1),
(145, 'BIOL 2301\r', 'BIOL', 1),
(146, 'BIOL 2600\r', 'BIOL', 1),
(147, 'BIOL 3004\r', 'BIOL', 1),
(148, 'BIOL 3102\r', 'BIOL', 1),
(149, 'BIOL 3104\r', 'BIOL', 1),
(150, 'BIOL 3201\r', 'BIOL', 1),
(151, 'BIOL 3301\r', 'BIOL', 1),
(152, 'BIOL 3303\r', 'BIOL', 1),
(153, 'BIOL 3305\r', 'BIOL', 1),
(154, 'BIOL 3306\r', 'BIOL', 1),
(155, 'BIOL 3602\r', 'BIOL', 1),
(156, 'BIOL 3604\r', 'BIOL', 1),
(157, 'BIOL 3611\r', 'BIOL', 1),
(158, 'BIOL 3612\r', 'BIOL', 1),
(159, 'BIOL 3901\r', 'BIOL', 1),
(160, 'BIOL 4008\r', 'BIOL', 1),
(161, 'BIOL 4103\r', 'BIOL', 1),
(162, 'BIOL 4106\r', 'BIOL', 1),
(163, 'BIOL 4207\r', 'BIOL', 1),
(164, 'BIOL 4318\r', 'BIOL', 1),
(165, 'BIOL 4500\r', 'BIOL', 1),
(166, 'BIOL 4502\r', 'BIOL', 1),
(167, 'BIOL 4503\r', 'BIOL', 1),
(168, 'BIOL 4504\r', 'BIOL', 1),
(169, 'BIOL 4506\r', 'BIOL', 1),
(170, 'BIOL 4507\r', 'BIOL', 1),
(171, 'BIOL 4802\r', 'BIOL', 1),
(172, 'BIOL 4901\r', 'BIOL', 1),
(173, 'BIOL 4905\r', 'BIOL', 1),
(174, 'BIOL 4907\r', 'BIOL', 1),
(175, 'BIOL 4908\r', 'BIOL', 1),
(176, 'BUSI 1001\r', 'BUSI', 1),
(177, 'BUSI 1002\r', 'BUSI', 1),
(178, 'BUSI 1003\r', 'BUSI', 1),
(179, 'BUSI 1004\r', 'BUSI', 1),
(180, 'BUSI 1005\r', 'BUSI', 1),
(181, 'BUSI 1701\r', 'BUSI', 1),
(182, 'BUSI 1800\r', 'BUSI', 1),
(183, 'BUSI 1995\r', 'BUSI', 1),
(184, 'BUSI 2001\r', 'BUSI', 1),
(185, 'BUSI 2002\r', 'BUSI', 1),
(186, 'BUSI 2101\r', 'BUSI', 1),
(187, 'BUSI 2121\r', 'BUSI', 1),
(188, 'BUSI 2204\r', 'BUSI', 1),
(189, 'BUSI 2208\r', 'BUSI', 1),
(190, 'BUSI 2301\r', 'BUSI', 1),
(191, 'BUSI 2400\r', 'BUSI', 1),
(192, 'BUSI 2402\r', 'BUSI', 1),
(193, 'BUSI 2503\r', 'BUSI', 1),
(194, 'BUSI 2504\r', 'BUSI', 1),
(195, 'BUSI 2505\r', 'BUSI', 1),
(196, 'BUSI 2506\r', 'BUSI', 1),
(197, 'BUSI 2601\r', 'BUSI', 1),
(198, 'BUSI 2701\r', 'BUSI', 1),
(199, 'BUSI 2702\r', 'BUSI', 1),
(200, 'BUSI 2703\r', 'BUSI', 1),
(201, 'BUSI 2800\r', 'BUSI', 1),
(202, 'BUSI 2995\r', 'BUSI', 1),
(203, 'BUSI 3001\r', 'BUSI', 1),
(204, 'BUSI 3005\r', 'BUSI', 1),
(205, 'BUSI 3007\r', 'BUSI', 1),
(206, 'BUSI 3008\r', 'BUSI', 1),
(207, 'BUSI 3102\r', 'BUSI', 1),
(208, 'BUSI 3103\r', 'BUSI', 1),
(209, 'BUSI 3104\r', 'BUSI', 1),
(210, 'BUSI 3106\r', 'BUSI', 1),
(211, 'BUSI 3119\r', 'BUSI', 1),
(212, 'BUSI 3204\r', 'BUSI', 1),
(213, 'BUSI 3205\r', 'BUSI', 1),
(214, 'BUSI 3209\r', 'BUSI', 1),
(215, 'BUSI 3301\r', 'BUSI', 1),
(216, 'BUSI 3305\r', 'BUSI', 1),
(217, 'BUSI 3309\r', 'BUSI', 1),
(218, 'BUSI 3400\r', 'BUSI', 1),
(219, 'BUSI 3405\r', 'BUSI', 1),
(220, 'BUSI 3500\r', 'BUSI', 1),
(221, 'BUSI 3502\r', 'BUSI', 1),
(222, 'BUSI 3512\r', 'BUSI', 1),
(223, 'BUSI 3600\r', 'BUSI', 1),
(224, 'BUSI 3701\r', 'BUSI', 1),
(225, 'BUSI 3702\r', 'BUSI', 1),
(226, 'BUSI 3704\r', 'BUSI', 1),
(227, 'BUSI 3705\r', 'BUSI', 1),
(228, 'BUSI 3810\r', 'BUSI', 1),
(229, 'BUSI 3820\r', 'BUSI', 1),
(230, 'BUSI 3995\r', 'BUSI', 1),
(231, 'BUSI 4005\r', 'BUSI', 1),
(232, 'BUSI 4008\r', 'BUSI', 1),
(233, 'BUSI 4111\r', 'BUSI', 1),
(234, 'BUSI 4112\r', 'BUSI', 1),
(235, 'BUSI 4117\r', 'BUSI', 1),
(236, 'BUSI 4129\r', 'BUSI', 1),
(237, 'BUSI 4201\r', 'BUSI', 1),
(238, 'BUSI 4203\r', 'BUSI', 1),
(239, 'BUSI 4205\r', 'BUSI', 1),
(240, 'BUSI 4331\r', 'BUSI', 1),
(241, 'BUSI 4400\r', 'BUSI', 1),
(242, 'BUSI 4406\r', 'BUSI', 1),
(243, 'BUSI 4408\r', 'BUSI', 1),
(244, 'BUSI 4500\r', 'BUSI', 1),
(245, 'BUSI 4502\r', 'BUSI', 1),
(246, 'BUSI 4503\r', 'BUSI', 1),
(247, 'BUSI 4504\r', 'BUSI', 1),
(248, 'BUSI 4510\r', 'BUSI', 1),
(249, 'BUSI 4511\r', 'BUSI', 1),
(250, 'BUSI 4601\r', 'BUSI', 1),
(251, 'BUSI 4607\r', 'BUSI', 1),
(252, 'BUSI 4608\r', 'BUSI', 1),
(253, 'BUSI 4609\r', 'BUSI', 1),
(254, 'BUSI 4705\r', 'BUSI', 1),
(255, 'BUSI 4708\r', 'BUSI', 1),
(256, 'BUSI 4709\r', 'BUSI', 1),
(257, 'BUSI 4717\r', 'BUSI', 1),
(258, 'BUSI 4800\r', 'BUSI', 1),
(259, 'BUSI 4904\r', 'BUSI', 1),
(260, 'BUSI 4905\r', 'BUSI', 1),
(261, 'BUSI 4906\r', 'BUSI', 1),
(262, 'BUSI 4995\r', 'BUSI', 1),
(263, 'CDNS 1000\r', 'CDNS', 1),
(264, 'CDNS 1001\r', 'CDNS', 1),
(265, 'CDNS 1102\r', 'CDNS', 1),
(266, 'CDNS 2000\r', 'CDNS', 1),
(267, 'CDNS 2300\r', 'CDNS', 1),
(268, 'CDNS 3000\r', 'CDNS', 1),
(269, 'CDNS 3901\r', 'CDNS', 1),
(270, 'CDNS 4000\r', 'CDNS', 1),
(271, 'CDNS 4403\r', 'CDNS', 1),
(272, 'CDNS 4800\r', 'CDNS', 1),
(273, 'CDNS 4801\r', 'CDNS', 1),
(274, 'CDNS 4802\r', 'CDNS', 1),
(275, 'CDNS 4901\r', 'CDNS', 1),
(276, 'CDNS 4905\r', 'CDNS', 1),
(277, 'CDNS 4906\r', 'CDNS', 1),
(278, 'CDNS 4907\r', 'CDNS', 1),
(279, 'CHEM 0999\r', 'CHEM', 1),
(280, 'CHEM 1001\r', 'CHEM', 1),
(281, 'CHEM 1004\r', 'CHEM', 1),
(282, 'CHEM 1005\r', 'CHEM', 1),
(283, 'CHEM 1101\r', 'CHEM', 1),
(284, 'CHEM 2103\r', 'CHEM', 1),
(285, 'CHEM 2203\r', 'CHEM', 1),
(286, 'CHEM 2207\r', 'CHEM', 1),
(287, 'CHEM 2302\r', 'CHEM', 1),
(288, 'CHEM 2400\r', 'CHEM', 1),
(289, 'CHEM 3100\r', 'CHEM', 1),
(290, 'CHEM 3101\r', 'CHEM', 1),
(291, 'CHEM 3201\r', 'CHEM', 1),
(292, 'CHEM 3205\r', 'CHEM', 1),
(293, 'CHEM 3305\r', 'CHEM', 1),
(294, 'CHEM 3400\r', 'CHEM', 1),
(295, 'CHEM 3401\r', 'CHEM', 1),
(296, 'CHEM 3503\r', 'CHEM', 1),
(297, 'CHEM 3507\r', 'CHEM', 1),
(298, 'CHEM 3800\r', 'CHEM', 1),
(299, 'CHEM 4103\r', 'CHEM', 1),
(300, 'CHEM 4301\r', 'CHEM', 1),
(301, 'CHEM 4907\r', 'CHEM', 1),
(302, 'CHEM 4908\r', 'CHEM', 1),
(303, 'CHST 1003\r', 'CHST', 1),
(304, 'CHST 2003\r', 'CHST', 1),
(305, 'CHST 2011\r', 'CHST', 1),
(306, 'CHST 3000\r', 'CHST', 1),
(307, 'CHST 3002\r', 'CHST', 1),
(308, 'CHST 3103\r', 'CHST', 1),
(309, 'CHST 3202\r', 'CHST', 1),
(310, 'CHST 3205\r', 'CHST', 1),
(311, 'CHST 3302\r', 'CHST', 1),
(312, 'CHST 3303\r', 'CHST', 1),
(313, 'CHST 3904\r', 'CHST', 1),
(314, 'CHST 4001\r', 'CHST', 1),
(315, 'CHST 4900\r', 'CHST', 1),
(316, 'CHST 4908\r', 'CHST', 1),
(317, 'CHIN 1010\r', 'CHIN', 1),
(318, 'CHIN 1110\r', 'CHIN', 1),
(319, 'CHIN 3010\r', 'CHIN', 1),
(320, 'CIVE 2004\r', 'CIVE', 1),
(321, 'CIVE 2200\r', 'CIVE', 1),
(322, 'CIVE 2700\r', 'CIVE', 1),
(323, 'CIVE 3202\r', 'CIVE', 1),
(324, 'CIVE 3203\r', 'CIVE', 1),
(325, 'CIVE 3204\r', 'CIVE', 1),
(326, 'CIVE 3207\r', 'CIVE', 1),
(327, 'CIVE 3208\r', 'CIVE', 1),
(328, 'CIVE 3304\r', 'CIVE', 1),
(329, 'CIVE 4200\r', 'CIVE', 1),
(330, 'CIVE 4208\r', 'CIVE', 1),
(331, 'CIVE 4302\r', 'CIVE', 1),
(332, 'CIVE 4303\r', 'CIVE', 1),
(333, 'CIVE 4400\r', 'CIVE', 1),
(334, 'CIVE 4403\r', 'CIVE', 1),
(335, 'CIVE 4407\r', 'CIVE', 1),
(336, 'CIVE 4907\r', 'CIVE', 1),
(337, 'CIVE 4917\r', 'CIVE', 1),
(338, 'CIVE 4918\r', 'CIVE', 1),
(339, 'CLCV 1002\r', 'CLCV', 1),
(340, 'CLCV 1003\r', 'CLCV', 1),
(341, 'CLCV 1008\r', 'CLCV', 1),
(342, 'CLCV 2008\r', 'CLCV', 1),
(343, 'CLCV 2105\r', 'CLCV', 1),
(344, 'CLCV 2305\r', 'CLCV', 1),
(345, 'CLCV 2500\r', 'CLCV', 1),
(346, 'CLCV 2902\r', 'CLCV', 1),
(347, 'CLCV 2904\r', 'CLCV', 1),
(348, 'CLCV 3000\r', 'CLCV', 1),
(349, 'CLCV 3307\r', 'CLCV', 1),
(350, 'COOP 1000\r', 'COOP', 1),
(351, 'CGSC 1001\r', 'CGSC', 1),
(352, 'CGSC 1005\r', 'CGSC', 1),
(353, 'CGSC 2001\r', 'CGSC', 1),
(354, 'CGSC 2002\r', 'CGSC', 1),
(355, 'CGSC 3004\r', 'CGSC', 1),
(356, 'CGSC 3201\r', 'CGSC', 1),
(357, 'CGSC 3301\r', 'CGSC', 1),
(358, 'CGSC 3501\r', 'CGSC', 1),
(359, 'CGSC 3601\r', 'CGSC', 1),
(360, 'CGSC 3704\r', 'CGSC', 1),
(361, 'CGSC 3908\r', 'CGSC', 1),
(362, 'CGSC 4801\r', 'CGSC', 1),
(363, 'CGSC 4802\r', 'CGSC', 1),
(364, 'CGSC 4900\r', 'CGSC', 1),
(365, 'CGSC 4908\r', 'CGSC', 1),
(366, 'CGSC 4909\r', 'CGSC', 1),
(367, 'CCDP 2004\r', 'CCDP', 1),
(368, 'CCDP 2100\r', 'CCDP', 1),
(369, 'CCDP 3003\r', 'CCDP', 1),
(370, 'CCDP 3006\r', 'CCDP', 1),
(371, 'COMS 1001\r', 'COMS', 1),
(372, 'COMS 2003\r', 'COMS', 1),
(373, 'COMS 2004\r', 'COMS', 1),
(374, 'COMS 2200\r', 'COMS', 1),
(375, 'COMS 2300\r', 'COMS', 1),
(376, 'COMS 2700\r', 'COMS', 1),
(377, 'COMS 3001\r', 'COMS', 1),
(378, 'COMS 3002\r', 'COMS', 1),
(379, 'COMS 3108\r', 'COMS', 1),
(380, 'COMS 3109\r', 'COMS', 1),
(381, 'COMS 3308\r', 'COMS', 1),
(382, 'COMS 3310\r', 'COMS', 1),
(383, 'COMS 3407\r', 'COMS', 1),
(384, 'COMS 3410\r', 'COMS', 1),
(385, 'COMS 3412\r', 'COMS', 1),
(386, 'COMS 3500\r', 'COMS', 1),
(387, 'COMS 3800\r', 'COMS', 1),
(388, 'COMS 4006\r', 'COMS', 1),
(389, 'COMS 4306\r', 'COMS', 1),
(390, 'COMS 4312\r', 'COMS', 1),
(391, 'COMS 4317\r', 'COMS', 1),
(392, 'COMS 4403\r', 'COMS', 1),
(393, 'COMS 4410\r', 'COMS', 1),
(394, 'COMS 4411\r', 'COMS', 1),
(395, 'COMS 4412\r', 'COMS', 1),
(396, 'COMS 4501\r', 'COMS', 1),
(397, 'COMS 4502\r', 'COMS', 1),
(398, 'COMS 4503\r', 'COMS', 1),
(399, 'COMS 4506\r', 'COMS', 1),
(400, 'COMS 4602\r', 'COMS', 1),
(401, 'COMS 4604\r', 'COMS', 1),
(402, 'COMS 4605\r', 'COMS', 1),
(403, 'COMS 4606\r', 'COMS', 1),
(404, 'COMS 4608\r', 'COMS', 1),
(405, 'COMS 4800\r', 'COMS', 1),
(406, 'COMS 4908\r', 'COMS', 1),
(407, 'COMP 0999\r', 'COMP', 1),
(408, 'COMP 1001\r', 'COMP', 1),
(409, 'COMP 1005\r', 'COMP', 1),
(410, 'COMP 1006\r', 'COMP', 1),
(411, 'COMP 1008\r', 'COMP', 1),
(412, 'COMP 1405\r', 'COMP', 1),
(413, 'COMP 1406\r', 'COMP', 1),
(414, 'COMP 1805\r', 'COMP', 1),
(415, 'COMP 2401\r', 'COMP', 1),
(416, 'COMP 2402\r', 'COMP', 1),
(417, 'COMP 2404\r', 'COMP', 1),
(418, 'COMP 2406\r', 'COMP', 1),
(419, 'COMP 2601\r', 'COMP', 1),
(420, 'COMP 2801\r', 'COMP', 1),
(421, 'COMP 2804\r', 'COMP', 1),
(422, 'COMP 3000\r', 'COMP', 1),
(423, 'COMP 3004\r', 'COMP', 1),
(424, 'COMP 3005\r', 'COMP', 1),
(425, 'COMP 3007\r', 'COMP', 1),
(426, 'COMP 3008\r', 'COMP', 1),
(427, 'COMP 3106\r', 'COMP', 1),
(428, 'COMP 3109\r', 'COMP', 1),
(429, 'COMP 3203\r', 'COMP', 1),
(430, 'COMP 3301\r', 'COMP', 1),
(431, 'COMP 3501\r', 'COMP', 1),
(432, 'COMP 3801\r', 'COMP', 1),
(433, 'COMP 3803\r', 'COMP', 1),
(434, 'COMP 3804\r', 'COMP', 1),
(435, 'COMP 3805\r', 'COMP', 1),
(436, 'COMP 4000\r', 'COMP', 1),
(437, 'COMP 4001\r', 'COMP', 1),
(438, 'COMP 4004\r', 'COMP', 1),
(439, 'COMP 4105\r', 'COMP', 1),
(440, 'COMP 4108\r', 'COMP', 1),
(441, 'COMP 4202\r', 'COMP', 1),
(442, 'COMP 4601\r', 'COMP', 1),
(443, 'COMP 4803\r', 'COMP', 1),
(444, 'COMP 4804\r', 'COMP', 1),
(445, 'COMP 4900\r', 'COMP', 1),
(446, 'COMP 4901\r', 'COMP', 1),
(447, 'COMP 4905\r', 'COMP', 1),
(448, 'COMP 4906\r', 'COMP', 1),
(449, 'CRCJ 1000\r', 'CRCJ', 1),
(450, 'CRCJ 2100\r', 'CRCJ', 1),
(451, 'CRCJ 2200\r', 'CRCJ', 1),
(452, 'CRCJ 3001\r', 'CRCJ', 1),
(453, 'CRCJ 3002\r', 'CRCJ', 1),
(454, 'CRCJ 3100\r', 'CRCJ', 1),
(455, 'CRCJ 3200\r', 'CRCJ', 1),
(456, 'CRCJ 3201\r', 'CRCJ', 1),
(457, 'CRCJ 3202\r', 'CRCJ', 1),
(458, 'CRCJ 3901\r', 'CRCJ', 1),
(459, 'CRCJ 3902\r', 'CRCJ', 1),
(460, 'CRCJ 4001\r', 'CRCJ', 1),
(461, 'CRCJ 4002\r', 'CRCJ', 1),
(462, 'CRCJ 4200\r', 'CRCJ', 1),
(463, 'CRCJ 4908\r', 'CRCJ', 1),
(464, 'CRST 2001\r', 'CRST', 1),
(465, 'CRST 4001\r', 'CRST', 1),
(466, 'DIGH 2001\r', 'DIGH', 1),
(467, 'DIGH 3704\r', 'DIGH', 1),
(468, 'DIGH 4002\r', 'DIGH', 1),
(469, 'DBST 2001\r', 'DBST', 1),
(470, 'DBST 3001\r', 'DBST', 1),
(471, 'DBST 3060\r', 'DBST', 1),
(472, 'DBST 3900\r', 'DBST', 1),
(473, 'ESPW 1000\r', 'ESPW', 1),
(474, 'ERTH 1006\r', 'ERTH', 1),
(475, 'ERTH 1010\r', 'ERTH', 1),
(476, 'ERTH 2004\r', 'ERTH', 1),
(477, 'ERTH 2102\r', 'ERTH', 1),
(478, 'ERTH 2105\r', 'ERTH', 1),
(479, 'ERTH 2314\r', 'ERTH', 1),
(480, 'ERTH 2401\r', 'ERTH', 1),
(481, 'ERTH 2415\r', 'ERTH', 1),
(482, 'ERTH 3003\r', 'ERTH', 1),
(483, 'ERTH 3113\r', 'ERTH', 1),
(484, 'ERTH 3206\r', 'ERTH', 1),
(485, 'ERTH 3207\r', 'ERTH', 1),
(486, 'ERTH 3405\r', 'ERTH', 1),
(487, 'ERTH 4003\r', 'ERTH', 1),
(488, 'ERTH 4107\r', 'ERTH', 1),
(489, 'ERTH 4801\r', 'ERTH', 1),
(490, 'ERTH 4815\r', 'ERTH', 1),
(491, 'ERTH 4820\r', 'ERTH', 1),
(492, 'ERTH 4908\r', 'ERTH', 1),
(493, 'ERTH 4909\r', 'ERTH', 1),
(494, 'ERTH 4910\r', 'ERTH', 1),
(495, 'ECON 1001\r', 'ECON', 1),
(496, 'ECON 1002\r', 'ECON', 1),
(497, 'ECON 2009\r', 'ECON', 1),
(498, 'ECON 2020\r', 'ECON', 1),
(499, 'ECON 2030\r', 'ECON', 1),
(500, 'ECON 2101\r', 'ECON', 1),
(501, 'ECON 2102\r', 'ECON', 1),
(502, 'ECON 2103\r', 'ECON', 1),
(503, 'ECON 2210\r', 'ECON', 1),
(504, 'ECON 2220\r', 'ECON', 1),
(505, 'ECON 3001\r', 'ECON', 1),
(506, 'ECON 3050\r', 'ECON', 1),
(507, 'ECON 3201\r', 'ECON', 1),
(508, 'ECON 3300\r', 'ECON', 1),
(509, 'ECON 3403\r', 'ECON', 1),
(510, 'ECON 3405\r', 'ECON', 1),
(511, 'ECON 3508\r', 'ECON', 1),
(512, 'ECON 3601\r', 'ECON', 1),
(513, 'ECON 3602\r', 'ECON', 1),
(514, 'ECON 3607\r', 'ECON', 1),
(515, 'ECON 3706\r', 'ECON', 1),
(516, 'ECON 3808\r', 'ECON', 1),
(517, 'ECON 3878\r', 'ECON', 1),
(518, 'ECON 3900\r', 'ECON', 1),
(519, 'ECON 3920\r', 'ECON', 1),
(520, 'ECON 4001\r', 'ECON', 1),
(521, 'ECON 4002\r', 'ECON', 1),
(522, 'ECON 4020\r', 'ECON', 1),
(523, 'ECON 4021\r', 'ECON', 1),
(524, 'ECON 4507\r', 'ECON', 1),
(525, 'ECON 4602\r', 'ECON', 1),
(526, 'ECON 4706\r', 'ECON', 1),
(527, 'ECON 4708\r', 'ECON', 1),
(528, 'ECON 4905\r', 'ECON', 1),
(529, 'ECON 4995\r', 'ECON', 1),
(530, 'ELEC 2501\r', 'ELEC', 1),
(531, 'ELEC 2607\r', 'ELEC', 1),
(532, 'ELEC 3105\r', 'ELEC', 1),
(533, 'ELEC 3500\r', 'ELEC', 1),
(534, 'ELEC 3508\r', 'ELEC', 1),
(535, 'ELEC 3509\r', 'ELEC', 1),
(536, 'ELEC 3605\r', 'ELEC', 1),
(537, 'ELEC 3908\r', 'ELEC', 1),
(538, 'ELEC 3909\r', 'ELEC', 1),
(539, 'ELEC 4502\r', 'ELEC', 1),
(540, 'ELEC 4503\r', 'ELEC', 1),
(541, 'ELEC 4505\r', 'ELEC', 1),
(542, 'ELEC 4506\r', 'ELEC', 1),
(543, 'ELEC 4601\r', 'ELEC', 1),
(544, 'ELEC 4602\r', 'ELEC', 1),
(545, 'ELEC 4609\r', 'ELEC', 1),
(546, 'ELEC 4704\r', 'ELEC', 1),
(547, 'ELEC 4705\r', 'ELEC', 1),
(548, 'ELEC 4708\r', 'ELEC', 1),
(549, 'ELEC 4709\r', 'ELEC', 1),
(550, 'ELEC 4907\r', 'ELEC', 1),
(551, 'ELEC 4908\r', 'ELEC', 1),
(552, 'ECOR 1041\r', 'ECOR', 1),
(553, 'ECOR 1042\r', 'ECOR', 1),
(554, 'ECOR 1043\r', 'ECOR', 1),
(555, 'ECOR 1044\r', 'ECOR', 1),
(556, 'ECOR 1045\r', 'ECOR', 1),
(557, 'ECOR 1046\r', 'ECOR', 1),
(558, 'ECOR 1047\r', 'ECOR', 1),
(559, 'ECOR 1048\r', 'ECOR', 1),
(560, 'ECOR 1055\r', 'ECOR', 1),
(561, 'ECOR 1057\r', 'ECOR', 1),
(562, 'ECOR 2050\r', 'ECOR', 1),
(563, 'ECOR 3800\r', 'ECOR', 1),
(564, 'ECOR 4995\r', 'ECOR', 1),
(565, 'ENGL 1008\r', 'ENGL', 1),
(566, 'ENGL 1009\r', 'ENGL', 1),
(567, 'ENGL 1010\r', 'ENGL', 1),
(568, 'ENGL 1020\r', 'ENGL', 1),
(569, 'ENGL 1300\r', 'ENGL', 1),
(570, 'ENGL 1500\r', 'ENGL', 1),
(571, 'ENGL 1609\r', 'ENGL', 1),
(572, 'ENGL 1700\r', 'ENGL', 1),
(573, 'ENGL 2011\r', 'ENGL', 1),
(574, 'ENGL 2012\r', 'ENGL', 1),
(575, 'ENGL 2104\r', 'ENGL', 1),
(576, 'ENGL 2202\r', 'ENGL', 1),
(577, 'ENGL 2301\r', 'ENGL', 1),
(578, 'ENGL 2302\r', 'ENGL', 1),
(579, 'ENGL 2400\r', 'ENGL', 1),
(580, 'ENGL 2500\r', 'ENGL', 1),
(581, 'ENGL 2600\r', 'ENGL', 1),
(582, 'ENGL 2802\r', 'ENGL', 1),
(583, 'ENGL 2915\r', 'ENGL', 1),
(584, 'ENGL 2920\r', 'ENGL', 1),
(585, 'ENGL 2926\r', 'ENGL', 1),
(586, 'ENGL 2937\r', 'ENGL', 1),
(587, 'ENGL 3105\r', 'ENGL', 1),
(588, 'ENGL 3201\r', 'ENGL', 1),
(589, 'ENGL 3305\r', 'ENGL', 1),
(590, 'ENGL 3500\r', 'ENGL', 1),
(591, 'ENGL 3501\r', 'ENGL', 1),
(592, 'ENGL 3601\r', 'ENGL', 1),
(593, 'ENGL 3603\r', 'ENGL', 1),
(594, 'ENGL 3609\r', 'ENGL', 1),
(595, 'ENGL 3804\r', 'ENGL', 1),
(596, 'ENGL 3902\r', 'ENGL', 1),
(597, 'ENGL 3908\r', 'ENGL', 1),
(598, 'ENGL 3910\r', 'ENGL', 1),
(599, 'ENGL 3940\r', 'ENGL', 1),
(600, 'ENGL 4003\r', 'ENGL', 1),
(601, 'ENGL 4004\r', 'ENGL', 1),
(602, 'ENGL 4115\r', 'ENGL', 1),
(603, 'ENGL 4125\r', 'ENGL', 1),
(604, 'ENGL 4301\r', 'ENGL', 1),
(605, 'ENGL 4414\r', 'ENGL', 1),
(606, 'ENGL 4515\r', 'ENGL', 1),
(607, 'ENGL 4600\r', 'ENGL', 1),
(608, 'ENGL 4708\r', 'ENGL', 1),
(609, 'ENGL 4915\r', 'ENGL', 1),
(610, 'ENGL 4976\r', 'ENGL', 1),
(611, 'ESLA 1300\r', 'ESLA', 1),
(612, 'ESLA 1500\r', 'ESLA', 1),
(613, 'ESLA 1900\r', 'ESLA', 1),
(614, 'EACH 2000\r', 'EACH', 1),
(615, 'ENVE 1001\r', 'ENVE', 1),
(616, 'ENVE 3002\r', 'ENVE', 1),
(617, 'ENVE 3003\r', 'ENVE', 1),
(618, 'ENVE 4003\r', 'ENVE', 1),
(619, 'ENVE 4005\r', 'ENVE', 1),
(620, 'ENVE 4006\r', 'ENVE', 1),
(621, 'ENVE 4101\r', 'ENVE', 1),
(622, 'ENVE 4105\r', 'ENVE', 1),
(623, 'ENVE 4107\r', 'ENVE', 1),
(624, 'ENVE 4907\r', 'ENVE', 1),
(625, 'ENVE 4917\r', 'ENVE', 1),
(626, 'ENVE 4918\r', 'ENVE', 1),
(627, 'ENSC 1500\r', 'ENSC', 1),
(628, 'ENSC 2000\r', 'ENSC', 1),
(629, 'ENSC 2002\r', 'ENSC', 1),
(630, 'ENSC 3106\r', 'ENSC', 1),
(631, 'ENSC 3509\r', 'ENSC', 1),
(632, 'ENSC 4003\r', 'ENSC', 1),
(633, 'ENSC 4901\r', 'ENSC', 1),
(634, 'ENSC 4906\r', 'ENSC', 1),
(635, 'ENST 1000\r', 'ENST', 1),
(636, 'ENST 1020\r', 'ENST', 1),
(637, 'ENST 2001\r', 'ENST', 1),
(638, 'ENST 2005\r', 'ENST', 1),
(639, 'ENST 3022\r', 'ENST', 1),
(640, 'ENST 3900\r', 'ENST', 1),
(641, 'ENST 4001\r', 'ENST', 1),
(642, 'ENST 4002\r', 'ENST', 1),
(643, 'ENST 4005\r', 'ENST', 1),
(644, 'ENST 4400\r', 'ENST', 1),
(645, 'ENST 4450\r', 'ENST', 1),
(646, 'ENST 4906\r', 'ENST', 1),
(647, 'ENST 4907\r', 'ENST', 1),
(648, 'EURR 1001\r', 'EURR', 1),
(649, 'EURR 2002\r', 'EURR', 1),
(650, 'EURR 3001\r', 'EURR', 1),
(651, 'EURR 4102\r', 'EURR', 1),
(652, 'EURR 4103\r', 'EURR', 1),
(653, 'EURR 4107\r', 'EURR', 1),
(654, 'EURR 4202\r', 'EURR', 1),
(655, 'EURR 4303\r', 'EURR', 1),
(656, 'EURR 4304\r', 'EURR', 1),
(657, 'EURR 4306\r', 'EURR', 1),
(658, 'EURR 4900\r', 'EURR', 1),
(659, 'EURR 4901\r', 'EURR', 1),
(660, 'EURR 4902\r', 'EURR', 1),
(661, 'EURR 4908\r', 'EURR', 1),
(662, 'FILM 1101\r', 'FILM', 1),
(663, 'FILM 1120\r', 'FILM', 1),
(664, 'FILM 2001\r', 'FILM', 1),
(665, 'FILM 2106\r', 'FILM', 1),
(666, 'FILM 2204\r', 'FILM', 1),
(667, 'FILM 2401\r', 'FILM', 1),
(668, 'FILM 2601\r', 'FILM', 1),
(669, 'FILM 2606\r', 'FILM', 1),
(670, 'FILM 2801\r', 'FILM', 1),
(671, 'FILM 2809\r', 'FILM', 1),
(672, 'FILM 3105\r', 'FILM', 1),
(673, 'FILM 3209\r', 'FILM', 1),
(674, 'FILM 3609\r', 'FILM', 1),
(675, 'FILM 3701\r', 'FILM', 1),
(676, 'FILM 3800\r', 'FILM', 1),
(677, 'FILM 3808\r', 'FILM', 1),
(678, 'FILM 3902\r', 'FILM', 1),
(679, 'FILM 4001\r', 'FILM', 1),
(680, 'FILM 4002\r', 'FILM', 1),
(681, 'FILM 4401\r', 'FILM', 1),
(682, 'FILM 4805\r', 'FILM', 1),
(683, 'FILM 4904\r', 'FILM', 1),
(684, 'FYSM 1004\r', 'FYSM', 1),
(685, 'FYSM 1101\r', 'FYSM', 1),
(686, 'FYSM 1104\r', 'FYSM', 1),
(687, 'FYSM 1106\r', 'FYSM', 1),
(688, 'FYSM 1210\r', 'FYSM', 1),
(689, 'FYSM 1217\r', 'FYSM', 1),
(690, 'FYSM 1310\r', 'FYSM', 1),
(691, 'FYSM 1400\r', 'FYSM', 1),
(692, 'FYSM 1402\r', 'FYSM', 1),
(693, 'FYSM 1405\r', 'FYSM', 1),
(694, 'FYSM 1408\r', 'FYSM', 1),
(695, 'FYSM 1409\r', 'FYSM', 1),
(696, 'FYSM 1502\r', 'FYSM', 1),
(697, 'FYSM 1506\r', 'FYSM', 1),
(698, 'FYSM 1508\r', 'FYSM', 1),
(699, 'FYSM 1607\r', 'FYSM', 1),
(700, 'FYSM 1608\r', 'FYSM', 1),
(701, 'FYSM 1611\r', 'FYSM', 1),
(702, 'FYSM 1700\r', 'FYSM', 1),
(703, 'FYSM 1900\r', 'FYSM', 1),
(704, 'FOOD 2001\r', 'FOOD', 1),
(705, 'FOOD 2002\r', 'FOOD', 1),
(706, 'FOOD 2003\r', 'FOOD', 1),
(707, 'FOOD 3001\r', 'FOOD', 1),
(708, 'FOOD 3003\r', 'FOOD', 1),
(709, 'FOOD 3005\r', 'FOOD', 1),
(710, 'FOOD 4103\r', 'FOOD', 1),
(711, 'FOOD 4201\r', 'FOOD', 1),
(712, 'FOOD 4203\r', 'FOOD', 1),
(713, 'FOOD 4905\r', 'FOOD', 1),
(714, 'FOOD 4907\r', 'FOOD', 1),
(715, 'FOOD 4908\r', 'FOOD', 1),
(716, 'FREN 1001\r', 'FREN', 1),
(717, 'FREN 1002\r', 'FREN', 1),
(718, 'FREN 1100\r', 'FREN', 1),
(719, 'FREN 2100\r', 'FREN', 1),
(720, 'FREN 2110\r', 'FREN', 1),
(721, 'FREN 2202\r', 'FREN', 1),
(722, 'FREN 2203\r', 'FREN', 1),
(723, 'FREN 2401\r', 'FREN', 1),
(724, 'FREN 3050\r', 'FREN', 1),
(725, 'FREN 3213\r', 'FREN', 1),
(726, 'FREN 3218\r', 'FREN', 1),
(727, 'FREN 3415\r', 'FREN', 1),
(728, 'FREN 3702\r', 'FREN', 1),
(729, 'FREN 3900\r', 'FREN', 1),
(730, 'FREN 4412\r', 'FREN', 1),
(731, 'FREN 4801\r', 'FREN', 1),
(732, 'FREN 4802\r', 'FREN', 1),
(733, 'FINS 2105\r', 'FINS', 1),
(734, 'FINS 3801\r', 'FINS', 1),
(735, 'FINS 4801\r', 'FINS', 1),
(736, 'GEOG 1010\r', 'GEOG', 1),
(737, 'GEOG 1020\r', 'GEOG', 1),
(738, 'GEOG 1023\r', 'GEOG', 1),
(739, 'GEOG 2005\r', 'GEOG', 1),
(740, 'GEOG 2013\r', 'GEOG', 1),
(741, 'GEOG 2200\r', 'GEOG', 1),
(742, 'GEOG 3000\r', 'GEOG', 1),
(743, 'GEOG 3009\r', 'GEOG', 1),
(744, 'GEOG 3022\r', 'GEOG', 1),
(745, 'GEOG 3026\r', 'GEOG', 1),
(746, 'GEOG 3103\r', 'GEOG', 1),
(747, 'GEOG 3106\r', 'GEOG', 1),
(748, 'GEOG 3108\r', 'GEOG', 1),
(749, 'GEOG 3206\r', 'GEOG', 1),
(750, 'GEOG 4000\r', 'GEOG', 1),
(751, 'GEOG 4005\r', 'GEOG', 1),
(752, 'GEOG 4024\r', 'GEOG', 1),
(753, 'GEOG 4103\r', 'GEOG', 1),
(754, 'GEOG 4108\r', 'GEOG', 1),
(755, 'GEOG 4304\r', 'GEOG', 1),
(756, 'GEOG 4323\r', 'GEOG', 1),
(757, 'GEOG 4406\r', 'GEOG', 1),
(758, 'GEOG 4408\r', 'GEOG', 1),
(759, 'GEOG 4450\r', 'GEOG', 1),
(760, 'GEOG 4906\r', 'GEOG', 1),
(761, 'GEOG 4909\r', 'GEOG', 1),
(762, 'GEOM 1004\r', 'GEOM', 1),
(763, 'GEOM 2005\r', 'GEOM', 1),
(764, 'GEOM 2007\r', 'GEOM', 1),
(765, 'GEOM 3002\r', 'GEOM', 1),
(766, 'GEOM 3005\r', 'GEOM', 1),
(767, 'GEOM 4005\r', 'GEOM', 1),
(768, 'GEOM 4008\r', 'GEOM', 1),
(769, 'GEOM 4406\r', 'GEOM', 1),
(770, 'GEOM 4408\r', 'GEOM', 1),
(771, 'GEOM 4906\r', 'GEOM', 1),
(772, 'GEOM 4909\r', 'GEOM', 1),
(773, 'GERM 1010\r', 'GERM', 1),
(774, 'GERM 1110\r', 'GERM', 1),
(775, 'GERM 2010\r', 'GERM', 1),
(776, 'GERM 3110\r', 'GERM', 1),
(777, 'GPOL 2500\r', 'GPOL', 1),
(778, 'GPOL 3000\r', 'GPOL', 1),
(779, 'GPOL 4908\r', 'GPOL', 1),
(780, 'GINS 1000\r', 'GINS', 1),
(781, 'GINS 1010\r', 'GINS', 1),
(782, 'GINS 1020\r', 'GINS', 1),
(783, 'GINS 1300\r', 'GINS', 1),
(784, 'GINS 2000\r', 'GINS', 1),
(785, 'GINS 2010\r', 'GINS', 1),
(786, 'GINS 2020\r', 'GINS', 1),
(787, 'GINS 3010\r', 'GINS', 1),
(788, 'GINS 3020\r', 'GINS', 1),
(789, 'GINS 3900\r', 'GINS', 1),
(790, 'GINS 3901\r', 'GINS', 1),
(791, 'GINS 3930\r', 'GINS', 1),
(792, 'GINS 3931\r', 'GINS', 1),
(793, 'GINS 4090\r', 'GINS', 1),
(794, 'GINS 4900\r', 'GINS', 1),
(795, 'GINS 4908\r', 'GINS', 1),
(796, 'GREK 1005\r', 'GREK', 1),
(797, 'GREK 2200\r', 'GREK', 1),
(798, 'GREK 3900\r', 'GREK', 1),
(799, 'GREK 4900\r', 'GREK', 1),
(800, 'HIST 1001\r', 'HIST', 1),
(801, 'HIST 1002\r', 'HIST', 1),
(802, 'HIST 1301\r', 'HIST', 1),
(803, 'HIST 1707\r', 'HIST', 1),
(804, 'HIST 1900\r', 'HIST', 1),
(805, 'HIST 2000\r', 'HIST', 1),
(806, 'HIST 2204\r', 'HIST', 1),
(807, 'HIST 2301\r', 'HIST', 1),
(808, 'HIST 2304\r', 'HIST', 1),
(809, 'HIST 2308\r', 'HIST', 1),
(810, 'HIST 2401\r', 'HIST', 1),
(811, 'HIST 2510\r', 'HIST', 1),
(812, 'HIST 2600\r', 'HIST', 1),
(813, 'HIST 2706\r', 'HIST', 1),
(814, 'HIST 2806\r', 'HIST', 1),
(815, 'HIST 2809\r', 'HIST', 1),
(816, 'HIST 2811\r', 'HIST', 1),
(817, 'HIST 2902\r', 'HIST', 1),
(818, 'HIST 2904\r', 'HIST', 1),
(819, 'HIST 3000\r', 'HIST', 1),
(820, 'HIST 3106\r', 'HIST', 1),
(821, 'HIST 3113\r', 'HIST', 1),
(822, 'HIST 3116\r', 'HIST', 1),
(823, 'HIST 3120\r', 'HIST', 1),
(824, 'HIST 3205\r', 'HIST', 1),
(825, 'HIST 3305\r', 'HIST', 1),
(826, 'HIST 3306\r', 'HIST', 1),
(827, 'HIST 3510\r', 'HIST', 1),
(828, 'HIST 3806\r', 'HIST', 1),
(829, 'HIST 3813\r', 'HIST', 1),
(830, 'HIST 3820\r', 'HIST', 1),
(831, 'HIST 3908\r', 'HIST', 1),
(832, 'HIST 4006\r', 'HIST', 1),
(833, 'HIST 4100\r', 'HIST', 1),
(834, 'HIST 4302\r', 'HIST', 1),
(835, 'HIST 4304\r', 'HIST', 1),
(836, 'HIST 4305\r', 'HIST', 1),
(837, 'HIST 4401\r', 'HIST', 1),
(838, 'HIST 4606\r', 'HIST', 1),
(839, 'HIST 4608\r', 'HIST', 1),
(840, 'HIST 4701\r', 'HIST', 1),
(841, 'HIST 4802\r', 'HIST', 1),
(842, 'HIST 4806\r', 'HIST', 1),
(843, 'HIST 4910\r', 'HIST', 1),
(844, 'HLTH 1000\r', 'HLTH', 1),
(845, 'HLTH 1001\r', 'HLTH', 1),
(846, 'HLTH 2001\r', 'HLTH', 1),
(847, 'HLTH 2004\r', 'HLTH', 1),
(848, 'HLTH 3101\r', 'HLTH', 1),
(849, 'HLTH 3104\r', 'HLTH', 1),
(850, 'HLTH 3303\r', 'HLTH', 1),
(851, 'HLTH 3403\r', 'HLTH', 1),
(852, 'HLTH 3503\r', 'HLTH', 1),
(853, 'HLTH 3901\r', 'HLTH', 1),
(854, 'HLTH 3902\r', 'HLTH', 1),
(855, 'HLTH 3903\r', 'HLTH', 1),
(856, 'HLTH 4101\r', 'HLTH', 1),
(857, 'HLTH 4102\r', 'HLTH', 1),
(858, 'HLTH 4303\r', 'HLTH', 1),
(859, 'HLTH 4401\r', 'HLTH', 1),
(860, 'HLTH 4901\r', 'HLTH', 1),
(861, 'HLTH 4906\r', 'HLTH', 1),
(862, 'HLTH 4909\r', 'HLTH', 1),
(863, 'HLTH 4910\r', 'HLTH', 1),
(864, 'HUMR 1001\r', 'HUMR', 1),
(865, 'HUMR 2001\r', 'HUMR', 1),
(866, 'HUMR 2102\r', 'HUMR', 1),
(867, 'HUMR 2401\r', 'HUMR', 1),
(868, 'HUMR 3001\r', 'HUMR', 1),
(869, 'HUMR 3303\r', 'HUMR', 1),
(870, 'HUMR 3304\r', 'HUMR', 1),
(871, 'HUMR 3503\r', 'HUMR', 1),
(872, 'HUMR 3504\r', 'HUMR', 1),
(873, 'HUMR 4201\r', 'HUMR', 1),
(874, 'HUMR 4401\r', 'HUMR', 1),
(875, 'HUMR 4409\r', 'HUMR', 1),
(876, 'HUMR 4908\r', 'HUMR', 1),
(877, 'HUMS 1000\r', 'HUMS', 1),
(878, 'HUMS 1200\r', 'HUMS', 1),
(879, 'HUMS 2000\r', 'HUMS', 1),
(880, 'HUMS 2101\r', 'HUMS', 1),
(881, 'HUMS 3000\r', 'HUMS', 1),
(882, 'HUMS 3102\r', 'HUMS', 1),
(883, 'HUMS 3200\r', 'HUMS', 1),
(884, 'HUMS 4000\r', 'HUMS', 1),
(885, 'HUMS 4500\r', 'HUMS', 1),
(886, 'HUMS 4902\r', 'HUMS', 1),
(887, 'HUMS 4903\r', 'HUMS', 1),
(888, 'INDG 1010\r', 'INDG', 1),
(889, 'INDG 1011\r', 'INDG', 1),
(890, 'INDG 2012\r', 'INDG', 1),
(891, 'INDG 2015\r', 'INDG', 1),
(892, 'INDG 3001\r', 'INDG', 1),
(893, 'INDG 3015\r', 'INDG', 1),
(894, 'INDG 4001\r', 'INDG', 1),
(895, 'INDG 4011\r', 'INDG', 1),
(896, 'INDG 4905\r', 'INDG', 1),
(897, 'IDES 1000\r', 'IDES', 1),
(898, 'IDES 1300\r', 'IDES', 1),
(899, 'IDES 2101\r', 'IDES', 1),
(900, 'IDES 2205\r', 'IDES', 1),
(901, 'IDES 2300\r', 'IDES', 1),
(902, 'IDES 3104\r', 'IDES', 1),
(903, 'IDES 3105\r', 'IDES', 1),
(904, 'IDES 3106\r', 'IDES', 1),
(905, 'IDES 3310\r', 'IDES', 1),
(906, 'IDES 3502\r', 'IDES', 1),
(907, 'IDES 3601\r', 'IDES', 1),
(908, 'IDES 4001\r', 'IDES', 1),
(909, 'IDES 4301\r', 'IDES', 1),
(910, 'IDES 4310\r', 'IDES', 1),
(911, 'IDES 4400\r', 'IDES', 1),
(912, 'IRM 1003\r', 'IRM', 1),
(913, 'IRM 1005\r', 'IRM', 1),
(914, 'IRM 1007\r', 'IRM', 1),
(915, 'IRM 1008\r', 'IRM', 1),
(916, 'IRM 2003\r', 'IRM', 1),
(917, 'IRM 2005\r', 'IRM', 1),
(918, 'IRM 3003\r', 'IRM', 1),
(919, 'IRM 3006\r', 'IRM', 1),
(920, 'IRM 3008\r', 'IRM', 1),
(921, 'IRM 4000\r', 'IRM', 1),
(922, 'IRM 4002\r', 'IRM', 1),
(923, 'IRM 4900\r', 'IRM', 1),
(924, 'BIT 1000\r', 'BIT', 1),
(925, 'BIT 1100\r', 'BIT', 1),
(926, 'BIT 1101\r', 'BIT', 1),
(927, 'BIT 1200\r', 'BIT', 1),
(928, 'BIT 1203\r', 'BIT', 1),
(929, 'BIT 1400\r', 'BIT', 1),
(930, 'BIT 2000\r', 'BIT', 1),
(931, 'BIT 2001\r', 'BIT', 1),
(932, 'BIT 2002\r', 'BIT', 1),
(933, 'BIT 2008\r', 'BIT', 1),
(934, 'BIT 2010\r', 'BIT', 1),
(935, 'BIT 2400\r', 'BIT', 1),
(936, 'BIT 4000\r', 'BIT', 1),
(937, 'ITEC 1005\r', 'ITEC', 1),
(938, 'ITEC 1100\r', 'ITEC', 1),
(939, 'ITEC 2000\r', 'ITEC', 1),
(940, 'ITEC 2400\r', 'ITEC', 1),
(941, 'ITEC 4007\r', 'ITEC', 1),
(942, 'ITEC 4009\r', 'ITEC', 1),
(943, 'ITEC 4010\r', 'ITEC', 1),
(944, 'ITEC 4012\r', 'ITEC', 1),
(945, 'ITEC 4014\r', 'ITEC', 1),
(946, 'ITEC 4019\r', 'ITEC', 1),
(947, 'IMD 1000\r', 'IMD', 1),
(948, 'IMD 1002\r', 'IMD', 1),
(949, 'IMD 1004\r', 'IMD', 1),
(950, 'IMD 2003\r', 'IMD', 1),
(951, 'IMD 2007\r', 'IMD', 1),
(952, 'IMD 3005\r', 'IMD', 1),
(953, 'IMD 3006\r', 'IMD', 1),
(954, 'IMD 3900\r', 'IMD', 1),
(955, 'IMD 4006\r', 'IMD', 1),
(956, 'IMD 4008\r', 'IMD', 1),
(957, 'IMD 4901\r', 'IMD', 1),
(958, 'ISAP 1001\r', 'ISAP', 1),
(959, 'ISAP 2001\r', 'ISAP', 1),
(960, 'ISAP 3001\r', 'ISAP', 1),
(961, 'ISAP 3003\r', 'ISAP', 1),
(962, 'ISAP 4906\r', 'ISAP', 1),
(963, 'IPAF 1001\r', 'IPAF', 1),
(964, 'IPAF 3800\r', 'IPAF', 1),
(965, 'IPAF 4900\r', 'IPAF', 1),
(966, 'ISCI 1001\r', 'ISCI', 1),
(967, 'ISCI 2000\r', 'ISCI', 1),
(968, 'INAF 3001\r', 'INAF', 1),
(969, 'INAF 4101\r', 'INAF', 1),
(970, 'INAF 4301\r', 'INAF', 1),
(971, 'ITAL 1010\r', 'ITAL', 1),
(972, 'ITAL 2010\r', 'ITAL', 1),
(973, 'JAPA 1020\r', 'JAPA', 1),
(974, 'JAPA 1110\r', 'JAPA', 1),
(975, 'JAPA 3010\r', 'JAPA', 1),
(976, 'JAPA 3011\r', 'JAPA', 1),
(977, 'JAPA 4010\r', 'JAPA', 1),
(978, 'JAPA 4210\r', 'JAPA', 1),
(979, 'JOUR 1001\r', 'JOUR', 1),
(980, 'JOUR 2106\r', 'JOUR', 1),
(981, 'JOUR 2201\r', 'JOUR', 1),
(982, 'JOUR 2202\r', 'JOUR', 1),
(983, 'JOUR 3207\r', 'JOUR', 1),
(984, 'JOUR 3208\r', 'JOUR', 1),
(985, 'JOUR 3225\r', 'JOUR', 1),
(986, 'JOUR 3235\r', 'JOUR', 1),
(987, 'JOUR 3300\r', 'JOUR', 1),
(988, 'JOUR 3400\r', 'JOUR', 1),
(989, 'JOUR 3407\r', 'JOUR', 1),
(990, 'JOUR 4003\r', 'JOUR', 1),
(991, 'JOUR 4004\r', 'JOUR', 1),
(992, 'JOUR 4005\r', 'JOUR', 1),
(993, 'JOUR 4100\r', 'JOUR', 1),
(994, 'JOUR 4300\r', 'JOUR', 1),
(995, 'JOUR 4303\r', 'JOUR', 1),
(996, 'JOUR 4306\r', 'JOUR', 1),
(997, 'JOUR 4308\r', 'JOUR', 1),
(998, 'JOUR 4400\r', 'JOUR', 1),
(999, 'JOUR 4401\r', 'JOUR', 1),
(1000, 'JOUR 4402\r', 'JOUR', 1),
(1001, 'JOUR 4403\r', 'JOUR', 1),
(1002, 'JOUR 4404\r', 'JOUR', 1),
(1003, 'JOUR 4500\r', 'JOUR', 1),
(1004, 'JOUR 4502\r', 'JOUR', 1),
(1005, 'KORE 1010\r', 'KORE', 1),
(1006, 'KORE 2010\r', 'KORE', 1),
(1007, 'KORE 3010\r', 'KORE', 1),
(1008, 'LATN 1005\r', 'LATN', 1),
(1009, 'LATN 2200\r', 'LATN', 1),
(1010, 'LACS 1001\r', 'LACS', 1),
(1011, 'LACS 4819\r', 'LACS', 1),
(1012, 'LAWS 1001\r', 'LAWS', 1),
(1013, 'LAWS 2105\r', 'LAWS', 1),
(1014, 'LAWS 2201\r', 'LAWS', 1),
(1015, 'LAWS 2202\r', 'LAWS', 1),
(1016, 'LAWS 2301\r', 'LAWS', 1),
(1017, 'LAWS 2302\r', 'LAWS', 1),
(1018, 'LAWS 2501\r', 'LAWS', 1),
(1019, 'LAWS 2502\r', 'LAWS', 1),
(1020, 'LAWS 2601\r', 'LAWS', 1),
(1021, 'LAWS 2908\r', 'LAWS', 1),
(1022, 'LAWS 3003\r', 'LAWS', 1),
(1023, 'LAWS 3005\r', 'LAWS', 1),
(1024, 'LAWS 3006\r', 'LAWS', 1),
(1025, 'LAWS 3201\r', 'LAWS', 1),
(1026, 'LAWS 3206\r', 'LAWS', 1),
(1027, 'LAWS 3208\r', 'LAWS', 1),
(1028, 'LAWS 3305\r', 'LAWS', 1),
(1029, 'LAWS 3306\r', 'LAWS', 1),
(1030, 'LAWS 3307\r', 'LAWS', 1),
(1031, 'LAWS 3308\r', 'LAWS', 1),
(1032, 'LAWS 3401\r', 'LAWS', 1),
(1033, 'LAWS 3500\r', 'LAWS', 1),
(1034, 'LAWS 3502\r', 'LAWS', 1),
(1035, 'LAWS 3503\r', 'LAWS', 1),
(1036, 'LAWS 3504\r', 'LAWS', 1),
(1037, 'LAWS 3602\r', 'LAWS', 1),
(1038, 'LAWS 3604\r', 'LAWS', 1),
(1039, 'LAWS 3800\r', 'LAWS', 1),
(1040, 'LAWS 3903\r', 'LAWS', 1),
(1041, 'LAWS 3908\r', 'LAWS', 1),
(1042, 'LAWS 4100\r', 'LAWS', 1),
(1043, 'LAWS 4106\r', 'LAWS', 1),
(1044, 'LAWS 4200\r', 'LAWS', 1),
(1045, 'LAWS 4202\r', 'LAWS', 1),
(1046, 'LAWS 4204\r', 'LAWS', 1),
(1047, 'LAWS 4209\r', 'LAWS', 1),
(1048, 'LAWS 4302\r', 'LAWS', 1),
(1049, 'LAWS 4303\r', 'LAWS', 1),
(1050, 'LAWS 4304\r', 'LAWS', 1),
(1051, 'LAWS 4305\r', 'LAWS', 1),
(1052, 'LAWS 4306\r', 'LAWS', 1),
(1053, 'LAWS 4308\r', 'LAWS', 1),
(1054, 'LAWS 4504\r', 'LAWS', 1),
(1055, 'LAWS 4601\r', 'LAWS', 1),
(1056, 'LAWS 4603\r', 'LAWS', 1),
(1057, 'LAWS 4605\r', 'LAWS', 1),
(1058, 'LAWS 4606\r', 'LAWS', 1),
(1059, 'LAWS 4800\r', 'LAWS', 1),
(1060, 'LAWS 4801\r', 'LAWS', 1),
(1061, 'LAWS 4802\r', 'LAWS', 1),
(1062, 'LAWS 4901\r', 'LAWS', 1),
(1063, 'LAWS 4902\r', 'LAWS', 1),
(1064, 'LAWS 4903\r', 'LAWS', 1),
(1065, 'LAWS 4904\r', 'LAWS', 1),
(1066, 'LAWS 4905\r', 'LAWS', 1),
(1067, 'LAWS 4906\r', 'LAWS', 1),
(1068, 'LAWS 4908\r', 'LAWS', 1),
(1069, 'LING 1001\r', 'LING', 1),
(1070, 'LING 2005\r', 'LING', 1),
(1071, 'LING 2007\r', 'LING', 1),
(1072, 'LING 2604\r', 'LING', 1),
(1073, 'LING 3004\r', 'LING', 1),
(1074, 'LING 3007\r', 'LING', 1),
(1075, 'LING 3601\r', 'LING', 1),
(1076, 'LING 3603\r', 'LING', 1),
(1077, 'LING 3702\r', 'LING', 1),
(1078, 'LING 3810\r', 'LING', 1),
(1079, 'LING 3900\r', 'LING', 1),
(1080, 'LING 3901\r', 'LING', 1),
(1081, 'LING 4412\r', 'LING', 1),
(1082, 'LING 4510\r', 'LING', 1),
(1083, 'LING 4601\r', 'LING', 1),
(1084, 'LING 4604\r', 'LING', 1),
(1085, 'LING 4605\r', 'LING', 1),
(1086, 'LING 4900\r', 'LING', 1),
(1087, 'LING 4901\r', 'LING', 1),
(1088, 'LING 4905\r', 'LING', 1),
(1089, 'LING 4910\r', 'LING', 1),
(1090, 'MATH 0005\r', 'MATH', 1),
(1091, 'MATH 0009\r', 'MATH', 1),
(1092, 'MATH 0999\r', 'MATH', 1),
(1093, 'MATH 1004\r', 'MATH', 1),
(1094, 'MATH 1005\r', 'MATH', 1),
(1095, 'MATH 1007\r', 'MATH', 1),
(1096, 'MATH 1009\r', 'MATH', 1),
(1097, 'MATH 1052\r', 'MATH', 1),
(1098, 'MATH 1104\r', 'MATH', 1),
(1099, 'MATH 1107\r', 'MATH', 1),
(1100, 'MATH 1152\r', 'MATH', 1),
(1101, 'MATH 1401\r', 'MATH', 1),
(1102, 'MATH 1402\r', 'MATH', 1),
(1103, 'MATH 1800\r', 'MATH', 1),
(1104, 'MATH 2000\r', 'MATH', 1),
(1105, 'MATH 2004\r', 'MATH', 1),
(1106, 'MATH 2007\r', 'MATH', 1),
(1107, 'MATH 2008\r', 'MATH', 1),
(1108, 'MATH 2100\r', 'MATH', 1),
(1109, 'MATH 2107\r', 'MATH', 1),
(1110, 'MATH 2454\r', 'MATH', 1),
(1111, 'MATH 3001\r', 'MATH', 1),
(1112, 'MATH 3007\r', 'MATH', 1),
(1113, 'MATH 3057\r', 'MATH', 1),
(1114, 'MATH 3106\r', 'MATH', 1),
(1115, 'MATH 3705\r', 'MATH', 1),
(1116, 'MATH 3800\r', 'MATH', 1),
(1117, 'MATH 3801\r', 'MATH', 1),
(1118, 'MATH 3804\r', 'MATH', 1),
(1119, 'MATH 3809\r', 'MATH', 1),
(1120, 'MATH 3825\r', 'MATH', 1),
(1121, 'MATH 3855\r', 'MATH', 1),
(1122, 'MATH 4109\r', 'MATH', 1),
(1123, 'MATH 4205\r', 'MATH', 1),
(1124, 'MATH 4803\r', 'MATH', 1),
(1125, 'MATH 4811\r', 'MATH', 1),
(1126, 'MATH 4905\r', 'MATH', 1),
(1127, 'MATH 4907\r', 'MATH', 1),
(1128, 'MECH 3310\r', 'MECH', 1),
(1129, 'MECH 4003\r', 'MECH', 1),
(1130, 'MECH 4006\r', 'MECH', 1),
(1131, 'MECH 4210\r', 'MECH', 1),
(1132, 'MECH 4305\r', 'MECH', 1),
(1133, 'MECH 4403\r', 'MECH', 1),
(1134, 'MECH 4406\r', 'MECH', 1),
(1135, 'MECH 4501\r', 'MECH', 1),
(1136, 'MECH 4805\r', 'MECH', 1),
(1137, 'MECH 4806\r', 'MECH', 1),
(1138, 'MAAE 2001\r', 'MAAE', 1),
(1139, 'MAAE 2101\r', 'MAAE', 1),
(1140, 'MAAE 2202\r', 'MAAE', 1),
(1141, 'MAAE 2300\r', 'MAAE', 1),
(1142, 'MAAE 2400\r', 'MAAE', 1),
(1143, 'MAAE 2700\r', 'MAAE', 1),
(1144, 'MAAE 3004\r', 'MAAE', 1),
(1145, 'MAAE 3202\r', 'MAAE', 1),
(1146, 'MAAE 3300\r', 'MAAE', 1),
(1147, 'MAAE 4102\r', 'MAAE', 1),
(1148, 'MAAE 4903\r', 'MAAE', 1),
(1149, 'MAAE 4906\r', 'MAAE', 1),
(1150, 'MAAE 4907\r', 'MAAE', 1),
(1151, 'MAAE 4917\r', 'MAAE', 1),
(1152, 'MPAD 1001\r', 'MPAD', 1),
(1153, 'MPAD 2001\r', 'MPAD', 1),
(1154, 'MPAD 2003\r', 'MPAD', 1),
(1155, 'MPAD 2004\r', 'MPAD', 1),
(1156, 'MPAD 3002\r', 'MPAD', 1),
(1157, 'MPAD 3300\r', 'MPAD', 1),
(1158, 'MPAD 4000\r', 'MPAD', 1),
(1159, 'MPAD 4200\r', 'MPAD', 1),
(1160, 'MPAD 4300\r', 'MPAD', 1),
(1161, 'MPAD 4500\r', 'MPAD', 1),
(1162, 'MPAD 4502\r', 'MPAD', 1),
(1163, 'MEMS 2001\r', 'MEMS', 1),
(1164, 'MGDS 2000\r', 'MGDS', 1),
(1165, 'MGDS 4900\r', 'MGDS', 1),
(1166, 'MUSI 1000\r', 'MUSI', 1),
(1167, 'MUSI 1001\r', 'MUSI', 1),
(1168, 'MUSI 1002\r', 'MUSI', 1),
(1169, 'MUSI 1700\r', 'MUSI', 1),
(1170, 'MUSI 1711\r', 'MUSI', 1),
(1171, 'MUSI 1900\r', 'MUSI', 1),
(1172, 'MUSI 1912\r', 'MUSI', 1),
(1173, 'MUSI 1914\r', 'MUSI', 1),
(1174, 'MUSI 2005\r', 'MUSI', 1),
(1175, 'MUSI 2006\r', 'MUSI', 1),
(1176, 'MUSI 2008\r', 'MUSI', 1),
(1177, 'MUSI 2601\r', 'MUSI', 1),
(1178, 'MUSI 2608\r', 'MUSI', 1),
(1179, 'MUSI 2700\r', 'MUSI', 1),
(1180, 'MUSI 2710\r', 'MUSI', 1),
(1181, 'MUSI 2900\r', 'MUSI', 1),
(1182, 'MUSI 2912\r', 'MUSI', 1),
(1183, 'MUSI 2914\r', 'MUSI', 1),
(1184, 'MUSI 3200\r', 'MUSI', 1),
(1185, 'MUSI 3205\r', 'MUSI', 1),
(1186, 'MUSI 3206\r', 'MUSI', 1),
(1187, 'MUSI 3301\r', 'MUSI', 1),
(1188, 'MUSI 3409\r', 'MUSI', 1),
(1189, 'MUSI 3602\r', 'MUSI', 1),
(1190, 'MUSI 3701\r', 'MUSI', 1),
(1191, 'MUSI 3900\r', 'MUSI', 1),
(1192, 'MUSI 3912\r', 'MUSI', 1),
(1193, 'MUSI 3914\r', 'MUSI', 1),
(1194, 'MUSI 4000\r', 'MUSI', 1),
(1195, 'MUSI 4001\r', 'MUSI', 1),
(1196, 'MUSI 4003\r', 'MUSI', 1),
(1197, 'MUSI 4103\r', 'MUSI', 1),
(1198, 'MUSI 4200\r', 'MUSI', 1),
(1199, 'MUSI 4201\r', 'MUSI', 1),
(1200, 'MUSI 4205\r', 'MUSI', 1),
(1201, 'MUSI 4206\r', 'MUSI', 1),
(1202, 'MUSI 4602\r', 'MUSI', 1),
(1203, 'MUSI 4800\r', 'MUSI', 1),
(1204, 'MUSI 4801\r', 'MUSI', 1),
(1205, 'MUSI 4906\r', 'MUSI', 1),
(1206, 'MUSI 4908\r', 'MUSI', 1),
(1207, 'MUSI 4909\r', 'MUSI', 1),
(1208, 'MUSI 4912\r', 'MUSI', 1),
(1209, 'MUSI 4914\r', 'MUSI', 1),
(1210, 'NSCI 1000\r', 'NSCI', 1),
(1211, 'NET 1001\r', 'NET', 1),
(1212, 'NET 1002\r', 'NET', 1),
(1213, 'NET 2000\r', 'NET', 1),
(1214, 'NET 2008\r', 'NET', 1),
(1215, 'NET 2010\r', 'NET', 1),
(1216, 'NET 3000\r', 'NET', 1),
(1217, 'NET 3004\r', 'NET', 1),
(1218, 'NET 3007\r', 'NET', 1),
(1219, 'NET 3008\r', 'NET', 1),
(1220, 'NET 3900\r', 'NET', 1),
(1221, 'NET 4001\r', 'NET', 1),
(1222, 'NET 4005\r', 'NET', 1),
(1223, 'NET 4007\r', 'NET', 1),
(1224, 'NET 4009\r', 'NET', 1),
(1225, 'NET 4901\r', 'NET', 1),
(1226, 'NEUR 1202\r', 'NEUR', 1),
(1227, 'NEUR 1203\r', 'NEUR', 1),
(1228, 'NEUR 2001\r', 'NEUR', 1),
(1229, 'NEUR 2004\r', 'NEUR', 1),
(1230, 'NEUR 2201\r', 'NEUR', 1),
(1231, 'NEUR 3001\r', 'NEUR', 1),
(1232, 'NEUR 3204\r', 'NEUR', 1),
(1233, 'NEUR 3206\r', 'NEUR', 1),
(1234, 'NEUR 3301\r', 'NEUR', 1),
(1235, 'NEUR 3303\r', 'NEUR', 1),
(1236, 'NEUR 3304\r', 'NEUR', 1),
(1237, 'NEUR 3401\r', 'NEUR', 1),
(1238, 'NEUR 3403\r', 'NEUR', 1),
(1239, 'NEUR 4001\r', 'NEUR', 1),
(1240, 'NEUR 4200\r', 'NEUR', 1),
(1241, 'NEUR 4202\r', 'NEUR', 1),
(1242, 'NEUR 4203\r', 'NEUR', 1),
(1243, 'NEUR 4301\r', 'NEUR', 1),
(1244, 'NEUR 4305\r', 'NEUR', 1),
(1245, 'NEUR 4900\r', 'NEUR', 1),
(1246, 'NEUR 4905\r', 'NEUR', 1),
(1247, 'NEUR 4906\r', 'NEUR', 1),
(1248, 'NEUR 4907\r', 'NEUR', 1),
(1249, 'NEUR 4908\r', 'NEUR', 1),
(1250, 'OSS 1002\r', 'OSS', 1),
(1251, 'OSS 1006\r', 'OSS', 1),
(1252, 'OSS 2001\r', 'OSS', 1),
(1253, 'OSS 2005\r', 'OSS', 1),
(1254, 'OSS 2008\r', 'OSS', 1),
(1255, 'OSS 3000\r', 'OSS', 1),
(1256, 'OSS 3003\r', 'OSS', 1),
(1257, 'OSS 3004\r', 'OSS', 1),
(1258, 'OSS 3012\r', 'OSS', 1),
(1259, 'OSS 3013\r', 'OSS', 1),
(1260, 'OSS 4001\r', 'OSS', 1),
(1261, 'OSS 4006\r', 'OSS', 1),
(1262, 'OSS 4008\r', 'OSS', 1),
(1263, 'OSS 4900\r', 'OSS', 1),
(1264, 'PHIL 1000\r', 'PHIL', 1),
(1265, 'PHIL 1200\r', 'PHIL', 1),
(1266, 'PHIL 1301\r', 'PHIL', 1),
(1267, 'PHIL 1550\r', 'PHIL', 1),
(1268, 'PHIL 1700\r', 'PHIL', 1),
(1269, 'PHIL 2001\r', 'PHIL', 1),
(1270, 'PHIL 2003\r', 'PHIL', 1),
(1271, 'PHIL 2005\r', 'PHIL', 1),
(1272, 'PHIL 2010\r', 'PHIL', 1),
(1273, 'PHIL 2103\r', 'PHIL', 1),
(1274, 'PHIL 2306\r', 'PHIL', 1),
(1275, 'PHIL 2380\r', 'PHIL', 1),
(1276, 'PHIL 2408\r', 'PHIL', 1),
(1277, 'PHIL 2501\r', 'PHIL', 1),
(1278, 'PHIL 2807\r', 'PHIL', 1),
(1279, 'PHIL 3005\r', 'PHIL', 1),
(1280, 'PHIL 3104\r', 'PHIL', 1),
(1281, 'PHIL 3350\r', 'PHIL', 1),
(1282, 'PHIL 3540\r', 'PHIL', 1),
(1283, 'PHIL 4006\r', 'PHIL', 1),
(1284, 'PHIL 4008\r', 'PHIL', 1),
(1285, 'PHIL 4055\r', 'PHIL', 1),
(1286, 'PHIL 4220\r', 'PHIL', 1),
(1287, 'PHIL 4901\r', 'PHIL', 1),
(1288, 'PHYS 1001\r', 'PHYS', 1),
(1289, 'PHYS 1003\r', 'PHYS', 1),
(1290, 'PHYS 1007\r', 'PHYS', 1),
(1291, 'PHYS 1901\r', 'PHYS', 1),
(1292, 'PHYS 1905\r', 'PHYS', 1),
(1293, 'PHYS 2004\r', 'PHYS', 1),
(1294, 'PHYS 2203\r', 'PHYS', 1),
(1295, 'PHYS 2401\r', 'PHYS', 1),
(1296, 'PHYS 2604\r', 'PHYS', 1),
(1297, 'PHYS 3007\r', 'PHYS', 1),
(1298, 'PHYS 3009\r', 'PHYS', 1),
(1299, 'PHYS 3308\r', 'PHYS', 1),
(1300, 'PHYS 3701\r', 'PHYS', 1),
(1301, 'PHYS 3802\r', 'PHYS', 1),
(1302, 'PHYS 4008\r', 'PHYS', 1),
(1303, 'PHYS 4203\r', 'PHYS', 1),
(1304, 'PHYS 4208\r', 'PHYS', 1),
(1305, 'PHYS 4608\r', 'PHYS', 1),
(1306, 'PHYS 4707\r', 'PHYS', 1),
(1307, 'PHYS 4807\r', 'PHYS', 1),
(1308, 'PHYS 4907\r', 'PHYS', 1),
(1309, 'PHYS 4909\r', 'PHYS', 1),
(1310, 'PSCI 1100\r', 'PSCI', 1),
(1311, 'PSCI 1200\r', 'PSCI', 1),
(1312, 'PSCI 2002\r', 'PSCI', 1),
(1313, 'PSCI 2003\r', 'PSCI', 1),
(1314, 'PSCI 2102\r', 'PSCI', 1),
(1315, 'PSCI 2200\r', 'PSCI', 1),
(1316, 'PSCI 2301\r', 'PSCI', 1),
(1317, 'PSCI 2601\r', 'PSCI', 1),
(1318, 'PSCI 2602\r', 'PSCI', 1),
(1319, 'PSCI 2701\r', 'PSCI', 1),
(1320, 'PSCI 3007\r', 'PSCI', 1),
(1321, 'PSCI 3101\r', 'PSCI', 1),
(1322, 'PSCI 3107\r', 'PSCI', 1),
(1323, 'PSCI 3209\r', 'PSCI', 1),
(1324, 'PSCI 3210\r', 'PSCI', 1),
(1325, 'PSCI 3307\r', 'PSCI', 1),
(1326, 'PSCI 3406\r', 'PSCI', 1),
(1327, 'PSCI 3407\r', 'PSCI', 1),
(1328, 'PSCI 3502\r', 'PSCI', 1),
(1329, 'PSCI 3603\r', 'PSCI', 1),
(1330, 'PSCI 3608\r', 'PSCI', 1),
(1331, 'PSCI 3702\r', 'PSCI', 1),
(1332, 'PSCI 3703\r', 'PSCI', 1),
(1333, 'PSCI 3801\r', 'PSCI', 1),
(1334, 'PSCI 3802\r', 'PSCI', 1),
(1335, 'PSCI 3900\r', 'PSCI', 1),
(1336, 'PSCI 3905\r', 'PSCI', 1),
(1337, 'PSCI 3906\r', 'PSCI', 1),
(1338, 'PSCI 3907\r', 'PSCI', 1),
(1339, 'PSCI 4003\r', 'PSCI', 1),
(1340, 'PSCI 4005\r', 'PSCI', 1),
(1341, 'PSCI 4006\r', 'PSCI', 1),
(1342, 'PSCI 4104\r', 'PSCI', 1),
(1343, 'PSCI 4109\r', 'PSCI', 1),
(1344, 'PSCI 4206\r', 'PSCI', 1),
(1345, 'PSCI 4316\r', 'PSCI', 1),
(1346, 'PSCI 4403\r', 'PSCI', 1),
(1347, 'PSCI 4500\r', 'PSCI', 1),
(1348, 'PSCI 4506\r', 'PSCI', 1),
(1349, 'PSCI 4507\r', 'PSCI', 1),
(1350, 'PSCI 4604\r', 'PSCI', 1),
(1351, 'PSCI 4606\r', 'PSCI', 1),
(1352, 'PSCI 4801\r', 'PSCI', 1),
(1353, 'PSCI 4807\r', 'PSCI', 1),
(1354, 'PSCI 4809\r', 'PSCI', 1),
(1355, 'PSCI 4819\r', 'PSCI', 1),
(1356, 'PSCI 4901\r', 'PSCI', 1),
(1357, 'PSCI 4905\r', 'PSCI', 1),
(1358, 'PSCI 4906\r', 'PSCI', 1),
(1359, 'PSCI 4908\r', 'PSCI', 1),
(1360, 'PSCI 4909\r', 'PSCI', 1),
(1361, 'PORT 1010\r', 'PORT', 1),
(1362, 'PSYC 1001\r', 'PSYC', 1),
(1363, 'PSYC 1002\r', 'PSYC', 1),
(1364, 'PSYC 2001\r', 'PSYC', 1),
(1365, 'PSYC 2002\r', 'PSYC', 1),
(1366, 'PSYC 2100\r', 'PSYC', 1),
(1367, 'PSYC 2301\r', 'PSYC', 1),
(1368, 'PSYC 2307\r', 'PSYC', 1),
(1369, 'PSYC 2400\r', 'PSYC', 1),
(1370, 'PSYC 2500\r', 'PSYC', 1),
(1371, 'PSYC 2600\r', 'PSYC', 1),
(1372, 'PSYC 2700\r', 'PSYC', 1),
(1373, 'PSYC 2801\r', 'PSYC', 1),
(1374, 'PSYC 3000\r', 'PSYC', 1),
(1375, 'PSYC 3001\r', 'PSYC', 1),
(1376, 'PSYC 3100\r', 'PSYC', 1),
(1377, 'PSYC 3300\r', 'PSYC', 1),
(1378, 'PSYC 3301\r', 'PSYC', 1),
(1379, 'PSYC 3302\r', 'PSYC', 1),
(1380, 'PSYC 3400\r', 'PSYC', 1),
(1381, 'PSYC 3402\r', 'PSYC', 1),
(1382, 'PSYC 3403\r', 'PSYC', 1),
(1383, 'PSYC 3404\r', 'PSYC', 1),
(1384, 'PSYC 3500\r', 'PSYC', 1),
(1385, 'PSYC 3505\r', 'PSYC', 1),
(1386, 'PSYC 3506\r', 'PSYC', 1),
(1387, 'PSYC 3508\r', 'PSYC', 1),
(1388, 'PSYC 3509\r', 'PSYC', 1),
(1389, 'PSYC 3600\r', 'PSYC', 1),
(1390, 'PSYC 3603\r', 'PSYC', 1),
(1391, 'PSYC 3604\r', 'PSYC', 1),
(1392, 'PSYC 3700\r', 'PSYC', 1),
(1393, 'PSYC 3702\r', 'PSYC', 1),
(1394, 'PSYC 3709\r', 'PSYC', 1),
(1395, 'PSYC 3805\r', 'PSYC', 1),
(1396, 'PSYC 3901\r', 'PSYC', 1),
(1397, 'PSYC 4001\r', 'PSYC', 1),
(1398, 'PSYC 4330\r', 'PSYC', 1),
(1399, 'PSYC 4400\r', 'PSYC', 1),
(1400, 'PSYC 4404\r', 'PSYC', 1),
(1401, 'PSYC 4900\r', 'PSYC', 1),
(1402, 'PSYC 4902\r', 'PSYC', 1),
(1403, 'PSYC 4907\r', 'PSYC', 1),
(1404, 'PSYC 4908\r', 'PSYC', 1),
(1405, 'PSYC 4909\r', 'PSYC', 1),
(1406, 'PSYC 4910\r', 'PSYC', 1),
(1407, 'PADM 3105\r', 'PADM', 1),
(1408, 'PADM 4221\r', 'PADM', 1),
(1409, 'PADM 4224\r', 'PADM', 1),
(1410, 'PADM 4230\r', 'PADM', 1),
(1411, 'PADM 4611\r', 'PADM', 1),
(1412, 'PADM 4615\r', 'PADM', 1),
(1413, 'PAPM 1001\r', 'PAPM', 1),
(1414, 'PAPM 2001\r', 'PAPM', 1),
(1415, 'PAPM 3000\r', 'PAPM', 1),
(1416, 'PAPM 4000\r', 'PAPM', 1),
(1417, 'PAPM 4908\r', 'PAPM', 1),
(1418, 'RELI 1710\r', 'RELI', 1),
(1419, 'RELI 1731\r', 'RELI', 1),
(1420, 'RELI 2110\r', 'RELI', 1),
(1421, 'RELI 2220\r', 'RELI', 1),
(1422, 'RELI 2310\r', 'RELI', 1),
(1423, 'RELI 2410\r', 'RELI', 1),
(1424, 'RELI 2600\r', 'RELI', 1),
(1425, 'RELI 2710\r', 'RELI', 1),
(1426, 'RELI 2732\r', 'RELI', 1),
(1427, 'RELI 2736\r', 'RELI', 1),
(1428, 'RELI 2800\r', 'RELI', 1),
(1429, 'RELI 3522\r', 'RELI', 1),
(1430, 'RELI 4741\r', 'RELI', 1),
(1431, 'RELI 4840\r', 'RELI', 1),
(1432, 'RELI 4850\r', 'RELI', 1),
(1433, 'RELI 4990\r', 'RELI', 1),
(1434, 'RUSS 1010\r', 'RUSS', 1),
(1435, 'RUSS 2010\r', 'RUSS', 1),
(1436, 'RUSS 3010\r', 'RUSS', 1),
(1437, 'SXST 2101\r', 'SXST', 1),
(1438, 'SXST 2102\r', 'SXST', 1),
(1439, 'SXST 3103\r', 'SXST', 1),
(1440, 'SOWK 1001\r', 'SOWK', 1),
(1441, 'SOWK 2001\r', 'SOWK', 1),
(1442, 'SOWK 2005\r', 'SOWK', 1),
(1443, 'SOWK 2100\r', 'SOWK', 1),
(1444, 'SOWK 2202\r', 'SOWK', 1),
(1445, 'SOWK 2203\r', 'SOWK', 1),
(1446, 'SOWK 3001\r', 'SOWK', 1),
(1447, 'SOWK 3100\r', 'SOWK', 1),
(1448, 'SOWK 3207\r', 'SOWK', 1),
(1449, 'SOWK 3600\r', 'SOWK', 1),
(1450, 'SOWK 3602\r', 'SOWK', 1),
(1451, 'SOWK 4000\r', 'SOWK', 1),
(1452, 'SOWK 4001\r', 'SOWK', 1),
(1453, 'SOWK 4003\r', 'SOWK', 1),
(1454, 'SOWK 4300\r', 'SOWK', 1),
(1455, 'SOWK 4600\r', 'SOWK', 1),
(1456, 'SOWK 4601\r', 'SOWK', 1),
(1457, 'SOWK 4602\r', 'SOWK', 1),
(1458, 'SOWK 4908\r', 'SOWK', 1),
(1459, 'SOCI 1001\r', 'SOCI', 1),
(1460, 'SOCI 1002\r', 'SOCI', 1),
(1461, 'SOCI 1005\r', 'SOCI', 1),
(1462, 'SOCI 2000\r', 'SOCI', 1),
(1463, 'SOCI 2001\r', 'SOCI', 1),
(1464, 'SOCI 2005\r', 'SOCI', 1),
(1465, 'SOCI 2020\r', 'SOCI', 1),
(1466, 'SOCI 2040\r', 'SOCI', 1),
(1467, 'SOCI 2060\r', 'SOCI', 1),
(1468, 'SOCI 2150\r', 'SOCI', 1),
(1469, 'SOCI 2160\r', 'SOCI', 1),
(1470, 'SOCI 2170\r', 'SOCI', 1),
(1471, 'SOCI 2180\r', 'SOCI', 1),
(1472, 'SOCI 2445\r', 'SOCI', 1),
(1473, 'SOCI 2450\r', 'SOCI', 1),
(1474, 'SOCI 2702\r', 'SOCI', 1),
(1475, 'SOCI 2810\r', 'SOCI', 1),
(1476, 'SOCI 2910\r', 'SOCI', 1),
(1477, 'SOCI 3000\r', 'SOCI', 1),
(1478, 'SOCI 3004\r', 'SOCI', 1),
(1479, 'SOCI 3006\r', 'SOCI', 1),
(1480, 'SOCI 3010\r', 'SOCI', 1),
(1481, 'SOCI 3027\r', 'SOCI', 1),
(1482, 'SOCI 3030\r', 'SOCI', 1),
(1483, 'SOCI 3044\r', 'SOCI', 1),
(1484, 'SOCI 3055\r', 'SOCI', 1),
(1485, 'SOCI 3056\r', 'SOCI', 1),
(1486, 'SOCI 3060\r', 'SOCI', 1),
(1487, 'SOCI 3210\r', 'SOCI', 1),
(1488, 'SOCI 3410\r', 'SOCI', 1),
(1489, 'SOCI 3430\r', 'SOCI', 1),
(1490, 'SOCI 3570\r', 'SOCI', 1),
(1491, 'SOCI 3805\r', 'SOCI', 1),
(1492, 'SOCI 3910\r', 'SOCI', 1),
(1493, 'SOCI 4020\r', 'SOCI', 1),
(1494, 'SOCI 4039\r', 'SOCI', 1),
(1495, 'SOCI 4043\r', 'SOCI', 1),
(1496, 'SOCI 4170\r', 'SOCI', 1),
(1497, 'SOCI 4410\r', 'SOCI', 1),
(1498, 'SOCI 4480\r', 'SOCI', 1),
(1499, 'SOCI 4730\r', 'SOCI', 1),
(1500, 'SOCI 4810\r', 'SOCI', 1),
(1501, 'SOCI 4860\r', 'SOCI', 1),
(1502, 'SOCI 4900\r', 'SOCI', 1),
(1503, 'SOCI 4910\r', 'SOCI', 1),
(1504, 'SPAN 1010\r', 'SPAN', 1),
(1505, 'SPAN 1020\r', 'SPAN', 1),
(1506, 'SPAN 1110\r', 'SPAN', 1),
(1507, 'SPAN 2010\r', 'SPAN', 1),
(1508, 'SPAN 3110\r', 'SPAN', 1),
(1509, 'STAT 2507\r', 'STAT', 1),
(1510, 'STAT 2509\r', 'STAT', 1),
(1511, 'STAT 2605\r', 'STAT', 1),
(1512, 'STAT 2606\r', 'STAT', 1),
(1513, 'STAT 2607\r', 'STAT', 1),
(1514, 'STAT 2655\r', 'STAT', 1),
(1515, 'STAT 3503\r', 'STAT', 1),
(1516, 'STAT 3508\r', 'STAT', 1),
(1517, 'STAT 3553\r', 'STAT', 1),
(1518, 'STAT 3558\r', 'STAT', 1),
(1519, 'STAT 3660\r', 'STAT', 1),
(1520, 'STAT 4500\r', 'STAT', 1),
(1521, 'STAT 4503\r', 'STAT', 1),
(1522, 'STAT 4508\r', 'STAT', 1),
(1523, 'STAT 4603\r', 'STAT', 1),
(1524, 'STAT 4660\r', 'STAT', 1),
(1525, 'STAT 4905\r', 'STAT', 1),
(1526, 'SREE 3001\r', 'SREE', 1),
(1527, 'SREE 4001\r', 'SREE', 1),
(1528, 'SREE 4907\r', 'SREE', 1),
(1529, 'SYSC 2006\r', 'SYSC', 1),
(1530, 'SYSC 2310\r', 'SYSC', 1),
(1531, 'SYSC 3006\r', 'SYSC', 1),
(1532, 'SYSC 3020\r', 'SYSC', 1),
(1533, 'SYSC 3110\r', 'SYSC', 1),
(1534, 'SYSC 3120\r', 'SYSC', 1),
(1535, 'SYSC 3203\r', 'SYSC', 1),
(1536, 'SYSC 3310\r', 'SYSC', 1),
(1537, 'SYSC 3500\r', 'SYSC', 1),
(1538, 'SYSC 3600\r', 'SYSC', 1),
(1539, 'SYSC 3610\r', 'SYSC', 1),
(1540, 'SYSC 4001\r', 'SYSC', 1),
(1541, 'SYSC 4006\r', 'SYSC', 1),
(1542, 'SYSC 4101\r', 'SYSC', 1),
(1543, 'SYSC 4120\r', 'SYSC', 1),
(1544, 'SYSC 4203\r', 'SYSC', 1),
(1545, 'SYSC 4310\r', 'SYSC', 1),
(1546, 'SYSC 4405\r', 'SYSC', 1),
(1547, 'SYSC 4415\r', 'SYSC', 1),
(1548, 'SYSC 4504\r', 'SYSC', 1),
(1549, 'SYSC 4505\r', 'SYSC', 1),
(1550, 'SYSC 4600\r', 'SYSC', 1),
(1551, 'SYSC 4602\r', 'SYSC', 1),
(1552, 'SYSC 4604\r', 'SYSC', 1),
(1553, 'SYSC 4810\r', 'SYSC', 1),
(1554, 'SYSC 4907\r', 'SYSC', 1),
(1555, 'TSES 2305\r', 'TSES', 1),
(1556, 'TSES 3001\r', 'TSES', 1),
(1557, 'TSES 4001\r', 'TSES', 1),
(1558, 'TSES 4007\r', 'TSES', 1),
(1559, 'TSES 4009\r', 'TSES', 1),
(1560, 'TSES 4014\r', 'TSES', 1),
(1561, 'WGST 1808\r', 'WGST', 1),
(1562, 'WGST 2803\r', 'WGST', 1),
(1563, 'WGST 3001\r', 'WGST', 1),
(1564, 'WGST 3803\r', 'WGST', 1),
(1565, 'WGST 3807\r', 'WGST', 1),
(1566, 'WGST 3812\r', 'WGST', 1),
(1567, 'WGST 4811\r', 'WGST', 1),
(1568, 'WGST 4812\r', 'WGST', 1),
(1569, 'WGST 4814\r', 'WGST', 1);

-- --------------------------------------------------------

--
-- Table structure for table `Messages`
--

CREATE TABLE `Messages` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `tel` varchar(32) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `msg` text DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `subject` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `MyLessons`
--

CREATE TABLE `MyLessons` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `finished` tinyint(1) NOT NULL,
  `timingId` int(11) NOT NULL,
  `acceptStatus` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `timeStart` float DEFAULT NULL,
  `timeEnd` float DEFAULT NULL,
  `dayOfWeek` int(11) DEFAULT NULL,
  `tutorUserId` int(11) DEFAULT NULL,
  `lessonId` int(11) DEFAULT NULL,
  `message` varchar(500) DEFAULT NULL,
  `replay` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `MyLessons`
--

INSERT INTO `MyLessons` (`id`, `userId`, `finished`, `timingId`, `acceptStatus`, `createdAt`, `updatedAt`, `timeStart`, `timeEnd`, `dayOfWeek`, `tutorUserId`, `lessonId`, `message`, `replay`) VALUES
(1, 1, 1, 32, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 16, 18, 1, 36, 4, NULL, NULL),
(2, 1, 1, 32, 1, '2021-09-11 00:00:00', '2021-09-11 00:00:00', 16, 18, 1, 36, 4, NULL, NULL),
(3, 39, 0, 34, 0, '2021-11-20 06:59:30', '2021-11-20 06:59:30', 5, 7, 1, 36, 4, NULL, NULL),
(4, 1, 0, 28, 0, '2021-11-23 08:11:23', '2021-11-23 08:11:23', 21, 23, 1, 35, 4, NULL, NULL),
(5, 1, 0, 42, 1, '2021-12-02 19:05:19', '2021-12-02 19:06:46', 12, 14, 1, 2, 2, 'Create responsive video or slideshow embeds based on the width of the parent by creating an intrinsic ratio that scales on any device.', NULL),
(6, 2, 0, 3, 1, '2021-12-02 19:11:19', '2021-12-02 19:13:28', 7, 9, 1, 1, 3, 'I like to take a lesson with you.', NULL),
(7, 2, 0, 32, 0, '2021-12-02 19:22:21', '2021-12-02 19:22:21', 16, 18, 1, 36, 4, '', NULL),
(8, 2, 0, 33, 0, '2021-12-10 21:27:09', '2021-12-10 21:27:09', 10, 12, 1, 36, 4, 'csdvsdvs', NULL),
(9, 2, 0, 35, 0, '2021-12-10 21:27:36', '2021-12-10 21:27:36', 5, 7, 4, 36, 4, 'csdv', NULL),
(10, 1, 0, 40, 1, '2021-12-10 21:28:24', '2021-12-11 17:10:22', 5, 7, 1, 2, 2, 'Yes \n', NULL),
(11, 44, 0, 35, 0, '2021-12-11 17:02:52', '2021-12-11 17:02:52', 5, 7, 4, 36, 4, '50?', NULL),
(12, 44, 0, 45, 2, '2021-12-11 17:14:39', '2021-12-11 17:17:32', 5, 7, 1, 2, 2, 'Can we do it on this time instead?', NULL),
(13, 44, 0, 39, 1, '2021-12-11 17:23:43', '2021-12-11 17:29:07', 5, 7, 0, 2, 2, 'vd', NULL),
(14, 44, 0, 43, 1, '2021-12-17 02:30:47', '2021-12-17 02:32:46', 14, 16, 2, 2, 2, 'Yes ', NULL),
(15, 44, 0, 41, 1, '2021-12-18 17:29:14', '2021-12-18 17:31:10', 8, 10, 3, 2, 2, 'fafa', NULL),
(16, 6, 0, 39, 2, '2021-12-19 17:07:47', '2021-12-19 17:08:53', 5, 7, 0, 2, 2, 'No Go f youreself', NULL),
(17, 2, 0, 34, 0, '2021-12-21 03:47:33', '2021-12-21 03:47:33', 5, 7, 1, 36, 4, '', NULL),
(18, 2, 0, 45, 0, '2021-12-21 03:47:52', '2021-12-21 03:47:52', 5, 7, 1, 2, 2, '', NULL),
(19, 2, 0, 61, 0, '2021-12-26 04:49:55', '2021-12-26 04:49:55', 6, 8, 0, 47, 4, 'I like to book a session with you. ', NULL),
(20, 48, 0, 41, 2, '2021-12-27 16:59:21', '2021-12-27 17:29:26', 8, 10, 3, 2, 2, 'Nope', NULL),
(21, 48, 0, 43, 1, '2021-12-27 17:36:50', '2021-12-27 17:38:21', 14, 16, 2, 2, 2, 'ggg', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Notifications`
--

CREATE TABLE `Notifications` (
  `id` int(11) NOT NULL,
  `title` varchar(250) DEFAULT NULL,
  `text` text DEFAULT NULL,
  `level` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `RateOveralls`
--

CREATE TABLE `RateOveralls` (
  `id` int(11) NOT NULL,
  `avg_rate` float NOT NULL,
  `tutorId` int(11) NOT NULL,
  `lessonId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `RateOveralls`
--

INSERT INTO `RateOveralls` (`id`, `avg_rate`, `tutorId`, `lessonId`, `createdAt`, `updatedAt`) VALUES
(1, 0, 1, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 0, 16, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 0, 26, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 0, 28, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 0, 30, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 0, 34, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 0, 34, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 0, 35, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 0, 36, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 0, 36, 93, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 0, 2, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 0, 41, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 0, 2, 11, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 0, 6, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 0, 47, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 0, 48, 7, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `Rates`
--

CREATE TABLE `Rates` (
  `id` int(11) NOT NULL,
  `rate` float NOT NULL,
  `tutor_userId` int(11) NOT NULL,
  `stu_userId` int(11) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `acceptStatus` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  `lessonId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Triggers `Rates`
--
DELIMITER $$
CREATE TRIGGER `rates_after_delete` AFTER DELETE ON `Rates` FOR EACH ROW BEGIN
	DECLARE avg_rate FLOAT;

	SET avg_rate = (SELECT avg(rate)  FROM Rates WHERE tutor_userId = OLD.tutor_UserId AND lessonId = OLD.lessonId and acceptStatus = 1  LIMIT 1) ;

	IF (avg_rate IS NULL) THEN
		delete from RateOveralls where tutorId = OLD.tutor_UserId and  lessonId = OLD.lessonId;
	ELSE

		IF NOT exists(select id from RateOveralls where tutorId = OLD.tutor_UserId and  lessonId = OLD.lessonId) THEN
			INSERT INTO RateOveralls (avg_rate , lessonId , tutorId) values(avg_rate, OLD.lessonId , OLD.tutor_UserId );
		ELSE
			UPDATE RateOveralls set avg_rate = avg_rate WHERE tutorId = OLD.tutor_UserId and  lessonId = OLD.lessonId;
		END IF;
	END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `rates_after_insert` AFTER INSERT ON `Rates` FOR EACH ROW BEGIN
	DECLARE avg_rate FLOAT;

	SET avg_rate = (SELECT avg(rate)  FROM Rates WHERE tutor_userId = NEW.tutor_UserId AND lessonId = NEW.lessonId and acceptStatus = 1  LIMIT 1) ;

	IF (avg_rate IS NULL) THEN
		delete from RateOveralls where tutorId = NEW.tutor_UserId and  lessonId = NEW.lessonId;
	ELSE

		IF NOT exists(select id from RateOveralls where tutorId = NEW.tutor_UserId and  lessonId = NEW.lessonId) THEN
			INSERT INTO RateOveralls (avg_rate , lessonId , tutorId) values(avg_rate, NEW.lessonId , NEW.tutor_UserId );
		ELSE
			UPDATE RateOveralls set avg_rate = avg_rate WHERE tutorId = NEW.tutor_UserId and  lessonId = NEW.lessonId;
		END IF;
	END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `rates_after_update` AFTER UPDATE ON `Rates` FOR EACH ROW BEGIN
	DECLARE avg_rate FLOAT;

	SET avg_rate = (SELECT avg(rate)  FROM Rates WHERE tutor_userId = NEW.tutor_UserId AND lessonId = NEW.lessonId and acceptStatus = 1  LIMIT 1) ;

	IF (avg_rate IS NULL) THEN
		delete from RateOveralls where tutorId = NEW.tutor_UserId and  lessonId = NEW.lessonId;
	ELSE

		IF NOT exists(select id from RateOveralls where tutorId = NEW.tutor_UserId and  lessonId = NEW.lessonId) THEN
			INSERT INTO RateOveralls (avg_rate , lessonId , tutorId) values(avg_rate, NEW.lessonId , NEW.tutor_UserId );
		ELSE
			UPDATE RateOveralls set avg_rate = avg_rate WHERE tutorId = NEW.tutor_UserId and  lessonId = NEW.lessonId;
		END IF;
	END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `Requests`
--

CREATE TABLE `Requests` (
  `id` int(11) NOT NULL,
  `room` varchar(255) NOT NULL,
  `receiverId` int(11) NOT NULL,
  `senderId` int(11) NOT NULL,
  `text` varchar(255) NOT NULL,
  `viewed` tinyint(1) DEFAULT NULL,
  `viewTime` datetime DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL,
  `type` int(11) NOT NULL,
  `entityId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleteId1` int(11) DEFAULT NULL,
  `deleteId2` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Requests`
--

INSERT INTO `Requests` (`id`, `room`, `receiverId`, `senderId`, `text`, `viewed`, `viewTime`, `deleted`, `type`, `entityId`, `createdAt`, `updatedAt`, `deleteId1`, `deleteId2`) VALUES
(1, '1', 34, 1, 'salam', 0, NULL, 0, 0, 0, '2021-11-13 17:19:09', '2021-11-13 17:19:09', NULL, NULL),
(2, '2', 36, 1, 'salam peygham mojadad', 0, NULL, 0, 0, 0, '2021-11-13 17:34:13', '2021-11-13 17:34:13', NULL, NULL),
(3, '2', 36, 1, 'salam\n', 0, NULL, 0, 0, 0, '2021-11-14 13:31:28', '2021-11-14 13:31:28', NULL, NULL),
(4, '2e58b9a92630f8e439d807cdcc79276d', 36, 39, 'sfdf', 0, NULL, 0, 1, 3, '2021-11-20 06:59:30', '2021-11-20 06:59:30', NULL, NULL),
(5, 'a064fb18f053df334a95b09cfecfd567', 35, 1, 'da sda sd asd', 0, NULL, 0, 1, 4, '2021-11-23 08:11:23', '2021-11-23 08:11:23', NULL, NULL),
(6, '6', 36, 2, 'Gggg', 0, NULL, 0, 0, 0, '2021-11-26 05:23:58', '2021-11-26 05:23:58', NULL, NULL),
(7, '6', 36, 2, 'Ok', 0, NULL, 0, 0, 0, '2021-11-26 05:24:43', '2021-11-26 05:24:43', NULL, NULL),
(8, '2', 36, 1, 'salam', 0, NULL, 0, 0, 0, '2021-12-02 16:59:32', '2021-12-02 16:59:32', NULL, NULL),
(9, '2', 36, 1, 'peygham man miyad?', 0, NULL, 0, 0, 0, '2021-12-02 16:59:40', '2021-12-02 16:59:40', NULL, NULL),
(10, '6', 36, 2, 'gfdfgd', 0, NULL, 0, 0, 0, '2021-12-02 18:58:12', '2021-12-02 18:58:12', NULL, NULL),
(11, '2', 36, 1, 'salam', 0, NULL, 0, 0, 0, '2021-12-02 18:58:15', '2021-12-02 18:58:15', NULL, NULL),
(12, '2', 36, 1, 'salam', 0, NULL, 0, 0, 0, '2021-12-02 19:00:12', '2021-12-02 19:00:12', NULL, NULL),
(13, '13', 1, 2, 'salaaaaam\n', 1, '2021-12-02 19:01:20', 0, 0, 0, '2021-12-02 19:01:09', '2021-12-17 00:45:10', 2, NULL),
(14, '13', 2, 1, 'salam', 1, '2021-12-02 19:01:32', 0, 0, 0, '2021-12-02 19:01:23', '2021-12-17 00:45:10', 2, NULL),
(15, '6', 36, 2, 'csdvsdvs', 0, NULL, 0, 1, 8, '2021-12-10 21:27:09', '2021-12-10 21:27:09', NULL, NULL),
(16, '6', 36, 2, 'cvsdvsdvsdvcs', 0, NULL, 0, 0, 0, '2021-12-10 21:27:29', '2021-12-10 21:27:29', NULL, NULL),
(17, '6', 36, 2, 'csdv', 0, NULL, 0, 1, 9, '2021-12-10 21:27:36', '2021-12-10 21:27:36', NULL, NULL),
(18, '13', 2, 1, 'salam', 1, '2021-12-10 21:28:35', 0, 1, 10, '2021-12-10 21:28:24', '2021-12-17 00:45:10', 2, NULL),
(19, '19', 41, 2, 'vdsv', 0, NULL, 0, 0, 0, '2021-12-10 21:32:32', '2021-12-27 17:42:00', 2, NULL),
(20, '20', 36, 44, 'I would like to book a lesson with you', 0, NULL, 0, 0, 0, '2021-12-11 17:02:37', '2021-12-11 17:02:37', NULL, NULL),
(21, '20', 36, 44, '50?', 0, NULL, 0, 1, 11, '2021-12-11 17:02:52', '2021-12-11 17:02:52', NULL, NULL),
(22, '22', 2, 44, 'Take lesson with you\n', 1, '2021-12-11 17:06:54', 0, 0, 0, '2021-12-11 17:06:26', '2021-12-17 00:45:17', 2, NULL),
(23, '22', 44, 2, 'Sure tommorrow', 1, '2021-12-11 17:13:11', 0, 0, 0, '2021-12-11 17:07:01', '2021-12-17 00:45:17', 2, NULL),
(24, '13', 2, 1, 'Yes \n', 1, '2021-12-11 17:10:41', 0, 2, 10, '2021-12-11 17:10:22', '2021-12-17 00:45:10', 2, NULL),
(25, '22', 2, 44, 'This', 1, '2021-12-11 17:16:45', 0, 1, 12, '2021-12-11 17:14:39', '2021-12-17 00:45:17', 2, NULL),
(26, '22', 2, 44, 'Can we do it on this time instead?', 1, '2021-12-11 17:17:42', 0, 3, 12, '2021-12-11 17:17:32', '2021-12-17 00:45:17', 2, NULL),
(27, '22', 2, 44, 'Can we do it on this time instead?', 1, '2021-12-11 17:17:42', 0, 3, 12, '2021-12-11 17:17:32', '2021-12-17 00:45:17', 2, NULL),
(28, '22', 2, 44, 'this', 1, '2021-12-11 17:25:24', 0, 1, 13, '2021-12-11 17:23:43', '2021-12-17 00:45:17', 2, NULL),
(29, '22', 2, 44, 'vd', 1, '2021-12-11 17:32:04', 0, 2, 13, '2021-12-11 17:29:07', '2021-12-17 00:45:17', 2, NULL),
(30, '22', 2, 44, 'csczzsczczcx', 1, '2021-12-11 17:55:15', 0, 0, 0, '2021-12-11 17:49:11', '2021-12-17 00:45:17', 2, NULL),
(31, '22', 2, 44, 'saasaalaa\n', 1, '2021-12-11 18:11:06', 0, 0, 0, '2021-12-11 18:10:42', '2021-12-17 00:45:17', 2, NULL),
(32, '22', 2, 44, 'I would like to take a lesson with you\n', 1, '2021-12-17 02:31:21', 0, 1, 14, '2021-12-17 02:30:47', '2021-12-27 17:40:58', 2, NULL),
(33, '22', 44, 2, 'Yes ', 1, '2021-12-17 02:33:38', 0, 2, 14, '2021-12-17 02:32:46', '2021-12-27 17:40:58', 2, NULL),
(34, '22', 44, 2, 'This is my phone #', 1, '2021-12-17 02:33:38', 0, 0, 0, '2021-12-17 02:33:10', '2021-12-27 17:40:58', 2, NULL),
(35, '22', 44, 2, 'Thhs', 1, '2021-12-17 02:33:38', 0, 0, 0, '2021-12-17 02:33:14', '2021-12-27 17:40:58', 2, NULL),
(36, '22', 2, 44, 'vsdvsvd', 1, '2021-12-18 17:30:25', 0, 1, 15, '2021-12-18 17:29:14', '2021-12-27 17:40:58', 2, NULL),
(37, '22', 44, 2, 'fafa', 1, '2021-12-20 01:21:01', 0, 2, 15, '2021-12-18 17:31:10', '2021-12-27 17:40:58', 2, NULL),
(38, '6e48253a1963c379127d9147a1c0d681', 2, 6, 'want to do this', 1, '2021-12-19 17:08:08', 0, 1, 16, '2021-12-19 17:07:47', '2021-12-19 17:08:43', 6, NULL),
(39, '6e48253a1963c379127d9147a1c0d681', 6, 2, 'Sure ', 1, '2021-12-19 17:08:31', 0, 0, 0, '2021-12-19 17:08:19', '2021-12-19 17:08:43', 6, NULL),
(40, '6e48253a1963c379127d9147a1c0d681', 6, 2, 'No Go f youreself', 1, '2021-12-19 17:09:01', 0, 3, 16, '2021-12-19 17:08:53', '2021-12-21 16:07:46', 6, NULL),
(41, '6', 36, 2, '', 0, NULL, 0, 1, 17, '2021-12-21 03:47:33', '2021-12-21 03:47:33', NULL, NULL),
(42, '2f828549dead692cd107a8fd5a4ba1fc', 2, 2, '', 1, '2021-12-21 03:48:56', 0, 1, 18, '2021-12-21 03:47:52', '2021-12-21 03:48:56', NULL, NULL),
(43, '43', 34, 6, 'hello', 0, NULL, 0, 0, 0, '2021-12-21 16:05:05', '2021-12-21 16:05:05', NULL, NULL),
(44, '44', 47, 47, 'test', 1, '2021-12-25 04:02:20', 0, 0, 0, '2021-12-25 04:01:59', '2021-12-25 04:02:20', NULL, NULL),
(45, '44', 47, 47, 'ok', 1, '2021-12-25 04:02:31', 0, 0, 0, '2021-12-25 04:02:23', '2021-12-25 04:02:31', NULL, NULL),
(46, '18a4b9afc07b3cfbd4c8296ed0564db8', 47, 2, 'I like to book a session with you. ', 1, '2021-12-26 04:54:26', 0, 1, 19, '2021-12-26 04:49:55', '2021-12-26 04:54:26', NULL, NULL),
(47, 'a064fb18f053df334a95b09cfecfd567', 35, 1, 'dasAS', 0, NULL, 0, 0, 0, '2021-12-26 06:03:02', '2021-12-26 06:03:02', NULL, NULL),
(48, '13', 2, 1, 'salam', 1, '2021-12-26 19:29:53', 0, 0, 0, '2021-12-26 06:03:13', '2021-12-26 19:29:53', NULL, NULL),
(49, '13', 2, 1, 'khobi?', 1, '2021-12-26 19:29:53', 0, 0, 0, '2021-12-26 06:03:20', '2021-12-26 19:29:53', NULL, NULL),
(50, '13', 2, 1, 'man check kardam in mored  dorost bood', 1, '2021-12-26 19:29:53', 0, 0, 0, '2021-12-26 06:03:31', '2021-12-26 19:29:53', NULL, NULL),
(51, '2f828549dead692cd107a8fd5a4ba1fc', 2, 2, 'asd', 1, '2021-12-26 20:45:40', 0, 0, 0, '2021-12-26 20:45:35', '2021-12-26 20:45:40', NULL, NULL),
(52, '18a4b9afc07b3cfbd4c8296ed0564db8', 47, 2, 'asdasd', 1, '2021-12-27 02:17:19', 0, 0, 0, '2021-12-26 20:46:35', '2021-12-27 02:17:19', NULL, NULL),
(53, '53', 47, 48, 'Hi', 0, NULL, 0, 0, 0, '2021-12-27 16:59:06', '2021-12-27 16:59:06', NULL, NULL),
(54, 'd941577064aa23e4c5aac5b45b03d38d', 2, 48, 'kkcscaca', 1, '2021-12-27 17:28:03', 0, 1, 20, '2021-12-27 16:59:21', '2021-12-27 17:28:03', NULL, NULL),
(55, 'd941577064aa23e4c5aac5b45b03d38d', 2, 48, 'seee', 1, '2021-12-27 17:28:03', 0, 0, 0, '2021-12-27 17:27:09', '2021-12-27 17:28:03', NULL, NULL),
(56, 'd941577064aa23e4c5aac5b45b03d38d', 48, 2, 'Nope', 1, '2021-12-27 17:33:42', 0, 3, 20, '2021-12-27 17:29:26', '2021-12-27 17:33:42', NULL, NULL),
(57, 'd941577064aa23e4c5aac5b45b03d38d', 2, 48, 'ccsc', 1, '2021-12-27 17:38:09', 0, 1, 21, '2021-12-27 17:36:50', '2021-12-27 17:38:09', NULL, NULL),
(58, 'd941577064aa23e4c5aac5b45b03d38d', 48, 2, 'ggg', 1, '2021-12-27 17:59:10', 0, 2, 21, '2021-12-27 17:38:21', '2021-12-27 17:59:10', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Roles`
--

CREATE TABLE `Roles` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Roles`
--

INSERT INTO `Roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'tutor', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'student', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20200223212005-create-user.js'),
('20200223212007-create-comunication.js'),
('20200223222005-create-role.js'),
('20200223222006-create-requests.js'),
('20200223222015-create-rates.js'),
('20200223222016-add-deleted-feild-rates.js'),
('20200223222016-create-mylessons.js'),
('20200223232005-create-user-role.js'),
('20200315185857-create-message.js'),
('20210719030333-create-files.js'),
('20210719044859-create-certificate.js'),
('20210723194956-create-university.js'),
('20210723194957-add-fields-university.js'),
('20210723210703-create-change-log.js'),
('20210723210836-create-experience.js'),
('20210723211003-create-educations.js'),
('20210723211116-create-lessons.js'),
('20210723211220-create-user-lesson.js'),
('20210723211221-create-tutor-timing.js'),
('20211017082943-mylesson-add-timing-feilds.js'),
('20211019065039-mylesson_add_constraint.js'),
('20211019065040-request_change_room_type.js'),
('20211022065039-add-user-black-list.js'),
('20211024140444-user-add-program-field.js'),
('20211024182759-create-setting.js'),
('20211025102759-lesson-add-field.js'),
('20211026005039-add-faq.js'),
('20211027063705-education-add-remove-feilds.js'),
('20211029210948-users-add-online-inpersson.js'),
('20211031094820-rates-add-lessonId.js'),
('20211036005039-create-language.js'),
('20211103112335-user_lesson_add_price.js'),
('20211108134839-create-rates-overall.js'),
('20211108164412-rate-rateoverall-add-constraint.js'),
('20211108164413-rate-add-trigger.js'),
('20211121211439-contactus-add-feiled.js'),
('20211130073834-mylesson-add-feilds-message-replay.js'),
('20211208221229-create-notifications.js'),
('20211208221631-create-user-notifications.js'),
('20211212061328-requests_add-fiels-deleteId1-deleteId2.js'),
('20211214081324-rate_overall_allow_null.js'),
('20211214102628-create_rate_default_procedure.js'),
('20211215200043-faq_change_field_type.js'),
('20211215225400-user_add_fields_active_delete.js'),
('20211217192758-user_disable_defaultValue.js'),
('20211226200257-create-gender-table.js'),
('20211226202021-user-add-field-genderId.js');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `key` varchar(255) NOT NULL,
  `value` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `TutorTimings`
--

CREATE TABLE `TutorTimings` (
  `id` int(11) NOT NULL,
  `timeStart` float DEFAULT NULL,
  `timeEnd` float DEFAULT NULL,
  `dayOfWeek` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `TutorTimings`
--

INSERT INTO `TutorTimings` (`id`, `timeStart`, `timeEnd`, `dayOfWeek`, `userId`) VALUES
(1, 38, 40, 3, 1),
(3, 7, 9, 1, 1),
(4, 13, 15, 1, 1),
(5, 19, 21, 1, 1),
(6, 14, 16, 3, 1),
(7, 20, 22, 3, 1),
(8, 7, 9, 2, 16),
(9, 22, 24, 2, 16),
(10, 3, 5, 2, 16),
(11, 3, 5, 4, 16),
(12, 13, 15, 2, 26),
(13, 6, 8, 1, 26),
(14, 4, 6, 4, 26),
(15, 14, 16, 5, 26),
(16, 28, 30, 3, 26),
(17, 29, 31, 0, 26),
(18, 33, 35, 0, 26),
(19, 21, 23, 1, 28),
(20, 24, 26, 1, 28),
(21, 29, 31, 1, 28),
(22, 34, 36, 1, 28),
(23, 9, 11, 2, 34),
(24, 5, 7, 1, 34),
(25, 8, 10, 1, 34),
(26, 13, 15, 2, 35),
(27, 18, 20, 3, 35),
(28, 21, 23, 1, 35),
(29, 8, 10, 4, 35),
(30, 33, 35, 2, 35),
(31, 41, 43, 2, 35),
(32, 16, 18, 1, 36),
(33, 10, 12, 1, 36),
(34, 5, 7, 1, 36),
(35, 5, 7, 4, 36),
(36, 16, 18, 5, 36),
(37, 18, 20, 4, 36),
(38, 36, 38, 2, 1),
(39, 5, 7, 0, 2),
(41, 8, 10, 3, 2),
(42, 12, 14, 1, 2),
(43, 14, 16, 2, 2),
(45, 5, 7, 1, 2),
(46, 10, 12, 0, 6),
(47, 8, 10, 0, 6),
(48, 6, 8, 0, 6),
(49, 7, 9, 1, 6),
(50, 7, 9, 3, 6),
(51, 6, 8, 5, 6),
(52, 3, 5, 5, 6),
(53, 3, 5, 1, 47),
(54, 1, 3, 2, 47),
(55, 4, 6, 3, 47),
(56, 7, 9, 2, 47),
(58, 9, 11, 0, 47),
(59, 11, 13, 3, 47),
(60, 9, 11, 3, 47),
(61, 6, 8, 0, 47),
(62, 3, 5, 0, 47),
(64, 25, 27, 2, 47),
(65, 27, 29, 0, 47),
(66, 40, 42, 4, 47),
(67, 42, 44, 1, 47),
(68, 45, 47, 2, 47),
(69, 45, 47, 4, 47),
(70, 6, 8, 1, 48),
(71, 9, 11, 1, 48),
(73, 2, 4, 2, 48),
(74, 1, 3, 1, 48);

-- --------------------------------------------------------

--
-- Table structure for table `Universities`
--

CREATE TABLE `Universities` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `emailPattern` varchar(150) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `isenable` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `gradePercent` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Universities`
--

INSERT INTO `Universities` (`id`, `name`, `emailPattern`, `email`, `isenable`, `createdAt`, `updatedAt`, `gradePercent`) VALUES
(1, 'cmail.carleton.ca', 'cmail.carleton.ca', 'uni@cmail.carleton.ca', 1, '2021-10-12 05:58:02', '2021-10-12 05:58:02', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `UserBlackLists`
--

CREATE TABLE `UserBlackLists` (
  `id` int(11) NOT NULL,
  `userId` varchar(255) DEFAULT NULL,
  `savedTime` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `UserLessons`
--

CREATE TABLE `UserLessons` (
  `id` int(11) NOT NULL,
  `lessonId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `acceptStatus` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `grade` varchar(5) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `university` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `UserLessons`
--

INSERT INTO `UserLessons` (`id`, `lessonId`, `userId`, `description`, `acceptStatus`, `createdAt`, `updatedAt`, `grade`, `year`, `university`, `price`) VALUES
(1, 3, 1, 'sdfdfsdfsdf', 0, '2021-10-28 00:07:49', '2021-11-22 22:02:37', 'B-', 1963, NULL, 50),
(2, 4, 16, 'wq', 0, '2021-10-29 23:19:42', '2021-10-29 23:19:42', 'A+', 2016, NULL, NULL),
(4, 4, 26, 'adasdasd', 0, '2021-11-01 20:03:32', '2021-11-01 20:03:32', 'C', 1962, NULL, NULL),
(6, 3, 28, NULL, 0, '2021-11-01 20:11:29', '2021-11-01 20:11:29', 'C', 1963, NULL, NULL),
(7, 2, 30, '', 0, '2021-11-09 19:16:01', '2021-11-09 19:16:01', 'A', 2014, NULL, 20),
(8, 3, 34, 'cscasva', 1, '2021-11-13 17:03:52', '2021-11-13 17:17:01', 'A+', 1964, NULL, 12),
(9, 5, 34, NULL, 1, '2021-11-13 17:04:23', '2021-11-13 17:17:03', 'A+', 1977, NULL, 30),
(10, 4, 35, 'zxczfsdfsdfsdf', 0, '2021-11-13 17:04:46', '2021-11-13 17:04:46', 'C', 1961, NULL, 30),
(11, 4, 36, 'I got Great marks', 0, '2021-11-13 17:19:52', '2021-11-13 17:19:52', 'A+', 2016, NULL, 30),
(12, 93, 36, 'Top of the class', 0, '2021-11-13 17:20:16', '2021-11-13 17:20:16', 'A+', 2020, NULL, 50),
(13, 2, 2, NULL, 0, '2021-11-27 22:07:04', '2021-11-27 22:07:04', 'B-', 1966, NULL, 80),
(14, 5, 41, '', 0, '2021-11-27 22:13:38', '2021-11-27 22:13:38', 'B-', 1964, NULL, 30),
(15, 11, 2, NULL, 0, '2021-12-15 05:25:34', '2021-12-15 05:25:34', 'A+', 2003, NULL, 30),
(17, 6, 6, 'I am fantastic at this class!!!', 0, '2021-12-19 16:33:57', '2021-12-21 16:06:29', 'C', 1965, NULL, 100),
(18, 4, 47, 'test', 0, '2021-12-25 04:00:07', '2021-12-25 04:00:07', 'A+', 2019, NULL, 40),
(20, 5, 48, NULL, 0, '2021-12-27 17:21:30', '2021-12-27 17:21:30', 'B-', NULL, NULL, 20);

--
-- Triggers `UserLessons`
--
DELIMITER $$
CREATE TRIGGER `userlessons_after_insert` AFTER INSERT ON `UserLessons` FOR EACH ROW BEGIN

		DECLARE id1 INT;
	DECLARE avg_rate1 FLOAT DEFAULT NULL;
	DECLARE lessonId1 INT;
	DECLARE finished INTEGER DEFAULT 0;
	DECLARE rateOverallsId INT   DEFAULT NULL;

	DECLARE Get_cur CURSOR
	FOR SELECT u.id , ul.lessonId , ro.avg_rate , ro.id as rateOverallsId  FROM Users  AS u INNER JOIN UserLessons ul ON ul.userId = u.id  LEFT JOIN RateOveralls AS ro ON u.id = ro.tutorId ;

	DECLARE CONTINUE HANDLER
	FOR NOT FOUND SET finished = 1;

	OPEN Get_cur;

	go1: LOOP

		FETCH Get_cur INTO id1 , lessonId1, avg_rate1 , rateOverallsId;

		IF finished = 1 THEN
			LEAVE go1;
		END IF;

		IF (rateOverallsId IS NULL) THEN
			INSERT INTO RateOveralls (avg_rate , tutorId, lessonId) VALUES(0 , id1, lessonId1);
		END IF;

	END LOOP go1;

	CLOSE Get_cur;

END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `UserNotifications`
--

CREATE TABLE `UserNotifications` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `notificationId` int(11) DEFAULT NULL,
  `view` tinyint(1) DEFAULT NULL,
  `viewDate` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `UserRoles`
--

CREATE TABLE `UserRoles` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `UserRoles`
--

INSERT INTO `UserRoles` (`id`, `userId`, `roleId`) VALUES
(1, 1, 2),
(2, 1, 1),
(3, 2, 2),
(4, 3, 2),
(5, 4, 2),
(6, 5, 3),
(7, 6, 2),
(8, 7, 2),
(9, 8, 3),
(10, 9, 2),
(11, 10, 2),
(12, 11, 3),
(13, 12, 2),
(14, 13, 3),
(15, 14, 3),
(16, 15, 2),
(17, 16, 2),
(18, 17, 3),
(19, 18, 3),
(20, 19, 3),
(21, 20, 3),
(22, 21, 3),
(23, 22, 2),
(24, 23, 3),
(25, 24, 3),
(26, 25, 2),
(27, 26, 2),
(28, 27, 3),
(29, 28, 2),
(30, 29, 3),
(31, 30, 2),
(32, 31, 3),
(33, 32, 3),
(34, 33, 3),
(35, 34, 2),
(36, 35, 2),
(37, 36, 2),
(38, 37, 3),
(39, 38, 2),
(40, 39, 2),
(41, 40, 2),
(42, 2, 1),
(43, 41, 2),
(44, 42, 2),
(45, 43, 3),
(46, 44, 3),
(47, 45, 2),
(48, 46, 3),
(49, 47, 2),
(50, 48, 2);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `emailConfirmCode` varchar(128) DEFAULT NULL,
  `emailConfirmed` tinyint(1) DEFAULT NULL,
  `resetPasswordCode` varchar(128) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `lastName` varchar(128) DEFAULT NULL,
  `acceptStatus` int(11) DEFAULT NULL,
  `headline` text DEFAULT NULL,
  `bioMore` text DEFAULT NULL,
  `fileId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `program` varchar(255) DEFAULT NULL,
  `transcript_fileId` varchar(255) DEFAULT NULL,
  `training_method` int(11) DEFAULT NULL,
  `disable` tinyint(1) NOT NULL DEFAULT 0,
  `deleted` tinyint(1) DEFAULT NULL,
  `genderId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `email`, `password`, `emailConfirmCode`, `emailConfirmed`, `resetPasswordCode`, `name`, `lastName`, `acceptStatus`, `headline`, `bioMore`, `fileId`, `createdAt`, `updatedAt`, `program`, `transcript_fileId`, `training_method`, `disable`, `deleted`, `genderId`) VALUES
(1, 'mohammad.roshanfekr@hotmail.com', '$2a$08$j6hFJym52TMQKkhRHFQ6EueU6W7Ni9f6L8PrlEqqKEB49EifZGLMa', 'AXanw8U7Xx4ZZvthXpYqAUCanVZ1J19pPn2Vw22rnh8bsW4AmkOCBX2hW8BCuQpTbK6RGHowDsT2FJ7VtQ1fCHjjKrXgnQTiJeFOzOYkFI8Yztxxt9tSDgb3ReN90wbK', 1, NULL, 'Mohammad Ali', 'Roshanfekr', NULL, 'Software developer', 'Software developer         fkkjgkjghjkhg kjghjkg jkg gjk\n\nse f\nsadf\n asd\nf\nasdf \nas\nd f\nasdf\n as\ndf\na\ndf \nadf\nas\ndf asda sdasda\nsd \nasd\n a\ns d\nasdasda sdasdasdas a dasdasda sdasdasdas a dasdasda sdasdasdas a dasdasda sdasdasdas a dasdasda sdasdasdas a dasdasda sdasdasdas a dasdasda sdasdasdas a dasdasda sdasdasdas a dasdasda sdasdasdas a dasdasda sdasdasdas a dasdasda sdasdasdas a dasdasda sdasdasdas a dasdasda sdasdasdas a dasdasda sdasdasdas a dasdasda sdasdasdas a dasdasda sdasdasdas a dasdasda sdasdasdas a dasdasda sdasdasdas a d\nasd f', 21, '2021-10-10 06:54:44', '2021-12-25 21:44:19', NULL, '22', 1, 0, NULL, NULL),
(2, 'sajjad_aftabi@yahoo.com', '$2a$08$QfUyaG8.8Xtw6KUb5Qcx.eK8KXwkMMGsa1RltHMmAQEXab6kT/cJq', '3n64xiBiJtwlJ3FYkfU4D2uiIuaGaXcOXp3CnwZm941uwBlvBpcjAdf2hEtC59keclKCpNLa08aOEsIgQdXalljOnL4PZ9s6QDXkfRL0ZkpqYyn3vgVWzA9FGn8FA3Yc', 1, 'ToDooM2oUw0U2nW51ckCQEDcmYqG6CcUsQR9LfZ9BHYxT8tcZKuhplX5yiUqYL6iPW0ADJEu2raQrXJVzpFMSjmwSmh6wyej2rxIlf7yBRY2yftrt2VWvkFoLmJGvftU', 'Sajjad', 'Aftabi', NULL, 'vvsvsd', 'sbdbdv', 36, '2021-10-10 23:02:39', '2021-12-27 17:44:21', NULL, NULL, 1, 0, NULL, NULL),
(3, 'mahdi.1812@gmail.com', '$2a$08$wHALHq3jQRNfK2aOd5DGyeP4N5FHiKBsde77Np/8I37h/vlRuRw2u', 'iKTCWlCjEExF3bYaqjSQipLViZL3EhuxfwhHDFEFij0fgDWH0lSVFFrGxPDvfGuOmPZ8aCN3pkF49PBeeK1ZjoAelJKZE9DMEWRMXcgi3ce4NufnYBexVR4ifdgSg1lr', 0, NULL, 'seyed mahdi', 'm', NULL, 'dev', 'developer', 7, '2021-10-11 18:56:26', '2021-10-15 10:33:26', NULL, NULL, NULL, 0, NULL, NULL),
(4, 'adnanhafeez@cmail.carleton.ca', '$2a$08$xojqgAvTDMwZX8PqBm98uOjyYvz5ekxHOK000hMEmWQXhcfxj/FJm', 'lqNeeTsBY0ZJVHERAm5WjDhsWDMru37Irg8rJpOXqY162fG1g6XoDTpPjzJPpD9T9iRQ8EL5fiJR0sRkwYdG1uOl1ue5xPIGqPABOq3HZSnIHPCAtUrOIV5CmReXnfYi', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-10-11 23:12:15', '2021-10-11 23:12:15', NULL, NULL, NULL, 0, NULL, NULL),
(5, 'testemail@carleton.ca', '$2a$08$3HikculJbCtuscNvusytHuYiZQcU1XAELqsEhWzhE8W9RBjI1RGSq', '3WPsjQyvmiXoDPMkgjVac2yRAPRtJrIgsbP2yTqYA3PtKYfLfz5oBjVlmeZjPoHEiZwasx17AgfJuduKfUpRDs1qXB3kxYufIaWPKEPNsgpYAtCl9K3FMAAY66OI36C0', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-10-12 15:09:48', '2021-10-12 15:09:48', NULL, NULL, NULL, 0, NULL, NULL),
(6, 'arsalansyed004@gmail.com', '$2a$08$d5ylhdgpe1YQ5uC2W2EuYeB6XyPBuIRC50eCvupfw.tW9faqKdIP6', 'MkFq01wW0gzvwMwAQTAPWPKfd7L3mgPkBpaQurY0WoDDyBLIYMp2HCzKz8Yn3DVVSvsFXO5wpFnvQ6vGYkq31Cc1EZumkuto4q2OFutYq4EclAGhY9o1WUyo8LLgrDL3', 0, NULL, 'arsalan', 'syed', NULL, 'the best eva', 'a cool guy', 34, '2021-10-12 22:15:11', '2021-12-19 16:38:24', NULL, NULL, 3, 0, NULL, NULL),
(7, 'arsalansyed04@gmail.com', '$2a$08$H5icuqr4wml21rNUUA4SD.fifnAgV98/2pD47pUXJrW1HVOPFeEc2', 'TP6jfk5vr85NjeX09ASnvea39icm2kthr4pn4VuDEQl0Dr4LANwyhNfU9wH0fA88se2YvclTz6ewr1rm4w0ayRXB1heacGqEkbq2CdLCUdV7c6YSsPHmlJhgAPWinHDm', 0, NULL, 'lala', 'lala', NULL, 'the person', 'the person', 8, '2021-10-18 14:24:57', '2021-10-18 14:27:31', NULL, NULL, NULL, 0, NULL, NULL),
(8, 'asdfasdfsadf@gmail.com', '$2a$08$slNE28FWAcExFnbW6v9uc..CrZnmSyoQ0/6JF46yR9S9TciLD.0MO', 'hG6kKaOfOX0TChmyY4avPTiPCSZBae0Ma3XGlKPzD1Fd9ET6ozXi0hGnmmQD9dMEBeEkhucZaPJpD14Td0rGtyopHz8MS8uh2hZuShwTYXI18zqDaeJcKIaGR3YPfHzt', 0, NULL, 'sdfasdf', 'sdafasdfdfasd', NULL, NULL, NULL, NULL, '2021-10-18 14:54:08', '2021-10-18 14:54:32', NULL, NULL, NULL, 0, NULL, NULL),
(9, 'asdfasdf@gmail.com', '$2a$08$OvmbKarMwU1U4kDNkjbYg.pfRjqf1PwFPlsOgNPi6PrN/SuaEzyXu', 'LGfAiykdyJIXBTWcKp1Q9uvJjn6GGIrzQ4aMeMhtN2pwbiEaUbTufUHaTvwq9sl4a3ZYH9dANuHcB9vO5gSVeSc2YZ7EXofDx4lA1tqnbHHvT0wNq2XHutMYKpa5OxZX', 0, NULL, 'asdfas', 'asdfasdf', NULL, 'asdfasdf', 'asdfasdf', 11, '2021-10-18 15:28:11', '2021-10-18 15:30:05', NULL, NULL, NULL, 0, NULL, NULL),
(10, '123123123@gmail.com', '$2a$08$C1ERhKwkmfITuyKUbVv4LOwRppE7xHx1f0PFLRqh7Zn8uvPXl2D5.', 'PBJFj46spNVtly2zaO7YLSYDWvwfgw9So0XPoVV8z3eIx55UTycIX5z8UgTiZC0GCmdUo8GQyJF6sgynNU9xgnT4htj8Gx8s2KKqFIG7WNYSwT4EVU1BHdWFFraCV8o8', 0, NULL, 'asdfasdf', 'asdfasdf', NULL, 'asdfasdfasdf', 'asdfasdfasdf', 14, '2021-10-21 14:09:22', '2021-10-21 14:13:08', NULL, NULL, NULL, 0, NULL, NULL),
(11, 'aftabis@myumanitoba.ca', '$2a$08$DQ14mDv4N5iC9sVAkSEqIek9b3OEMFhzLSeEPB7ahupGyrTMh/KIW', 'CYjknIAaQzlI2b80qBvlqkT4p6PKgdXTO3ZAVj8I8CaPqS5De2O3pEKLt4VIIWtud102ej97IyxLoI0iDjHIBo8clNyrJQLOl531vKjTXzusB1gNHsVAWq9J4lZkanXS', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-10-24 04:08:33', '2021-10-24 04:08:33', NULL, NULL, NULL, 0, NULL, NULL),
(12, 'af1tabis@myumanitoba.com', '$2a$08$OV97MCamM9XzYPEQjemJXu9rlxPztAbuErr80JknjZibzUyiawe.u', 'H4ocDbt6SCUZv8Hh52IJZiWYTMhJ1MCleBA9fW9Czi1jfFZ9TtfxtAR23NQnskkGUGfN88ybCUNrpDykT6PAJYIODDOPIwrWNjLLIUGOmnMLFMk8Q8lxcsoqL1t46MoA', 0, NULL, 'xxx', 'cccc', NULL, 'cc', 'c', 15, '2021-10-24 04:11:38', '2021-10-24 04:13:35', NULL, NULL, NULL, 0, NULL, NULL),
(13, 'm1@hotmail.com', '$2a$08$5RJ8chJ5Q/wH/a/9aYKOVOFioJvfENBMoHOxE872wEWyhdHpkvC3a', 'Zkx6VqWJ5fXjVbGdswjP51vi2J2eIZfteUwCgcNFi0roOOKH1LH7BXiynyrbtdjF1nPolJRgqIRVHPk1zbBdYB06HSNDp2I8jFNSJtzVObhZJxa4T7zT4Xr5Vs8GRszi', 0, NULL, 'erserfsd', 'sdfsdf', NULL, NULL, NULL, NULL, '2021-10-29 04:07:42', '2021-10-29 04:07:52', '', NULL, NULL, 0, NULL, NULL),
(14, 'm2@hotmail.com', '$2a$08$qAonb5ZjTYfzmn1ld9ymH.1yMyJ6H6l1yJSsxadvkmtVj6UqMQayW', 'EMaYiqF4660EbdH89NMKJwRBGASy0Dr7Ilq7AjMwyLl9ib8oeUoulJLGVHfAb3ezvQzI9Q4FRHHyi7kGNDoPHQ9y5npZpWX36TxqJs83miuZwJeO71l1NoldsPhGhBYK', 0, NULL, '', '', NULL, NULL, NULL, NULL, '2021-10-29 21:58:03', '2021-10-29 21:58:03', '', NULL, NULL, 0, NULL, NULL),
(15, 'm3@hotmail.com', '$2a$08$PlMJXcRQRiPv4mfvEnOk4.n.pnbHCBL8f.cxOmg6y.WAV8st1gn/a', 'iB71kbqQbPO2XqTqopfymoyt4okVjr8ba2Q76I9oeUZyhzP3cVt9Hq5CqeN4agU2iyolYXCYh9lasDVk4iz5hISefCsFNHodVPFTjjPiITuCNkYXvv1k0xUYWciGpyw9', 0, NULL, 'dddd', 'fsdfsdf', NULL, 'gdfgdfg', 'dfgdfgdfg', NULL, '2021-10-29 21:58:22', '2021-10-29 21:58:37', '', '18', 3, 0, NULL, NULL),
(16, 'af1t2abis@myumanitoba.com', '$2a$08$FwpgucEB/GwGeGSVKho1ae5Wn1otvIRZukstXKTUa1XPeOTN8vAIi', '0MceIKPxTS4BmLbbJmpaOXc6uUEv9NhcnRNPy868x8eg2nAmqN4rPvUUttLyka2WcoQL306PT63HXWeSVcYvTrbMlZ12c2RDAfAb6S9KpqFBLumoW5OVdM3siA38DhQU', 0, NULL, 'x', 'x', NULL, 'x', 'x', NULL, '2021-10-29 23:18:30', '2021-10-29 23:19:08', '', NULL, 3, 0, NULL, NULL),
(17, 'af11tabis@myumanitoba.com', '$2a$08$Kf0JVjBFFpA8eoI1y/WEMuHWg5ZvDNhJTb7MW0YA2wj2Z27laozou', '10AdmScDGj8naJC6BpTIywUNCAFXckRBORwkX0S4AmQknQiLdH0skNJbVWHhbBrQbngazB0gQ0hv73eSpgaq3Cf4nAJAz8KEvPsHRtQtQcJlTgiVRoWaQygLRY1yla7Q', 0, NULL, '', '', NULL, NULL, NULL, NULL, '2021-10-29 23:20:59', '2021-10-29 23:20:59', '', NULL, NULL, 0, NULL, NULL),
(18, 'm4@hotmail.com', '$2a$08$ypA5rteO4isdeBI5qNB2Ael1ima6p.e4nhnt6Effw5cbDLuwthsc.', 'WZrfkQh0yxoJnB4w8TyQ7UjKdOJDpnLiP0VmPKQ4FPAxaKGaNFpP6fVfE97EBon1W0t7XFaiY4eWupejgntXRsv9lJFGFuoegXfkI1pGMgiUjTHap3nODTF4kK2zkIfq', 0, NULL, '', '', NULL, NULL, NULL, NULL, '2021-10-30 13:04:37', '2021-10-30 13:04:37', '', NULL, NULL, 0, NULL, NULL),
(19, 'm6@hotmail.com', '$2a$08$DHu8CiUkijtdOwul2oLDrOIcnXOsii0rPo7BOim6xPlHOo.oJp1lG', 'VS1e0NG8eE5zYvr8ocWyf5ig7m8ieh4pvA3CqoPPWvPpZ5kp8f8to6XUKz7qnFRXgkPByZwFLNQNtILn8RltKmme4vXHn2pOh2BavIGje6AiU1CAjvr9bIM3hszbpdsp', 0, NULL, '', '', NULL, NULL, NULL, NULL, '2021-10-30 13:05:19', '2021-10-30 13:05:19', '', NULL, NULL, 0, NULL, NULL),
(20, 'm7@hotmail.com', '$2a$08$1b9WLoJbadRnhdIsTQqYWeKbztS1W7rjqxR8UukwpJir6.61CNB36', 'JYxLWAL6GcwUHZO4RG7zTyLJAsL0xqthIHB13zvzGE5QMziOdDeO2GNGuBiaSpkWV8799NXYndhGPDjtPxPPjzP2zOVMIm5ApBddDHRwkDvLEue5iNijzESceI1btbcT', 0, NULL, '', '', NULL, NULL, NULL, NULL, '2021-10-30 13:06:43', '2021-10-30 13:06:43', '', NULL, NULL, 0, NULL, NULL),
(21, 'm9@hotmail.com', '$2a$08$JTjee0uLXTgbZLpBqaTToONXiXvTfXfdoGKsVXhClhxD4zmqVPR8e', 'erVYK3ce6A3Em8buod3fiyCeWLPZevjGW5wuZKqghhAPRLAotKEk5pRxWH7UHvuXeeSyFRrAV4nHsFGE8m5Hs0yR3s3UwNOjX0q4RwyUEE7g14p0cfVtaM1ZjTSuPTLj', 0, NULL, 'asdasd', 'asdasdddd', NULL, NULL, NULL, 19, '2021-10-30 13:09:53', '2021-10-30 13:10:10', '', NULL, NULL, 0, NULL, NULL),
(22, 'af111tabis@myumanitoba.com', '$2a$08$UOvEch.0Fb/sp8tfSZuUlO8UIlrgWptXa8lUi8KNh6bt2vqPjYaRi', 'jy2s08JU2MX4zBPzgeyOuFMAgKHNTEMEd3OnpFEEEv6HfKsCewV5ynDlcLjhyWKmtLujyCCsSvY7NWMNQ1uwl85F0rCmKvVkO0jELQCv5yoSVkGSkDkEDKvQDqNNvIsF', 0, NULL, 'x', 'w', NULL, 'w', 'w', NULL, '2021-10-30 17:01:03', '2021-10-30 17:03:10', '', NULL, 3, 0, NULL, NULL),
(23, 'sasdafda@gmail.com', '$2a$08$PRjObptB8a1opzoL0.TzDeJAl4yLnBcq0CdlVVxnlhrb6hFP3HKTS', 'LxeeOa49V6mOiG7Ul5dejrbyyzXCx3heyn94bNxuqMiJwQl8YLWDr6tnpzsZgJRFw2Y9jbLUYOEYNxtNLHyHZ0khpVYgLolG5bxA1aJgc0IbtlQXvs5PvTpKWAnoraUH', 0, NULL, 'l', 'w', NULL, NULL, NULL, NULL, '2021-11-01 19:26:05', '2021-11-01 19:28:23', '', NULL, NULL, 0, NULL, NULL),
(24, 'm21@hotmail.com', '$2a$08$WdJJ1Y3dds7LvUI5G37t.Oe031OJE7EIUxQeCrQDTWCmSegcvQape', '2KxMjwIF96wxQ6WgD5nAlcs19HsjXENbi3gJa1zWKabt7rkkGVw86eKhDZkRZM1McXX8xjlzheCMAjELMBy8Y2nTulVqN1HTGVxMYDLFvPkheDjDPgE6hqDTmuwLKZ1s', 0, NULL, 'asdasd', 'sss', NULL, NULL, NULL, NULL, '2021-11-01 19:26:12', '2021-11-01 19:28:30', '', NULL, NULL, 0, NULL, NULL),
(25, 'sadddsa@gmail.com', '$2a$08$KQW/EX5YSQiwb3ziLP3BZ.zLcEIa6iY6N4PmRqvxogVw21d7qfoQC', 'xcm6BxhDANZV1TMmkIcxnGsdl7nnSfRVa1RR8KfcgKt8D4HB8XBpqqBLzV4ND8dNqrkF5pZ42vGaSRLuCr3YsDVIRaGMnsoRArkQRsPHAO0SUvKbogq5s8Fe88Uhf0q3', 0, NULL, '', '', 1, NULL, NULL, NULL, '2021-11-01 19:36:17', '2021-11-13 17:16:30', '', NULL, NULL, 0, NULL, NULL),
(26, 'm23@hotmail.com', '$2a$08$uoOspbB.C7joGSri08022uOIUM5yI9ftHvkb1zAKvQfGiFFu/8NF6', '4YbHudmoKBhaf2RwU0lanoklMv7zzeXeFImPq7PvtbZsBpgZbzbjGsE3JuBR5wmKYdJRZabEYsfwsMaRKbAmMTOtseB5Z4WLfQZatzjWULORMgFYkiZz1RFm1FDozO18', 0, NULL, '.k;kl', 'jkllk', NULL, 'kkljhlkhj', 'lkjlkjlj', NULL, '2021-11-01 19:36:28', '2021-11-01 19:41:18', '', NULL, 3, 0, NULL, NULL),
(27, 'dasda@gmail.com', '$2a$08$EXEkzKNoK0UgLrZSm0XeYOGTapnNzQCQhQgODX6Rg359ICQX7b0qa', 'm4AQQd3HQprgKZeCD1Zfex1mgoTonL60WRCVOuiVeJQLz2rJjsK4BOxbSyssleaWI1V24D5G0WBx4sqWDIH5zZU7E3c4Lrq0TdJFpEYX1o3RRWVnxHy3MCJVRADOSy1w', 0, NULL, '', '', NULL, NULL, NULL, NULL, '2021-11-01 19:38:43', '2021-11-01 19:38:43', '', NULL, NULL, 0, NULL, NULL),
(28, 'dadfdasdfa@gmail.com', '$2a$08$JWRO4zFdvjLESeHilfbZ6uxloRJYn7W2XCGy/BtAL.8p1jgEziObS', 'TKYcdWSB8pir4C5Hl9YpcbyEOlPQqZWs6FHH7BRtug2hL3p5tvxnF4ghg8l6vkKPPeCZ5rLYxPBqvl8RsEgCzu2P3KNOGyfWJEcqrxYIOshKLr0VSpsAgPV04OO9hbb9', 0, NULL, 'cs', 'sds', NULL, 'sds', 'dsd', NULL, '2021-11-01 19:39:02', '2021-11-01 19:41:25', '', NULL, 3, 0, NULL, NULL),
(29, 't1@hotmail.com', '$2a$08$uhXO8INBdyM1D0qxODrenuA/34.uDDNb4/IvQbrO8bSwwehovJDVa', 'hMjtc3koHKbVX2NDRky4nslEdt9kG6086fztJemszf3799Y6Fte4xl04sJ22CQRtrCo4MGlhj19x85AksXX5qgbdEyV9mggKvznqsgROi5soPVF02RDPg0RLb9AZQrpz', 0, NULL, 'sdsdsd', 'sdasdasd', NULL, NULL, NULL, 20, '2021-11-06 21:28:09', '2021-11-06 21:28:40', '', NULL, NULL, 0, NULL, NULL),
(30, 'ssssssss@yahoo.com', '$2a$08$Rzp1MntLxkMbIuKi4JqTweC.IGDuLmm6hefopiOXjZr.wd6LwrtHW', 'ypD4YaXX7dkX9ZRdOsxlzxDluvopf6DFNBXEkWJdKGad2KmvBbFVQeTHdTvXpKCx9IuerNMI31DzBaNqPXaAUIdE1oUUQuJnBKXqtjKhdC2Q0VwnIbQzhApjrHTLQApB', 0, NULL, 'mnv', 'vbnv', NULL, 'vn', 'vb', NULL, '2021-11-09 19:14:54', '2021-11-09 19:15:22', '', NULL, 2, 0, NULL, NULL),
(31, 'dasdfasf@yahoo.com', '$2a$08$YzfhjbPywF4MmS/MRuIjpOowNmah9XwQTTK7CGLYXxahVrgRpoP/i', 'KrNZ5cYHy6LxNECAFafvsOoKOd7FNQleERcCp2uUcPI50nC7Y5OF4ScTzzSKthFyCuLz8kaYbLS75vHOcyBRmCXkIKRIP2PULFZJV66mmoUKAPg2DkVMMYo3h2STZw9v', 0, NULL, 'ghdf', 'gdf', NULL, NULL, NULL, NULL, '2021-11-09 19:17:16', '2021-11-09 19:17:24', 'fgdfg', NULL, NULL, 0, NULL, NULL),
(32, 'af1ta11bis@myumanitoba.com', '$2a$08$0cjACosMNNOC8vGyc7DQTeENlpjnncn6WXMfkdgZ.oNkYaf/sZakG', 'KE2zbrzPcvbq5XJWsUNA0lAqJR8Lqu7H9nZ2loePCyrnYBrYuzzXIK5fh58jkVQmtI2NyOeXbUJMlkowkNB4TYfpCJ5XMNhEIY8q8Nx1Js0rIcfQJUNqGtSa1lDJ88RU', 0, NULL, 'asa', 'scscs', NULL, NULL, NULL, 23, '2021-11-13 16:56:12', '2021-11-13 16:56:41', 'cscsscsdv', NULL, NULL, 0, NULL, NULL),
(33, 'st1@hotmail.com', '$2a$08$9FTb1N6r6VhNF1PkkTNAauhbbaQ3bq6YgkdO5WdXSFCYFMAo6RLya', 'XMbBWLdo6m9DVvhmuYLDfjkwu3ry0BuNdEMgyr6p5pZ6I3NzmtUmDDbtKFdlry2CSIJgyUlYKNwkB7o0oGF5J0N8rB1r4dkSfhWJJd5WKOswQaxTJepnrwiQbY6WTPf3', 0, NULL, 'asdasdasd', 'sdfsdfsdf', 1, NULL, NULL, 24, '2021-11-13 16:56:27', '2021-11-13 17:15:26', 'sdasdasd', NULL, NULL, 0, NULL, NULL),
(34, 'af1t111abis@myumanitoba.com', '$2a$08$fWyHoEbc66nxZELBq9UWsu5GkN5wpjRyQsvxEA3OOp91KeYTjapRC', 'yWaC2BeSFpwZF4UTYrLiPy9A3L3EmEcZ4hCwUP9gzn4UEoIuUZKzBmoX2LLhJqWYWBZJQoFqUntZYWZNaUsK12vbVMERy26AEoimR2hkoumqJPDTRiqzVgwXefLvuiMv', 0, NULL, 'xcds111', 'cscs', NULL, 'cscsa', 'cscsacad', 29, '2021-11-13 16:57:58', '2021-11-13 17:03:09', '', NULL, 3, 0, NULL, NULL),
(35, 'tu@hotmail.com', '$2a$08$dxN03ULNWR7MrRb7bzuGPuoapHwZHBkPlrp.brkvOTaXbYHoNu.va', 'mNsGszWwalq3UA2pfuhgQlWfqc2QeCdjGFTv5yz9IRnw8oRZX4Z2epGky47D8EMF9JgOKB9uAYEUmjTYoVx4Kp7WG2zjI5K1rOpPoPFRSZkAUyGyCP8XYNaWTBqj4fZm', 0, NULL, 'asdasd', 'sdfsdf', NULL, 'fgdfgdfg', 'dfgdfg', 28, '2021-11-13 16:58:10', '2021-11-13 17:06:19', '', '31', 2, 0, NULL, NULL),
(36, 'af11111tabis@myumanitoba.com', '$2a$08$2DZS7Z9ulBR3d2QMqDJZregv1.pyNmbn5L7rtg00vMHxYwi9omkN2', 'TrgwVNtQNJG1qKHykk5jCGreQviuhOKQSljGCwXAUDYncNN1eyNmVcdgMTWbAlrdhkyW5qNM43wbPTzosaIJwH0C1oWo8j0KMA0JrdkYQangR1guRjEh63IuLWy2KNtd', 0, NULL, 'Sajjad', 'Aftabi', NULL, '3rd year Science Student', 'I am currently teaching all subjects', NULL, '2021-11-13 17:18:52', '2021-11-13 17:19:30', '', NULL, 3, 0, NULL, NULL),
(37, 'aftabis111@myumanitoba.ca', '$2a$08$OHwY.k2L5Pma3pPRpNcUs.pq.Bk8o3re2MpTFiwMkq1ALgyjs8yuS', 'zW1gIGZDqPCR5jCMVUNmkj1o9oI6ynNNkZGu32YtVbWmw7xbArqJJm7cLQUPhKGIq2HVTVH2Oz2ESw6JufWr7CSl0DQaH0x2LhJniCXPRJfjUPudcHgbxsdwpfo0R0FZ', 0, NULL, 'csc', 'vscs', NULL, NULL, NULL, NULL, '2021-11-17 01:50:39', '2021-11-17 01:50:54', 'cvsv', NULL, NULL, 0, NULL, NULL),
(38, 'm1112@hotmail.com', '$2a$08$NsgDY6I93eMGGuWCiTkBQumOH/d1cJhEgeFipl/tjK3lTx/4018gi', 'dlhORq2E6ZZjZwTkB4ITwUfPEfxXK6GBsYSdj1uMKYromL6M4rTu64EUNHxQRXdXQb5E1N1ogJbPVL5mzRoNShcdPJzkct9rBVZ94npeAIvY2x9rQzyqWQ9AzaXiD9XL', 0, NULL, 'fdgdfgdf', 'gdghfghfg', NULL, 'dsfsdfs', 'dfgd fg dg dfg', NULL, '2021-11-19 01:57:46', '2021-11-19 01:58:02', '', NULL, 1, 0, NULL, NULL),
(39, 'mahdi.14263@yahoo.com', '$2a$08$FZVBZIn2Pz/yzDrQ0XaE3eJ7gyIXYhb3aXrJ.N8d2UTPdTO0TiwGK', 's4TaOqNy6C8wxdDtM29L4oAwGOKbO02aKjtA02qHYICa1UJI45FCcbhMuVb1wlb4K67YEXUqMK25Ps5QoGB2refTxhuDXtZ3uEkAe4bxUNsfJFx4y5SLZalnKO4HNJ7P', 0, NULL, '', '', NULL, NULL, NULL, NULL, '2021-11-20 06:53:26', '2021-11-20 06:53:26', '', NULL, NULL, 0, NULL, NULL),
(40, 'adsffd@ya.com', '$2a$08$y6SJgAvXiTL3qdt181MJkuBKmnWgE7LK.fghzGQsh8GeduuOBdKSG', 'aCHyiiIJhVeWxc48Ak0dfks2lpEqqzD1f2ekcYtxhQncJMQ88b1wm7UUVD24GgzZKYV8K75LjF2EVQukjZEnsXsHszyZ956oEPaYrA9N6yyDUPP5zHhlk4DJkxp6STPC', 0, NULL, '', '', NULL, NULL, NULL, 33, '2021-11-22 08:11:26', '2021-11-22 08:13:00', '', NULL, NULL, 0, NULL, NULL),
(41, 'sajjad_afccccctabi@yahoo.com', '$2a$08$e3wrGIztfHtkls3zoNFX7O4.TRj7DAu9Wf4zsf/IwGmOkcZJlF9Wu', 'nV8POMotjXLhL5gva9d1S6a676aMc4KY2yHyXES3yTP1vMLJhUHgLAu7rDhuCJw1uACTZcUPZQeQjRP1I73JhFQtx6JPWUqQp49iZH7FM12S4fy4wm1P658k1vkBngd5', 0, NULL, 'cv', 'cccc', NULL, 'cc', 'cvcv', NULL, '2021-11-27 22:12:53', '2021-11-27 22:13:07', '', NULL, 1, 0, NULL, NULL),
(42, 'sajjad_acccccftabi@yahoo.com', '$2a$08$4Dya9/91aOccGppCfcZ8ResmsD7DKtNwQ9ijkcll1cVDaX08fJfDa', 'jd4xIU0GesRnXMyCf5tC1Sym0hNpTuq5QwEnLtmftjF7L65HKPtRXtgk3xNBd6dBYRHqAOxsn20G4XV3wOLd1OpzOBCPRXmfjj9YHOckitsw5YCZfhvqCuIbKeEZiDhG', 0, NULL, 'vxzvzv', 'vxcvx', NULL, NULL, NULL, NULL, '2021-11-27 23:02:54', '2021-11-27 23:03:02', 'vxcv', NULL, NULL, 0, NULL, NULL),
(43, 'sadasf@yahoo.com', '$2a$08$yj4X5KYNqekqVFNfNJaLwOpESUtvKStuHgbmYyWe6ihjwFrSzVAKG', 'B1SI2QaQjjXdGa23YHek0mgbr8dGrLB8PhcfzChUg3zoThGrooSiVKHV13FpZaCjm2SWqMXLQlaqyVHuyS6RkteNbwtByc5bAa7BStjcISZ3iddbJbzeqbyDKmDL5t8f', 0, NULL, 'Ali', 'Alizade', NULL, NULL, NULL, NULL, '2021-12-02 18:55:32', '2021-12-02 18:55:50', 'Language', NULL, NULL, 0, NULL, NULL),
(44, 'sajjad@yahoo.com', '$2a$08$H394vcmMv9GYrImLrRImmeilgmT/9JJQJLT0iIuOH8AzpRfDveUue', 'KvRX9x7WVdWqS3t6Vl5XtmdrL3SNz7Obmmb9Rxl0eBaiFn3rQbDiXRzb5Hlb1kFPoRtaeNMpJpN9s3ggRNLSfmRkNBnxUEtvtMlVfMnkftdTIw0kGxzAoqppXXgIVplC', 0, NULL, 'Milad', 'AAAA', NULL, NULL, NULL, NULL, '2021-12-11 17:01:41', '2021-12-11 17:02:07', 'Physics Student', NULL, NULL, 0, NULL, NULL),
(45, 'gsgsdg@hfhd.com', '$2a$08$b2ScnrZ3l.B/zWRuLr6sae5.qoIlLB9lGzSiMY0P5HuCUcf274pM2', '9HVGmCuPLP9ebgicY2GvpAA9pGZM6ClXupiQE4jGvDb78XsQcaZWVpGJA544BWqq67gwASDz2UcWFmHtwzDeHKsDJNwnvEccTx7aAgJyNi8V4wbFqWegBxpOprxMbieZ', 0, NULL, '', '', NULL, NULL, NULL, NULL, '2021-12-13 17:18:12', '2021-12-13 17:18:12', '', NULL, NULL, 0, NULL, NULL),
(46, 'eduardo@leadtowin.ca', '$2a$08$CXOCmUATe6Gj2GExI1l6QOqYHye4.gd2hIRdcWz3EfZ.yPKuewOPe', 'bfOM6LxSkbYurRuCxZamNgRliMgLRIiOByhyvGraCtJrNWLPGq2e13IOasOU2ye16v88bM6GY59JHi7JlTbn0tsVmzrPG0XwT56zd8CV7AzPiT0IJGv5cLBDyAC8qQFk', 1, NULL, '', '', NULL, NULL, NULL, NULL, '2021-12-20 16:12:09', '2021-12-20 16:12:39', '', NULL, NULL, 0, NULL, NULL),
(47, 'ali.zahedi.amiri@hotmail.com', '$2a$08$kLCh9CSh9Et8Nl4/iBJy..BFM0EjBZWjZpI5G0xWaI6qOPS1NfOhy', '9Q4QgH1j1qrUHxMmERNZHMZIETIUO6SvAGOWzfZigeeRw7WeGrcG0EHCT23miFixVP1pMoPLuHKKU94c2y5k6AU3nxdyRC6wyW6yvNjK5LpiKhj2ThsJ29ULCrEVfGjz', 0, NULL, 'test', 'test', NULL, 'test', 'test test test', NULL, '2021-12-25 03:36:45', '2021-12-25 03:59:33', '', NULL, 3, 0, NULL, NULL),
(48, 'sajjad.aftabi@gmail.com', '$2a$08$V6eW.Ky5B87tCusUVWqEY.TsNm8Bq9w2fp8uu9nlsgE3xPhP6t1A2', 'ltKuajYkMCKHilQWsZMcDhznhLGnCnFrtuxOjbcQwm9de9ZZeFI8AbpxQWAJTh2Ngg25HWEeD0zWwXiLpOZUIFhjOxa3FsKP2AaibcmDJz4Tp8gF7FxwWKOasnKvE3cm', 1, NULL, 'Milad', 'Aftabi', NULL, '2nd year Math', 'iiiiiiii', 41, '2021-12-27 16:49:23', '2021-12-27 17:21:54', 'Math student', NULL, 3, 0, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Certificates`
--
ALTER TABLE `Certificates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkey_certification_user1` (`userId`),
  ADD KEY `fkey_certification_file1` (`fileId`);

--
-- Indexes for table `ChangeLogs`
--
ALTER TABLE `ChangeLogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkey_changelog_user` (`userId`);

--
-- Indexes for table `Communications`
--
ALTER TABLE `Communications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkey_communication_user` (`userId`);

--
-- Indexes for table `Educations`
--
ALTER TABLE `Educations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkey_educations_user` (`userId`);

--
-- Indexes for table `Experiences`
--
ALTER TABLE `Experiences`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkey_experience_user` (`userId`);

--
-- Indexes for table `FAQs`
--
ALTER TABLE `FAQs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Files`
--
ALTER TABLE `Files`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Gender`
--
ALTER TABLE `Gender`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Languages`
--
ALTER TABLE `Languages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Lessons`
--
ALTER TABLE `Lessons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Messages`
--
ALTER TABLE `Messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `MyLessons`
--
ALTER TABLE `MyLessons`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkey_MyLessons_users` (`userId`),
  ADD KEY `fkey_MyLessons_tutorUserId` (`tutorUserId`),
  ADD KEY `fkey_MyLessons_lessonId` (`lessonId`);

--
-- Indexes for table `Notifications`
--
ALTER TABLE `Notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `RateOveralls`
--
ALTER TABLE `RateOveralls`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkey_rateoveralls_user` (`tutorId`);

--
-- Indexes for table `Rates`
--
ALTER TABLE `Rates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkey_rates_users` (`tutor_userId`),
  ADD KEY `fkey_rates_users2` (`stu_userId`);

--
-- Indexes for table `Requests`
--
ALTER TABLE `Requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkey_requests_user_senderId` (`senderId`),
  ADD KEY `fkey_requests_user_receiverId` (`receiverId`);

--
-- Indexes for table `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `TutorTimings`
--
ALTER TABLE `TutorTimings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkey_tutor-timing_users` (`userId`);

--
-- Indexes for table `Universities`
--
ALTER TABLE `Universities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `UserBlackLists`
--
ALTER TABLE `UserBlackLists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `UserLessons`
--
ALTER TABLE `UserLessons`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkey_userlesson_users` (`userId`),
  ADD KEY `fkey_userlessons_lessons` (`lessonId`);

--
-- Indexes for table `UserNotifications`
--
ALTER TABLE `UserNotifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkey_usernotification_user` (`userId`),
  ADD KEY `fkey_notification_userNotification` (`notificationId`);

--
-- Indexes for table `UserRoles`
--
ALTER TABLE `UserRoles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkey_userroles_user` (`userId`),
  ADD KEY `fkey_userroles_role` (`roleId`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkey_user_genderId` (`genderId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Certificates`
--
ALTER TABLE `Certificates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ChangeLogs`
--
ALTER TABLE `ChangeLogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Communications`
--
ALTER TABLE `Communications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `Educations`
--
ALTER TABLE `Educations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `Experiences`
--
ALTER TABLE `Experiences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `FAQs`
--
ALTER TABLE `FAQs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Files`
--
ALTER TABLE `Files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `Gender`
--
ALTER TABLE `Gender`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Languages`
--
ALTER TABLE `Languages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=338;

--
-- AUTO_INCREMENT for table `Lessons`
--
ALTER TABLE `Lessons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1570;

--
-- AUTO_INCREMENT for table `Messages`
--
ALTER TABLE `Messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `MyLessons`
--
ALTER TABLE `MyLessons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `Notifications`
--
ALTER TABLE `Notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `RateOveralls`
--
ALTER TABLE `RateOveralls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `Rates`
--
ALTER TABLE `Rates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Requests`
--
ALTER TABLE `Requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `Roles`
--
ALTER TABLE `Roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `TutorTimings`
--
ALTER TABLE `TutorTimings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `Universities`
--
ALTER TABLE `Universities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `UserBlackLists`
--
ALTER TABLE `UserBlackLists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `UserLessons`
--
ALTER TABLE `UserLessons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `UserNotifications`
--
ALTER TABLE `UserNotifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `UserRoles`
--
ALTER TABLE `UserRoles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Certificates`
--
ALTER TABLE `Certificates`
  ADD CONSTRAINT `fkey_certification_file1` FOREIGN KEY (`fileId`) REFERENCES `Files` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fkey_certification_user1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ChangeLogs`
--
ALTER TABLE `ChangeLogs`
  ADD CONSTRAINT `fkey_changelog_user` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Communications`
--
ALTER TABLE `Communications`
  ADD CONSTRAINT `fkey_communication_user` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Educations`
--
ALTER TABLE `Educations`
  ADD CONSTRAINT `fkey_educations_user` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Experiences`
--
ALTER TABLE `Experiences`
  ADD CONSTRAINT `fkey_experience_user` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `MyLessons`
--
ALTER TABLE `MyLessons`
  ADD CONSTRAINT `fkey_MyLessons_lessonId` FOREIGN KEY (`lessonId`) REFERENCES `Lessons` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fkey_MyLessons_lessonsId` FOREIGN KEY (`lessonId`) REFERENCES `Lessons` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fkey_MyLessons_tutorUserId` FOREIGN KEY (`tutorUserId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fkey_MyLessons_users` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `RateOveralls`
--
ALTER TABLE `RateOveralls`
  ADD CONSTRAINT `fkey_rateoveralls_user` FOREIGN KEY (`tutorId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Rates`
--
ALTER TABLE `Rates`
  ADD CONSTRAINT `fkey_rates_users` FOREIGN KEY (`tutor_userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fkey_rates_users2` FOREIGN KEY (`stu_userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Requests`
--
ALTER TABLE `Requests`
  ADD CONSTRAINT `fkey_requests_user_receiverId` FOREIGN KEY (`receiverId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fkey_requests_user_senderId` FOREIGN KEY (`senderId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `TutorTimings`
--
ALTER TABLE `TutorTimings`
  ADD CONSTRAINT `fkey_tutor-timing_users` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `UserLessons`
--
ALTER TABLE `UserLessons`
  ADD CONSTRAINT `fkey_userlesson_users` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fkey_userlessons_lessons` FOREIGN KEY (`lessonId`) REFERENCES `Lessons` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `UserNotifications`
--
ALTER TABLE `UserNotifications`
  ADD CONSTRAINT `fkey_notification_userNotification` FOREIGN KEY (`notificationId`) REFERENCES `Notifications` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fkey_usernotification_user` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `UserRoles`
--
ALTER TABLE `UserRoles`
  ADD CONSTRAINT `fkey_userroles_role` FOREIGN KEY (`roleId`) REFERENCES `Roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fkey_userroles_user` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `fkey_user_genderId` FOREIGN KEY (`genderId`) REFERENCES `Gender` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
