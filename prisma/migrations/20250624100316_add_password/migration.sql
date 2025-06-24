/*
  Warnings:

  - You are about to drop the `Album` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Media` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Members` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AlbumToMedia` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Members" DROP CONSTRAINT "Members_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Members" DROP CONSTRAINT "Members_memberFunctionId_fkey";

-- DropForeignKey
ALTER TABLE "Members" DROP CONSTRAINT "Members_positionId_fkey";

-- DropForeignKey
ALTER TABLE "_AlbumToMedia" DROP CONSTRAINT "_AlbumToMedia_A_fkey";

-- DropForeignKey
ALTER TABLE "_AlbumToMedia" DROP CONSTRAINT "_AlbumToMedia_B_fkey";

-- DropTable
DROP TABLE "Album";

-- DropTable
DROP TABLE "Media";

-- DropTable
DROP TABLE "Members";

-- DropTable
DROP TABLE "_AlbumToMedia";

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "tel" TEXT,
    "mail" TEXT,
    "photo" TEXT,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT,
    "positionId" TEXT,
    "categoryId" TEXT,
    "memberFunctionId" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Users_positionId_idx" ON "Users"("positionId");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Player_position"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_memberFunctionId_fkey" FOREIGN KEY ("memberFunctionId") REFERENCES "MemberFunction"("id") ON DELETE SET NULL ON UPDATE CASCADE;
