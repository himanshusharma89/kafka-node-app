# Use Node.js LTS version
FROM node:22

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the application code
COPY . .

# Start the consumer
CMD ["npm", "start"]