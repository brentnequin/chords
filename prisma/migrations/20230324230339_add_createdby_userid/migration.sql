-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "userId" INT4 NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Add default system user
INSERT INTO "User" ("id", "email")
VALUES (0, 'system');