FROM node:lts

# Install dependencies required for Git and Curl (Bash is already included)
RUN apt-get update && \
    apt-get install -y \
    git curl unzip nano python3 python3-pip python3-venv \
    --no-install-recommends && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Switch to user 'node' for python
RUN mkdir /opt/venv && chown node:node /opt/venv
USER node
# Setup python virtual environment
ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

# Pause for devcontainer
CMD ["tail", "-f", "/dev/null"]
