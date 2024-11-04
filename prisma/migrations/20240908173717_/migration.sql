-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `blocked` BOOLEAN NOT NULL DEFAULT true,
    `photo` VARCHAR(191) NOT NULL DEFAULT '',
    `tel` VARCHAR(191) NOT NULL DEFAULT '',
    `waitTime` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_id_key`(`id`),
    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `indicators` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` VARCHAR(191) NOT NULL,
    `invoicing` DOUBLE NOT NULL DEFAULT 0.00,
    `customersServed` DOUBLE NOT NULL DEFAULT 0.00,
    `averageTicket` DOUBLE NOT NULL DEFAULT 0.00,
    `averageCost` DOUBLE NOT NULL DEFAULT 0.00,
    `budgetedVsRealized` DOUBLE NOT NULL DEFAULT 0.00,
    `actionPlan` DOUBLE NOT NULL DEFAULT 0.00,
    `productivity` DOUBLE NOT NULL DEFAULT 0.00,
    `customerSatisfaction` DOUBLE NOT NULL DEFAULT 0.00,
    `timeline` DOUBLE NOT NULL DEFAULT 0.00,
    `nps` DOUBLE NOT NULL DEFAULT 0.00,
    `customerEngagement` DOUBLE NOT NULL DEFAULT 0.00,
    `employeeSatisfaction` DOUBLE NOT NULL DEFAULT 0.00,
    `employeeEngagement` DOUBLE NOT NULL DEFAULT 0.00,
    `userId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `indicators_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `canvas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NOT NULL DEFAULT '',
    `frameDescription` VARCHAR(191) NOT NULL DEFAULT '',
    `responsible` VARCHAR(191) NOT NULL DEFAULT '',
    `keyPartners` VARCHAR(191) NOT NULL DEFAULT '',
    `keyActivities` VARCHAR(191) NOT NULL DEFAULT '',
    `costStructure` VARCHAR(191) NOT NULL DEFAULT '',
    `valueOfeer` VARCHAR(191) NOT NULL DEFAULT '',
    `customerRelations` VARCHAR(191) NOT NULL DEFAULT '',
    `channels` VARCHAR(191) NOT NULL DEFAULT '',
    `sourcesOfIncone` VARCHAR(191) NOT NULL DEFAULT '',
    `customerSegments` VARCHAR(191) NOT NULL DEFAULT '',
    `keyFeatures` VARCHAR(191) NOT NULL DEFAULT '',
    `userId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `canvas_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `culturalCode` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `userId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `culturalCode_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `filesCulturalCode` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `size` VARCHAR(191) NOT NULL,
    `filename` VARCHAR(191) NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `filesCulturalCodeId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `filesCulturalCode_id_key`(`id`),
    INDEX `filesCulturalCode_filesCulturalCodeId_idx`(`filesCulturalCodeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `files` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `size` INTEGER NOT NULL DEFAULT -1,
    `filename` VARCHAR(191) NOT NULL DEFAULT '',
    `path` VARCHAR(191) NOT NULL DEFAULT '',
    `type` VARCHAR(191) NOT NULL DEFAULT '',
    `calendarId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `files_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cronograma` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Cronograma_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Calendar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` VARCHAR(191) NOT NULL DEFAULT '',
    `text` LONGTEXT NOT NULL,
    `hours` VARCHAR(191) NOT NULL DEFAULT '',
    `status` VARCHAR(191) NOT NULL DEFAULT '',
    `responsible` VARCHAR(191) NOT NULL DEFAULT '',
    `label` VARCHAR(191) NOT NULL DEFAULT '',
    `cronogramaId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Calendar_id_key`(`id`),
    INDEX `Calendar_cronogramaId_idx`(`cronogramaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `KanBan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cronogramaId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `KanBan_id_key`(`id`),
    UNIQUE INDEX `KanBan_cronogramaId_key`(`cronogramaId`),
    INDEX `KanBan_cronogramaId_idx`(`cronogramaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
