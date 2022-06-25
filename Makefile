.SILENT: run debug

run:
	docker run -it --rm -v $(shell pwd):/home/dev -p 3000:3000 bensonirah/sda-env zsh

debug:
	node main.js