docker compose down
docker compose up -d
bun run build
sleep 5
bun prisma migrate dev
bun seed
