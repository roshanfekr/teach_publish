-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.20-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             9.5.0.5315
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for tutorloo_teach
CREATE DATABASE IF NOT EXISTS `tutorloo_teach` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `tutorloo_teach`;

-- Dumping structure for table tutorloo_teach.certificates
CREATE TABLE IF NOT EXISTS `certificates` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `certName` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `startYear` int(11) DEFAULT NULL,
  `endYear` int(11) DEFAULT NULL,
  `fileId` int(11) DEFAULT NULL,
  `issuedby` varchar(255) DEFAULT NULL,
  `acceptStatus` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fkey_certification_user1` (`userId`),
  KEY `fkey_certification_file1` (`fileId`),
  CONSTRAINT `fkey_certification_file1` FOREIGN KEY (`fileId`) REFERENCES `files` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fkey_certification_user1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutorloo_teach.certificates: ~0 rows (approximately)
/*!40000 ALTER TABLE `certificates` DISABLE KEYS */;
/*!40000 ALTER TABLE `certificates` ENABLE KEYS */;

-- Dumping structure for table tutorloo_teach.changelogs
CREATE TABLE IF NOT EXISTS `changelogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fkey_changelog_user` (`userId`),
  CONSTRAINT `fkey_changelog_user` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutorloo_teach.changelogs: ~0 rows (approximately)
/*!40000 ALTER TABLE `changelogs` DISABLE KEYS */;
/*!40000 ALTER TABLE `changelogs` ENABLE KEYS */;

-- Dumping structure for table tutorloo_teach.communications
CREATE TABLE IF NOT EXISTS `communications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `accountId` varchar(128) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fkey_communication_user` (`userId`),
  CONSTRAINT `fkey_communication_user` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutorloo_teach.communications: ~0 rows (approximately)
/*!40000 ALTER TABLE `communications` DISABLE KEYS */;
INSERT INTO `communications` (`id`, `name`, `accountId`, `userId`, `createdAt`, `updatedAt`) VALUES
	(1, 'Skype', '@sadfsdfs', 1, '2021-10-18 21:12:11', '2021-10-18 21:12:11'),
	(2, 'Hangout', '@ffdfsdfsdf', 1, '2021-10-18 21:12:11', '2021-10-18 21:12:11');
/*!40000 ALTER TABLE `communications` ENABLE KEYS */;

-- Dumping structure for table tutorloo_teach.educations
CREATE TABLE IF NOT EXISTS `educations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `university` varchar(255) DEFAULT NULL,
  `degree` int(11) DEFAULT NULL,
  `speciality` varchar(255) DEFAULT NULL,
  `fileId` int(11) DEFAULT NULL,
  `startYear` int(11) DEFAULT NULL,
  `endYear` int(11) DEFAULT NULL,
  `acceptStatus` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fkey_educations_user` (`userId`),
  CONSTRAINT `fkey_educations_user` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutorloo_teach.educations: ~0 rows (approximately)
/*!40000 ALTER TABLE `educations` DISABLE KEYS */;
/*!40000 ALTER TABLE `educations` ENABLE KEYS */;

-- Dumping structure for table tutorloo_teach.experiences
CREATE TABLE IF NOT EXISTS `experiences` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `startYear` int(11) DEFAULT NULL,
  `endYear` int(11) DEFAULT NULL,
  `acceptStatus` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fkey_experience_user` (`userId`),
  CONSTRAINT `fkey_experience_user` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutorloo_teach.experiences: ~0 rows (approximately)
/*!40000 ALTER TABLE `experiences` DISABLE KEYS */;
/*!40000 ALTER TABLE `experiences` ENABLE KEYS */;

-- Dumping structure for table tutorloo_teach.files
CREATE TABLE IF NOT EXISTS `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(255) DEFAULT NULL,
  `ext` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutorloo_teach.files: ~0 rows (approximately)
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` (`id`, `path`, `ext`, `userId`, `createdAt`, `updatedAt`) VALUES
	(1, 'storage/tutor/1/avatar_1634591461374.jpg', '.jpg', 1, '2021-10-18 21:11:01', '2021-10-18 21:11:01');
/*!40000 ALTER TABLE `files` ENABLE KEYS */;

