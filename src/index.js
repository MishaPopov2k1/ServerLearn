import express from 'express';
import home from './modules/home/home';
import errorHandler from './modules/core/errorHandler';
import logger from './modules/core/logger';
import getInfo from './modules/info/getInfo';
import parseResponse from './modules/core/parseResponse';
import cors from './modules/core/cors';
export const app = express();
const PORT = 5100;

//Создаем прослойку для запроса, для удобного отслеживания
logger(app);
//Парсим боди из запроса
parseResponse(app);
//Настройка корс(доступ к серверу)
cors(app);

app.get('/', home);
app.post('/info', getInfo);

//Если протокол не найден, то будет использавть общую форму
errorHandler(app);

app.listen(PORT, () => {
  console.log(`Server has been started on ${PORT} ...`);
});
