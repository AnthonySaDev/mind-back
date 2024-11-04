import { Pool } from 'pg';

class PostgresClient {
    private static instance: Pool;

    private constructor() {}

    public static getInstance(): Pool {
        if (!PostgresClient.instance) {
            PostgresClient.instance = new Pool({
                host: 'localhost',        
                port: 5432,              
                user: 'admin',            
                password: 'admin',       
                database: 'mid'           
            });

            PostgresClient.instance.on('connect', () => {
                console.log('Conectado ao PostgreSQL');
            });

            PostgresClient.instance.on('error', (err) => {
                console.error('Erro na conexão com PostgreSQL:', err);
            });
        }

        return PostgresClient.instance;
    }

    public static async query(queryText: string, params?: any[]) {
        const client = PostgresClient.getInstance();
        try {
            const res = await client.query(queryText, params);
            return res.rows;
        } catch (err) {
            console.error('Erro ao executar query:', err);
            throw err;
        }
    }
}

export default PostgresClient;
