FROM python:3.8

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY . .
RUN python -m pip install pip==21.0.1
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# EXPOSE 8000

# CMD ["python", "manage.py", "runserver"]