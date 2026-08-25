const { PrismaClient } = require('@prisma/client');

let prismaInstance;

function getPrismaClient() {
  if (!prismaInstance) {
    console.log('[Debug prisma] Creating PrismaClient instance...');
    prismaInstance = new PrismaClient({
      log:
        process.env.NODE_ENV === 'development'
          ? ['query', 'error', 'warn']
          : ['error'],
    });
  }
  return prismaInstance;
}

module.exports = new Proxy(
  {},
  {
    get(target, prop) {
      return getPrismaClient()[prop];
    },
  }
);