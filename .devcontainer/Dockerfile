FROM node:lts

# Install dependencies required for Git and Curl (Bash is already included)
RUN apt-get update && \
    apt-get install -y \
    git curl unzip nano python3 \
    --no-install-recommends && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Switch to 'node' user for Bun installation
USER node
CMD ["tail", "-f", "/dev/null"]
