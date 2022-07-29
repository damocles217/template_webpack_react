#!/bin/bash
command -v yarn
CHECK_YARN=$?
if (($CHECK_YARN!=0)); then
	npm run format
	npm run lint
	npm run test

	CHECK_TEST=$?
	if (($CHECK_TEST!=0)); then
		exit 1
	fi
else
	yarn format && yarn lint
	yarn test

	CHECK_TEST=$?
	if (($CHECK_TEST!=0)); then
		exit 1
	fi
fi

echo "Ready to commit"