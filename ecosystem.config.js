module.exports = {
  apps: [
    {
      name: 'moshka',
      script: 'node_modules/.bin/next',
      args: 'start',
      cwd: '/var/www/www-root/data/www/moshka.ru',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        NODE_TLS_REJECT_UNAUTHORIZED: 0
      },
    },
  ],
};
