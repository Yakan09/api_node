# Imagen oficial de Node 22 (con soporte vigente), versión ligera
FROM node:22-slim
# Directorio de trabajo
WORKDIR /app
# Copiamos el proyecto
COPY . .
# Instalamos dependencias
RUN npm install
# Puerto de la API
EXPOSE 3000
# Arranque de la aplicación
CMD ["npm", "start"]