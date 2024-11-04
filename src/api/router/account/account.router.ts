import { Router } from "express";
import AccountController from "@controller/account/account.controller";

class AccountRouter {
    main(): Router {
        const router: Router = Router();

        const accountController: AccountController = new AccountController();

        router.patch("/account/login", accountController.login);
        router.post("/account",accountController.create);
        router.get("/account",accountController.infos);

        return router;
    }
}

export default AccountRouter;
