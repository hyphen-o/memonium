build:
	@docker compose build --no-cache
up:
	@docker compose up
down:
	@docker compose down
exec:
	@docker compose exec memonium sh
cp:
	@docker cp front:/works/node_modules/ ./app/
