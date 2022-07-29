# Add the latest image of nodejs
FROM node:latest

# Select a work directory in the container
WORKDIR /usr/app/

# Copy all of this repository, into the work dir
COPY . .

# Install yarn
RUN npm i -g yarn

RUN yarn

# Define the commands to execute
ENTRYPOINT ["yarn", "build"]
# This command can be overrided
CMD ["yarn", "start"]
