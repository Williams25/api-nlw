import { IsNull, MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateSettings1618940843796 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'settings',
			columns: [
				{
					name: 'id',
					type: 'uuid',
					isPrimary: true
				},
				{
					name: 'userName',
					type: 'varchar',
				},
				{
					name: 'chat',
					type: 'boolean',
					default: true
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
			]
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('settings')
	}
}