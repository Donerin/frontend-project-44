install: 
	npm ci

brain-games: 
	node bin/brain-games.js

install2: 
	touch don.md

clean: 
	rm don.md

publish: 
	npm publish --dry-run

lint: 
	npx eslint

brain-even: 
	node bin/brain-even.js