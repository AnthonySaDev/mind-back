/*
  Warnings:

  - You are about to drop the `KanBan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `KanBan`;

-- CreateTable
CREATE TABLE `Kanban` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cronogramaId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Kanban_id_key`(`id`),
    UNIQUE INDEX `Kanban_cronogramaId_key`(`cronogramaId`),
    INDEX `Kanban_cronogramaId_idx`(`cronogramaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
