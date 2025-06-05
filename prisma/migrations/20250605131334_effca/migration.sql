/*
  Warnings:

  - You are about to drop the `_CategoryToMembers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToMembers" DROP CONSTRAINT "_CategoryToMembers_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToMembers" DROP CONSTRAINT "_CategoryToMembers_B_fkey";

-- AlterTable
ALTER TABLE "Members" ADD COLUMN     "categoryId" TEXT,
ADD COLUMN     "memberFunctionId" TEXT;

-- DropTable
DROP TABLE "_CategoryToMembers";

-- CreateTable
CREATE TABLE "MemberFunction" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "MemberFunction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Members" ADD CONSTRAINT "Members_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Members" ADD CONSTRAINT "Members_memberFunctionId_fkey" FOREIGN KEY ("memberFunctionId") REFERENCES "MemberFunction"("id") ON DELETE SET NULL ON UPDATE CASCADE;
