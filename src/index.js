import express from 'express';
import errorHandler from './modules/core/errorHandler';
import logger from './modules/core/logger';
import parseResponse from './modules/core/parseResponse';
import cors from './modules/core/cors';
import routes from './modules/core/routes';
import dbConnect from './modules/core/db';
export const app = express();
const PORT = 5000;

//Подключаем БД
dbConnect();
//Создаем прослойку для запроса, для удобного отслеживания в консоли
logger(app);
//Парсим боди из запроса
parseResponse(app);
//Настройка корс(доступ к серверу)
cors(app);
//Роуты, развилка
routes(app);

//Вынесли ЭТУ логику в роутсы
// app.get('/', home);
// app.post('/info', getInfo);

//Если протокол не найден, то будем использовать общую форму обрабоки
errorHandler(app);

app.listen(PORT, () => {
  console.log(`Server has been started on ${PORT} ...`);
});
