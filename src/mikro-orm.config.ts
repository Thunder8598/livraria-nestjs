import {MikroOrmModuleOptions as Options} from '@mikro-orm/nestjs';
import {SqlHighlighter} from '@mikro-orm/sql-highlighter';
import {TsMorphMetadataProvider} from '@mikro-orm/reflection';
import {LoadStrategy} from '@mikro-orm/core';

const config: Options = {
    entities: ['dist/entities'],
    entitiesTs: ['src/entities'],
    dbName: 'livraria',
    type: 'mysql',
    autoLoadEntities: true,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    debug: true,
    loadStrategy: LoadStrategy.JOINED,
    highlighter: new SqlHighlighter(),
    metadataProvider: TsMorphMetadataProvider,
    registerRequestContext: false,
    migrations: {
        path: 'dist/migrations',
        pathTs: 'src/migrations',
    },
};

export default config;