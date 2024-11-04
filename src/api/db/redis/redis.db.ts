import Redis from "ioredis";



class RedisClient {
    private static instance: Redis;

    private constructor() {}

    public static getInstance(): Redis {
        if (!RedisClient.instance) {
            RedisClient.instance = new Redis({
              host: '191.252.214.127', //
              port: 6379,    
              password: "123"
            });

            RedisClient.instance.on("connecting", () => {
                console.log("connecting")
            })

            RedisClient.instance.on("connect", () => {
                console.log("conectado")
            })
        }

        return RedisClient.instance;
    }
}

export default RedisClient;
