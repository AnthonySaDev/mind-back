/*
  Warnings:

  - Added the required column `label` to the `Kanban` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Kanban` ADD COLUMN `label` VARCHAR(191) NOT NULL;
