CREATE DATABASE roomly;

USE roomly;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
--
-- ---

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(20) NULL DEFAULT NULL,
  `profPic` VARCHAR(255) NULL DEFAULT NULL,
  `city` VARCHAR(25) NULL DEFAULT NULL,
  `state` VARCHAR(2) NULL DEFAULT NULL,
  `age` INTEGER(1) NULL DEFAULT NULL,
  `landLord` BINARY NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Houses'
--
-- ---

DROP TABLE IF EXISTS `Houses`;

CREATE TABLE `Houses` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(140) NULL DEFAULT NULL,
  `addressOne` VARCHAR(255) NULL DEFAULT NULL,
  `addressTwo` VARCHAR(255) NULL DEFAULT NULL,
  `city` VARCHAR(25) NULL DEFAULT NULL,
  `state` VARCHAR(2) NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `price` DECIMAL NULL DEFAULT NULL,
  `openRooms` INTEGER(3) NULL DEFAULT NULL,
  `capacity` INTEGER(3) NULL DEFAULT NULL,
  `smoking` BINARY NULL DEFAULT NULL,
  `pets` BINARY NULL DEFAULT NULL,
  `userId` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Wants'
--
-- ---

DROP TABLE IF EXISTS `Wants`;

CREATE TABLE `Wants` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `city` VARCHAR(25) NULL DEFAULT NULL,
  `state` VARCHAR(3) NULL DEFAULT NULL,
  `smoking` BINARY NULL DEFAULT NULL,
  `pets` BINARY NULL DEFAULT NULL,
  `minPrice` DECIMAL NULL DEFAULT NULL,
  `maxPrice` DECIMAL NULL DEFAULT NULL,
  `userId` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Friends'
--
-- ---

DROP TABLE IF EXISTS `Friends`;

CREATE TABLE `Friends` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `userId` INTEGER NULL DEFAULT NULL,
  `friendName` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Likes'
--
-- ---

DROP TABLE IF EXISTS `Likes`;

CREATE TABLE `Likes` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `userId` INTEGER NULL DEFAULT NULL,
  `like` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Pics'
--
-- ---

DROP TABLE IF EXISTS `Pics`;

CREATE TABLE `Pics` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `houseId` INTEGER NULL DEFAULT NULL,
  `housePic` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Houses` ADD FOREIGN KEY (userId) REFERENCES `Users` (`id`);
ALTER TABLE `Wants` ADD FOREIGN KEY (userId) REFERENCES `Users` (`id`);
ALTER TABLE `Friends` ADD FOREIGN KEY (userId) REFERENCES `Users` (`id`);
ALTER TABLE `Likes` ADD FOREIGN KEY (userId) REFERENCES `Users` (`id`);
ALTER TABLE `Pics` ADD FOREIGN KEY (houseId) REFERENCES `Houses` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Houses` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Wants` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Friends` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Likes` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Pics` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`userName`,`profPic`,`city`,`state`,`age`,`landLord`,`description`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `Houses` (`id`,`title`,`addressOne`,`addressTwo`,`city`,`state`,`description`,`price`,`openRooms`,`capacity`,`smoking`,`pets`,`userId`) VALUES
-- ('','','','','','','','','','','','','');
-- INSERT INTO `Wants` (`id`,`city`,`state`,`smoking`,`pets`,`minPrice`,`maxPrice`,`userId`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `Friends` (`id`,`userId`,`friendName`) VALUES
-- ('','','');
-- INSERT INTO `Likes` (`id`,`userId`,`like`) VALUES
-- ('','','');
-- INSERT INTO `Pics` (`id`,`houseId`,`housePic`) VALUES
-- ('','','');
