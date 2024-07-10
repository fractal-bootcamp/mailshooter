-- DropForeignKey
ALTER TABLE "Blast" DROP CONSTRAINT "Blast_authorId_fkey";

-- AlterTable
ALTER TABLE "Blast" ALTER COLUMN "authorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Blast" ADD CONSTRAINT "Blast_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "AdminUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
