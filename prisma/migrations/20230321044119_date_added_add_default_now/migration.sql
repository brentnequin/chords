/*
  Warnings:

  - Made the column `dateAdded` on table `Song` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Song" ALTER COLUMN "dateAdded" SET NOT NULL;
ALTER TABLE "Song" ALTER COLUMN "dateAdded" SET DEFAULT CURRENT_TIMESTAMP;
