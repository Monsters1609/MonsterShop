-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th6 30, 2023 lúc 07:53 AM
-- Phiên bản máy phục vụ: 8.0.30
-- Phiên bản PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `monster shop`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `manager_account`
--

CREATE TABLE `manager_account` (
  `Id_Manager` int NOT NULL,
  `PhoneNumber` varchar(20) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `RoleName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Đang đổ dữ liệu cho bảng `manager_account`
--

INSERT INTO `manager_account` (`Id_Manager`, `PhoneNumber`, `Password`, `RoleName`) VALUES
(64, '0949896390', 'ducdat1609', 'Admin'),
(66, '0947892522', 'ducdat1609', 'Admin');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `manager_detail`
--

CREATE TABLE `manager_detail` (
  `Id_ManagerDetail` int NOT NULL,
  `PhoneNumber` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `FullName` varchar(255) NOT NULL,
  `DateOfBirth` date NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `Img_Manager` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Đang đổ dữ liệu cho bảng `manager_detail`
--

INSERT INTO `manager_detail` (`Id_ManagerDetail`, `PhoneNumber`, `FullName`, `DateOfBirth`, `Gender`, `Email`, `Address`, `Img_Manager`) VALUES
(63, '0947892522', 'Nguyen Thi Huong', '0011-11-11', 'Male', 'huong0212@gmail.com', 'Ha Noi', NULL),
(61, '0949896390', 'Nguyen Thi Huong', '0111-11-11', 'Male', 'ducdat169@gmail.com', 'Ha Noi ', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `manager_role`
--

CREATE TABLE `manager_role` (
  `Id_Role` int NOT NULL,
  `RoleName` varchar(255) NOT NULL,
  `Describe_Role` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `Code_Role` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Đang đổ dữ liệu cho bảng `manager_role`
--

INSERT INTO `manager_role` (`Id_Role`, `RoleName`, `Describe_Role`, `Code_Role`) VALUES
(1, 'Admin', 'Quản lý ', 1),
(2, 'Personnel', 'Nhân viên ', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_account`
--

CREATE TABLE `user_account` (
  `Id_User` int NOT NULL,
  `Password` int NOT NULL,
  `PhoneNumber` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_detail`
--

CREATE TABLE `user_detail` (
  `Id_UserDetail` int NOT NULL,
  `UserName` varchar(255) NOT NULL,
  `DateOfBirth` date NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `PhoneNumber` varchar(20) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `Img_User` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `manager_account`
--
ALTER TABLE `manager_account`
  ADD PRIMARY KEY (`Id_Manager`) USING BTREE,
  ADD UNIQUE KEY `PhoneNumber` (`PhoneNumber`) USING BTREE,
  ADD KEY `RoleName` (`RoleName`);

--
-- Chỉ mục cho bảng `manager_detail`
--
ALTER TABLE `manager_detail`
  ADD PRIMARY KEY (`PhoneNumber`),
  ADD UNIQUE KEY `ManagerDetail` (`Id_ManagerDetail`);

--
-- Chỉ mục cho bảng `manager_role`
--
ALTER TABLE `manager_role`
  ADD PRIMARY KEY (`RoleName`),
  ADD UNIQUE KEY `IdRole` (`Id_Role`);

--
-- Chỉ mục cho bảng `user_account`
--
ALTER TABLE `user_account`
  ADD PRIMARY KEY (`Id_User`),
  ADD KEY `PhoneNumber` (`PhoneNumber`);

--
-- Chỉ mục cho bảng `user_detail`
--
ALTER TABLE `user_detail`
  ADD PRIMARY KEY (`PhoneNumber`),
  ADD UNIQUE KEY `UserDetail` (`Id_UserDetail`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `manager_account`
--
ALTER TABLE `manager_account`
  MODIFY `Id_Manager` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT cho bảng `manager_detail`
--
ALTER TABLE `manager_detail`
  MODIFY `Id_ManagerDetail` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT cho bảng `manager_role`
--
ALTER TABLE `manager_role`
  MODIFY `Id_Role` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `user_account`
--
ALTER TABLE `user_account`
  MODIFY `Id_User` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `user_detail`
--
ALTER TABLE `user_detail`
  MODIFY `Id_UserDetail` int NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `manager_account`
--
ALTER TABLE `manager_account`
  ADD CONSTRAINT `manager_account_ibfk_1` FOREIGN KEY (`RoleName`) REFERENCES `manager_role` (`RoleName`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `manager_account_ibfk_2` FOREIGN KEY (`PhoneNumber`) REFERENCES `manager_detail` (`PhoneNumber`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Các ràng buộc cho bảng `user_account`
--
ALTER TABLE `user_account`
  ADD CONSTRAINT `user_account_ibfk_1` FOREIGN KEY (`PhoneNumber`) REFERENCES `user_detail` (`PhoneNumber`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
