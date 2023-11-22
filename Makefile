init:
	@docker compose build --no-cache
	@docker compose up
	@docker cp front:/works/node_modules/ ./app/
up:
	@docker compose up
down:
	@docker compose down
exec:
	@docker compose exec memonium sh
cp:
	@docker cp front:/works/node_modules/ ./app/
format:
	@docker compose exec memonium yarn format
lint-fix:
	@docker compose exec memonium yarn lint:fix

