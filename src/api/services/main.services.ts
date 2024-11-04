
import RedisClient from "@db/redis/redis.db";
import { Redis } from "ioredis";


class MainServices {
    public redis: Redis;

    constructor() {
        this.redis = RedisClient.getInstance();
    }

    log(data: any) {
        if(process.env.SHOW_LOGS) {
            console.log("\n\nSERVICES");
            console.log(data);
            console.log("SERVICES\n\n");

        }
    }
}


export default MainServices;
