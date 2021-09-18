FROM python:3.8

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

RUN python -m pip install pip==21.0.1
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .
