import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_WVVwFnHZE",
    ClientId: "5s9arhgupgtm2e3qmb2gb46na0"
}

export default new CognitoUserPool(poolData);