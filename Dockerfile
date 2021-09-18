# Imagem de Origem
FROM node:14-alpine
FROM python:3.8

# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
# Instalando dependências da aplicação e armazenando em cache.
COPY ./frontend .
COPY ./backend .
RUN yarn install

RUN python -m pip install pip==21.0.1
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
# Inicializa a aplicação

EXPOSE 3000

CMD ["yarn", "start"]