/*
  Warnings:

  - You are about to drop the column `published` on the `tweet` table. All the data in the column will be lost.
  - You are about to alter the column `title` on the `tweet` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `tweet` DROP COLUMN `published`,
    MODIFY `title` VARCHAR(191) NOT NULL;
