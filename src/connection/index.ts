import { Connection, createConnection, getConnectionOptions } from 'typeorm'

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions()

  return createConnection(
    Object.assign(defaultOptions, process.env.NODE_ENV === 'test' ? {
      type: 'sqlite',
      database: './src/__tests__/database.test.sqlite',
    }
      : defaultOptions.database))
}