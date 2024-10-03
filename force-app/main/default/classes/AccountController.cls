public with sharing class AccountController {
    public static List<Account>getAllActiveAccount() {
        return [Select Id, Name From Account];

    }
}