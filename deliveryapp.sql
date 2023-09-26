-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 25, 2023 at 03:13 PM
-- Server version: 8.0.30
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `deliveryapp`
--
CREATE DATABASE IF NOT EXISTS `deliveryapp`;
USE `deliveryapp`;
-- --------------------------------------------------------

--
-- Table structure for table `Orders`
--

CREATE TABLE `Orders` (
  `id` int NOT NULL,
  `name` text NOT NULL,
  `phone` text NOT NULL,
  `address` text NOT NULL,
  `orderProducts` text NOT NULL,
  `totalPrice` double NOT NULL,
  `paymentMethod` text NOT NULL,
  `deliveryMethod` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Orders`
--

INSERT INTO `Orders` (`id`, `name`, `phone`, `address`, `orderProducts`, `totalPrice`, `paymentMethod`, `deliveryMethod`, `date`) VALUES
(139, 'Nana', '000000000000', '111111', 'id:7-quantity:4', 160, 'Super fast', 'Cash', '1695633618136'),
(140, 'ddd', '111111111111', 'a', 'id:7-quantity:4', 160, 'Super fast', 'Card', '1695633976553'),
(141, 'ddd', '111111111111', 'a', 'id:7-quantity:4', 160, 'Super fast', 'Card', '1695633977171'),
(142, 'ddd', '111111111111', 'a', 'id:7-quantity:4', 160, 'Super fast', 'Card', '1695634112737');

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `id` int NOT NULL,
  `shop_id` int NOT NULL,
  `name` text NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `img` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`id`, `shop_id`, `name`, `price`, `img`, `description`) VALUES
(1, 5, 'Крильця', '200', 'https://www.kfc-ukraine.com/admin/files/medium/medium_4096.png', '8шт'),
(2, 2, 'Капуста', '20', 'https://vip.shuvar.com/media/catalog/product/cache/628b1a33a4779cd89563027f2a2c1a58/k/a/kapusta-belokachannaya.jpg', 'кг'),
(3, 1, 'Капуста', '20', 'https://vip.shuvar.com/media/catalog/product/cache/628b1a33a4779cd89563027f2a2c1a58/k/a/kapusta-belokachannaya.jpg', 'кг'),
(4, 3, 'Капуста', '22', 'https://vip.shuvar.com/media/catalog/product/cache/628b1a33a4779cd89563027f2a2c1a58/k/a/kapusta-belokachannaya.jpg\r\n', 'кг'),
(5, 6, 'Капуста', '22', 'https://vip.shuvar.com/media/catalog/product/cache/628b1a33a4779cd89563027f2a2c1a58/k/a/kapusta-belokachannaya.jpg', 'кг'),
(6, 6, 'Морква', '40', 'https://delikates.ua/images/product/morkova-moloda.jpg', 'кг'),
(7, 3, 'Морква', '40', 'https://delikates.ua/images/product/morkova-moloda.jpg', 'кг'),
(8, 2, 'Морква', '40', 'https://delikates.ua/images/product/morkova-moloda.jpg', 'кг'),
(9, 1, 'Морква', '40', 'https://delikates.ua/images/product/morkova-moloda.jpg', 'кг');

-- --------------------------------------------------------

--
-- Table structure for table `Shops`
--

CREATE TABLE `Shops` (
  `id` int NOT NULL,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `address` text NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Shops`
--

INSERT INTO `Shops` (`id`, `name`, `address`, `img`) VALUES
(1, 'Silpo', '', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Silpo_outline_logo.svg/2560px-Silpo_outline_logo.svg.png'),
(2, 'Fora', '', 'https://fora.ua/images/logo.png'),
(3, 'Novus', '', 'https://upload.wikimedia.org/wikipedia/uk/thumb/f/ff/Novus_Ukraina_logo.svg/2560px-Novus_Ukraina_logo.svg.png\r\n'),
(4, 'McDonald\'s', '', 'https://logos-world.net/wp-content/uploads/2020/04/McDonalds-Logo.png'),
(5, 'KFS', '', 'https://www.creativosonline.org/wp-content/uploads/2022/07/KFC-logo.png'),
(6, 'Ashan', '', 'https://upload.wikimedia.org/wikipedia/ru/7/78/Auchan-logo.svg'),
(7, 'METRO', '', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Logo_METRO.svg/2560px-Logo_METRO.svg.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Shops`
--
ALTER TABLE `Shops`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Orders`
--
ALTER TABLE `Orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;

--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `Shops`
--
ALTER TABLE `Shops`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
