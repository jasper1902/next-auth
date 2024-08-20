import prisma from "@/lib/prisma";

export function getUserByEmail(email: string) {
  try {
    return prisma.user.findUnique({ where: { email } });
  } catch (error) {
    return null;
  }
}

export function getUserById(id: string | undefined) {
  try {
    if (id) {
      return prisma.user.findUnique({ where: { id } });
    }

    return null;
  } catch (error) {
    return null;
  }
}
