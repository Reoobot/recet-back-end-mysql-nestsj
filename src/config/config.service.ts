import { TypeOrmModuleOptions } from '@nestjs/typeorm'; 

require('dotenv').config();

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(k => this.getValue(k, true));
    return this;
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'mysql',

      host: this.getValue('RECETTE_HOST'),
      port: parseInt(this.getValue('RECETTE_PORT')),
      username: this.getValue('RECETTE_USER'),
      password: this.getValue('RECETTE_PASSWORD'),
      database: this.getValue('RECETTE_DATABASE'),

      entities: ['dist/**/*.entity.js'],
      synchronize: false,
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'RECETTE_HOST',
  'RECETTE_PORT',
  'RECETTE_USER',
  'RECETTE_PASSWORD',
  'RECETTE_DATABASE',
]);

export { configService };