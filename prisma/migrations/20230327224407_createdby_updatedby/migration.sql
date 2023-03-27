/*
  Warnings:

  - You are about to drop the column `userEmail` on the `Song` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_userEmail_fkey";

-- AlterTable
ALTER TABLE "Song" DROP COLUMN "userEmail";
ALTER TABLE "Song" ADD COLUMN     "createdByEmail" STRING NOT NULL DEFAULT 'system';
ALTER TABLE "Song" ADD COLUMN     "updatedByEmail" STRING DEFAULT 'system';

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_createdByEmail_fkey" FOREIGN KEY ("createdByEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_updatedByEmail_fkey" FOREIGN KEY ("updatedByEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
