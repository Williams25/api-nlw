import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateConnections1619134300432 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'connections',
			columns: [
				{
					name: 'id',
					type: 'uuid',
					isPrimary: true
				},
				{
					name: 'admin_id',
					type: 'uuid',
					isNullable: true
				},
				{
					name: 'user_id',
					type: 'uuid'
				},
				{
					name: 'socket_id',
					type: 'uuid'
				},
				{
					name: 'created_at',
					type: 'timestamp',
					default: 'now()'
				},
				{
					name: 'updated_at',
					type: 'timestamp',
					default: 'now()'
				}
			],
			foreignKeys: [
				{
					name: 'fk_user_connections',
					referencedTableName: 'users',
					referencedColumnNames: ['id'],
					columnNames: ['user_id'],
					onUpdate: 'CASCADE',
					onDelete: 'CASCADE'
				}
			]
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('connections')
	}

}
