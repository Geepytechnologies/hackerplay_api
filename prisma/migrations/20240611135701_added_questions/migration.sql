/*
  Warnings:

  - You are about to drop the column `question` on the `questions` table. All the data in the column will be lost.
  - Added the required column `description` to the `Questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `difficulty` to the `Questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Questions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `attempts` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `questions` DROP COLUMN `question`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `difficulty` ENUM('Easy', 'Medium', 'Hard') NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `Examples` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `questionId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Constraints` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `questionId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Examples` ADD CONSTRAINT `Examples_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `Questions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Constraints` ADD CONSTRAINT `Constraints_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `Questions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
