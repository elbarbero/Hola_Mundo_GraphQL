"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const query = {
    Query: {
        hola() {
            return 'Hola Mundo!';
        },
        holaConNombre(__, { nombre }) {
            return `Hola mundo ${nombre}`;
        },
        holaAlCursoGraphQL() {
            return 'Hola Mundo en el curso de GraphQL';
        }
    }
};
exports.default = query;
