"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const telegraf_1 = require("telegraf");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// export const bot: Telegraf<MyContext> = new Telegraf(process.env.MANAGE_BOT_TOKEN, {
//     telegram: {
//         apiRoot: 'https://dark-office-telbot.liara.run/',
//         agent: new HttpsProxyAgent('https://t.me/proxy?server=irancell.irancell.irancell.irancell.irancell.iraell.irancell.irancell.irancell.irancell.irancell.irancell.irancell.irancell.irancell.irancell.irancell.irancell.irancell.irancell.irancell.irancell.irancell.irancell.irancell.irancell.irance.eletimes.space.&port=443&secret=7gAAAAAAAAAAAAAAAAAAAAB0Z2p1Lm9yZw%3D%3D')
//     }
// })
exports.bot = new telegraf_1.Telegraf(process.env.MANAGE_BOT_TOKEN);
