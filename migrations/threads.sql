-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 23, 2021 at 06:11 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `social_map`
--

-- --------------------------------------------------------

--
-- Table structure for table `threads`
--

CREATE TABLE `threads` (
  `id` varchar(64) NOT NULL,
  `caption` text NOT NULL,
  `picture_url` text NOT NULL,
  `location` text DEFAULT NULL,
  `latitude` text DEFAULT NULL,
  `longitude` text DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `threads`
--

INSERT INTO `threads` (`id`, `caption`, `picture_url`, `location`, `latitude`, `longitude`, `created_at`, `updated_at`) VALUES
('thread-abbqS2Ia87pUv26k', 'Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of services that are', 'http://res.cloudinary.com/edwintantawi/image/upload/v1637687368/pictures/e0mgmvk4p2j39pdhpexq.jpg', 'Tanjung Morawa, Indonesia', '3.5159743', '98.7954551', '2021-11-24 00:09:29', '2021-11-24 00:09:29'),
('thread-Nz6R7gBNNm7iejsa', 'learn from book is more powerfull then other media we can use for get information, try to use book as your window to knowladge. its be powerfull', 'http://res.cloudinary.com/edwintantawi/image/upload/v1637687254/pictures/cgjiopcjptffg4yhj5is.jpg', 'Medan Barat, Indonesia', '3.588096', '98.680832', '2021-11-24 00:07:35', '2021-11-24 00:07:35'),
('thread-LdYk9q4Riaqv0wp4', 'Spongebob dan kawan - kawan ', 'http://res.cloudinary.com/edwintantawi/image/upload/v1637722688/pictures/idohvgtykjt94dymrgan.jpg', 'Medan Sunggal, Indonesia', '3.5842162271617712', '98.64731000361478', '2021-11-24 09:58:09', '2021-11-24 09:58:09'),
('thread-_dzvvN4bQSG0bUPF', 'Technolog has over 30 years experience in the design and manufacture of battery powered data loggers, electronic pressure controllers for water & gas distribution. Start search. Upcoming Events', 'http://res.cloudinary.com/edwintantawi/image/upload/v1637687440/pictures/vbera66hqniyu3cvoqgr.jpg', NULL, NULL, NULL, '2021-11-24 00:10:41', '2021-11-24 00:10:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `threads`
--
ALTER TABLE `threads`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
