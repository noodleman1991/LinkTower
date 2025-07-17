#!/bin/bash

# Load environment variables
source .env

# Configuration from environment variables
HOST_NAME=${DEPLOY_HOST_NAME:-"your-default-host.com"}
USER_NAME=${DEPLOY_USER_NAME:-"defaultuser"}
PORT=${DEPLOY_PORT:-"22"}
SITE_PATH=${DEPLOY_SITE_PATH:-"~/public_html"}
BUILD_PATH=${DEPLOY_BUILD_PATH:-"./dist/"}

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting site deployment...${NC}"

# Validate build directory exists
if [ ! -d "$BUILD_PATH" ]; then
    echo -e "${RED}Error: Build directory '$BUILD_PATH' does not exist${NC}"
    echo "Make sure you've run your Astro build first"
    exit 1
fi

# Check if build directory has content
if [ -z "$(ls -A "$BUILD_PATH")" ]; then
    echo -e "${RED}Error: Build directory '$BUILD_PATH' is empty${NC}"
    exit 1
fi

echo -e "${YELLOW}Syncing '$BUILD_PATH' to '$USER_NAME@$HOST_NAME:$SITE_PATH'${NC}"

# Build rsync command
RSYNC_CMD="rsync -avz --delete-after"

# Add SSH port if not default
if [ "$PORT" != "22" ]; then
    RSYNC_CMD="$RSYNC_CMD -e 'ssh -p $PORT'"
fi

# Add source and destination
RSYNC_CMD="$RSYNC_CMD '$BUILD_PATH' '$USER_NAME@$HOST_NAME:$SITE_PATH'"

echo -e "${YELLOW}Running: $RSYNC_CMD${NC}"

# Execute rsync
if eval "$RSYNC_CMD"; then
    echo -e "${GREEN}✓ Deployment successful!${NC}"
    echo -e "${GREEN}Site updated at: $HOST_NAME${NC}"
else
    echo -e "${RED}✗ Deployment failed${NC}"
    exit 1
fi