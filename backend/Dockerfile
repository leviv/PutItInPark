FROM debian:stable-slim
RUN apt-get update && apt-get install \
  -y --no-install-recommends python3 python3-virtualenv

WORKDIR /backend

ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m virtualenv --python=/usr/bin/python3 $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

# Install dependencies:
COPY . .
RUN pip install -r requirements.txt

# Run the application:
#CMD ["python", "main.py"]