-- Dumping structure for table tutorloo_teach.lessons
CREATE TABLE IF NOT EXISTS `lessons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subject` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `isEnable` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1569 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutorloo_teach.lessons: ~1,568 rows (approximately)
/*!40000 ALTER TABLE `lessons` DISABLE KEYS */;
INSERT INTO `lessons` (`id`, `subject`, `code`, `isEnable`) VALUES
	(1, 'AERO 2001', 'AERO', 1),
	(2, 'AERO 3240', 'AERO', 1),
	(3, 'AERO 3700', 'AERO', 1),
	(4, 'AERO 4003', 'AERO', 1),
	(5, 'AERO 4302', 'AERO', 1),
	(6, 'AERO 4306', 'AERO', 1),
	(7, 'AERO 4402', 'AERO', 1),
	(8, 'AERO 4446', 'AERO', 1),
	(9, 'AERO 4540', 'AERO', 1),
	(10, 'AERO 4608', 'AERO', 1),
	(11, 'AERO 4842', 'AERO', 1),
	(12, 'AFRI 1001', 'AFRI', 1),
	(13, 'AFRI 2002', 'AFRI', 1),
	(14, 'AFRI 2006', 'AFRI', 1),
	(15, 'AFRI 3001', 'AFRI', 1),
	(16, 'AFRI 3003', 'AFRI', 1),
	(17, 'AFRI 3609', 'AFRI', 1),
	(18, 'AFRI 3900', 'AFRI', 1),
	(19, 'AFRI 4060', 'AFRI', 1),
	(20, 'AFRI 4900', 'AFRI', 1),
	(21, 'ASLA 1010', 'ASLA', 1),
	(22, 'ASLA 1020', 'ASLA', 1),
	(23, 'ASLA 2010', 'ASLA', 1),
	(24, 'ASLA 3010', 'ASLA', 1);
/*!40000 ALTER TABLE `lessons` ENABLE KEYS */;

-- Dumping structure for table tutorloo_teach.messages
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `tel` varchar(32) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `msg` text DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutorloo_teach.messages: ~0 rows (approximately)
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;

