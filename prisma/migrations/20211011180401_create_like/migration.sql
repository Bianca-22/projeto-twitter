/*
  Warnings:

  - You are about to drop the column `title` on the `tweet` table. All the data in the column will be lost.
  - Added the required column `text` to the `Tweet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tweet` DROP COLUMN `title`,
    ADD COLUMN `text` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Like` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tweetId` INTEGER,
    `authorId` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_tweetId_fkey` FOREIGN KEY (`tweetId`) REFERENCES `Tweet`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`username`) ON DELETE SET NULL ON UPDATE CASCADE;
