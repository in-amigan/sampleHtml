-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.5.24-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping database structure for mzds
CREATE DATABASE IF NOT EXISTS `mzds` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `mzds`;


-- Dumping structure for table mzds.contact_messages
CREATE TABLE IF NOT EXISTS `contact_messages` (
  `message_id` int(11) NOT NULL AUTO_INCREMENT,
  `contact_name` varchar(500) NOT NULL,
  `contact_email` varchar(500) NOT NULL,
  `contact_phone` varchar(500) NOT NULL,
  `contact_message` varchar(500) NOT NULL,
  PRIMARY KEY (`message_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table mzds.contact_messages: ~4 rows (approximately)
/*!40000 ALTER TABLE `contact_messages` DISABLE KEYS */;
INSERT INTO `contact_messages` (`message_id`, `contact_name`, `contact_email`, `contact_phone`, `contact_message`) VALUES
	(1, '1', '2', '3', '4');
INSERT INTO `contact_messages` (`message_id`, `contact_name`, `contact_email`, `contact_phone`, `contact_message`) VALUES
	(2, '5', '6', '7', '8');
INSERT INTO `contact_messages` (`message_id`, `contact_name`, `contact_email`, `contact_phone`, `contact_message`) VALUES
	(3, 'abb', 'abb@a.com', 'abb', 'abb');
INSERT INTO `contact_messages` (`message_id`, `contact_name`, `contact_email`, `contact_phone`, `contact_message`) VALUES
	(4, 'asdf213', '', '', '123');
/*!40000 ALTER TABLE `contact_messages` ENABLE KEYS */;


-- Dumping structure for table mzds.daily_rates
CREATE TABLE IF NOT EXISTS `daily_rates` (
  `rate_id` int(10) NOT NULL,
  `cur_name` varchar(50) NOT NULL,
  `cur_type` varchar(500) NOT NULL,
  `sell_price` varchar(50) NOT NULL,
  `purchase_price` varchar(50) NOT NULL,
  PRIMARY KEY (`rate_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table mzds.daily_rates: ~3 rows (approximately)
/*!40000 ALTER TABLE `daily_rates` DISABLE KEYS */;
INSERT INTO `daily_rates` (`rate_id`, `cur_name`, `cur_type`, `sell_price`, `purchase_price`) VALUES
	(1, 'perfect money', 'http://8-themes.com/wp-content/uploads/2016/04/logo-perfect-money.png', '1234', '1234');
INSERT INTO `daily_rates` (`rate_id`, `cur_name`, `cur_type`, `sell_price`, `purchase_price`) VALUES
	(2, 'Web Money', 'http://webmoney-wallet.ru/images/stories/logo.jpg', '104', '110');
INSERT INTO `daily_rates` (`rate_id`, `cur_name`, `cur_type`, `sell_price`, `purchase_price`) VALUES
	(3, 'Bitcoin', 'http://www.canbike.org/public/images/030114/Bitcoin_Logo_Horizontal_Dark-4800px.png', '100', '115');
/*!40000 ALTER TABLE `daily_rates` ENABLE KEYS */;


-- Dumping structure for table mzds.feedback
CREATE TABLE IF NOT EXISTS `feedback` (
  `feed_id` int(11) NOT NULL AUTO_INCREMENT,
  `feed_name` varchar(500) NOT NULL,
  `feedback` varchar(500) NOT NULL,
  `approved` int(2) NOT NULL DEFAULT '2',
  PRIMARY KEY (`feed_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- Dumping data for table mzds.feedback: ~4 rows (approximately)
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
INSERT INTO `feedback` (`feed_id`, `feed_name`, `feedback`, `approved`) VALUES
	(5, 'asdf456', 'asdf555', 1);
INSERT INTO `feedback` (`feed_id`, `feed_name`, `feedback`, `approved`) VALUES
	(6, 'asdfasdf', 'asdf', 2);
INSERT INTO `feedback` (`feed_id`, `feed_name`, `feedback`, `approved`) VALUES
	(7, '123', '123', 1);
INSERT INTO `feedback` (`feed_id`, `feed_name`, `feedback`, `approved`) VALUES
	(8, '333444', '333444', 1);
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;


-- Dumping structure for table mzds.users
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_full_name` varchar(500) DEFAULT NULL,
  `user_email` varchar(500) DEFAULT NULL,
  `user_password` varchar(500) DEFAULT NULL,
  `user_phone` varchar(500) DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

-- Dumping data for table mzds.users: ~2 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`user_id`, `user_full_name`, `user_email`, `user_password`, `user_phone`, `created_on`) VALUES
	(20, '111', '111@111.com', '111', '111', '2016-09-04 00:20:59');
INSERT INTO `users` (`user_id`, `user_full_name`, `user_email`, `user_password`, `user_phone`, `created_on`) VALUES
	(21, '', '', '', '', '2016-09-12 13:32:18');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