-- Dumping structure for table tutorloo_teach.mylessons
CREATE TABLE IF NOT EXISTS `mylessons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
  PRIMARY KEY (`id`),
  KEY `fkey_MyLessons_users` (`userId`),
  KEY `fkey_MyLessons_lessonsId` (`lessonId`),
  KEY `fkey_MyLessons_tutorUserId` (`tutorUserId`),
  CONSTRAINT `fkey_MyLessons_lessonsId` FOREIGN KEY (`lessonId`) REFERENCES `lessons` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fkey_MyLessons_tutorUserId` FOREIGN KEY (`tutorUserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fkey_MyLessons_users` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutorloo_teach.mylessons: ~0 rows (approximately)
/*!40000 ALTER TABLE `mylessons` DISABLE KEYS */;
/*!40000 ALTER TABLE `mylessons` ENABLE KEYS */;

-- Dumping structure for table tutorloo_teach.rates
CREATE TABLE IF NOT EXISTS `rates` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rate` int(11) NOT NULL,
  `tutor_userId` int(11) NOT NULL,
  `stu_userId` int(11) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `acceptStatus` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutorloo_teach.rates: ~0 rows (approximately)
/*!40000 ALTER TABLE `rates` DISABLE KEYS */;
/*!40000 ALTER TABLE `rates` ENABLE KEYS */;

-- Dumping structure for table tutorloo_teach.requests
CREATE TABLE IF NOT EXISTS `requests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `room` int(11) NOT NULL,
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
  PRIMARY KEY (`id`),
  KEY `fkey_requests_user_senderId` (`senderId`),
  KEY `fkey_requests_user_receiverId` (`receiverId`),
  CONSTRAINT `fkey_requests_user_receiverId` FOREIGN KEY (`receiverId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fkey_requests_user_senderId` FOREIGN KEY (`senderId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutorloo_teach.requests: ~0 rows (approximately)
/*!40000 ALTER TABLE `requests` DISABLE KEYS */;
/*!40000 ALTER TABLE `requests` ENABLE KEYS */;

-- Dumping structure for table tutorloo_teach.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutorloo_teach.roles: ~3 rows (approximately)
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
	(1, 'admin', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(2, 'tutor', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(3, 'student', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;

-- Dumping structure for table tutorloo_teach.sequelizemeta
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table tutorloo_teach.sequelizemeta: ~20 rows (approximately)
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` (`name`) VALUES
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
	('20211017082943-mylesson-add-timing-feilds.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;

-- Dumping structure for table tutorloo_teach.tutortimings
CREATE TABLE IF NOT EXISTS `tutortimings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timeStart` float DEFAULT NULL,
  `timeEnd` float DEFAULT NULL,
  `dayOfWeek` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fkey_tutor-timing_users` (`userId`),
  CONSTRAINT `fkey_tutor-timing_users` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutorloo_teach.tutortimings: ~0 rows (approximately)
/*!40000 ALTER TABLE `tutortimings` DISABLE KEYS */;
INSERT INTO `tutortimings` (`id`, `timeStart`, `timeEnd`, `dayOfWeek`, `userId`) VALUES
	(1, 2, 4, 2, 1),
	(2, 7, 9, 4, 1),
	(3, 14, 16, 2, 1),
	(4, 34, 36, 3, 1),
	(5, 42, 44, 2, 1);
/*!40000 ALTER TABLE `tutortimings` ENABLE KEYS */;

-- Dumping structure for table tutorloo_teach.universities
CREATE TABLE IF NOT EXISTS `universities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `emailPattern` varchar(150) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `isenable` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `gradePercent` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutorloo_teach.universities: ~0 rows (approximately)
/*!40000 ALTER TABLE `universities` DISABLE KEYS */;
/*!40000 ALTER TABLE `universities` ENABLE KEYS */;

-- Dumping structure for table tutorloo_teach.userlessons
CREATE TABLE IF NOT EXISTS `userlessons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lessonId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `acceptStatus` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fkey_userlesson_users` (`userId`),
  KEY `fkey_userlessons_lessons` (`lessonId`),
  CONSTRAINT `fkey_userlesson_users` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fkey_userlessons_lessons` FOREIGN KEY (`lessonId`) REFERENCES `lessons` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutorloo_teach.userlessons: ~0 rows (approximately)
/*!40000 ALTER TABLE `userlessons` DISABLE KEYS */;
INSERT INTO `userlessons` (`id`, `lessonId`, `userId`, `description`, `acceptStatus`, `createdAt`, `updatedAt`) VALUES
	(1, 1, 1, 'Trouble is, writing about yourself can feel awkward. You don’t want to come off as stuffy or egotistical, but you don’t want to sell yourself short either. As a result, many', 1, '2021-10-18 21:12:39', '2021-10-18 21:15:36'),
	(2, 2, 1, 'The good news is, we created a helpful personal branding guide, complete ,with tips, examples, and 40+ plug and play bio templates that you can use to put together an impressive profile. Simply round up a list of your skills and accomplishments and use ou', 1, '2021-10-18 21:12:39', '2021-10-18 21:15:38');
/*!40000 ALTER TABLE `userlessons` ENABLE KEYS */;

-- Dumping structure for table tutorloo_teach.userroles
CREATE TABLE IF NOT EXISTS `userroles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fkey_userroles_user` (`userId`),
  KEY `fkey_userroles_role` (`roleId`),
  CONSTRAINT `fkey_userroles_role` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fkey_userroles_user` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutorloo_teach.userroles: ~0 rows (approximately)
/*!40000 ALTER TABLE `userroles` DISABLE KEYS */;
INSERT INTO `userroles` (`id`, `userId`, `roleId`) VALUES
	(1, 1, 2),
	(2, 1, 1);
/*!40000 ALTER TABLE `userroles` ENABLE KEYS */;

-- Dumping structure for table tutorloo_teach.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tutorloo_teach.users: ~0 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `email`, `password`, `emailConfirmCode`, `emailConfirmed`, `resetPasswordCode`, `name`, `lastName`, `acceptStatus`, `headline`, `bioMore`, `fileId`, `createdAt`, `updatedAt`) VALUES
	(1, 'mohammad.roshanfekr@hotmail.com', '$2a$08$18YwurhBYyni8xnbX7DHq.bHBxsk3NBJhlf8hBcnZx0xNJYX9t8WK', '4pSddPYMNMxQfVKKFqPajWeCFRl69dJFAz4L7wri0jsWxVVlSTZXgHRWlywURKBjEQGb3engtVs1rarvGYUH7HDwIdtVrq0Iz6LupkvD9l9GhbnLM2b19IGwUkWnGlHT', 0, NULL, 'Mohammad', 'Roshanfekr', 1, 'Headline', 'Your professional bio is an important piece of personal branding real estate that can help you catch the interest of a recruiter, earn a speaking gig, land a guest blogging opportunity, gain admission to a program, or prompt other career wins.', 1, '2021-10-18 21:10:22', '2021-10-18 21:15:33'),
	(2, 't@yahoo.com', '$2a$08$18YwurhBYyni8xnbX7DHq.bHBxsk3NBJhlf8hBcnZx0xNJYX9t8WK', '4pSddPYMNMxQfVKKFqPajWeCFRl69dJFAz4L7wri0jsWxVVlSTZXgHRWlywURKBjEQGb3engtVs1rarvGYUH7HDwIdtVrq0Iz6LupkvD9l9GhbnLM2b19IGwUkWnGlHT', 0, NULL, 'Hassan', 'Hassani', 1, 'Headline', 'Your professional bio is an important piece of personal branding real estate that can help you catch the interest of a recruiter, earn a speaking gig, land a guest blogging opportunity, gain admission to a program, or prompt other career wins.', 1, '2021-10-18 21:10:22', '2021-10-18 21:15:52');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
