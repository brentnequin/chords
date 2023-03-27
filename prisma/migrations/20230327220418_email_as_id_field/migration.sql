/*
  Warnings:

  - You are about to drop the column `userId` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_userId_fkey";

-- AlterTable
ALTER TABLE "Song" DROP COLUMN "userId";
ALTER TABLE "Song" ADD COLUMN     "userEmail" STRING NOT NULL DEFAULT 'system';

-- RedefineTables
CREATE TABLE "_prisma_new_User" (
    "email" STRING NOT NULL,
    "firstName" STRING,
    "lastName" STRING,

    CONSTRAINT "User_pkey" PRIMARY KEY ("email")
);
DROP INDEX "User_email_key";
INSERT INTO "_prisma_new_User" ("email","firstName","lastName") SELECT "email","firstName","lastName" FROM "User";
DROP TABLE "User" CASCADE;
ALTER TABLE "_prisma_new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
