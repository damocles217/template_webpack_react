#!/bin/bash

echo "Running post commit"

BRANCH=$(git branch --show-current)

echo "Pushing branch "$BRANCH" to origin"
git push -u origin $BRANCH