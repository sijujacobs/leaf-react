import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_5iAssXseg",
    ClientId: "77galq9pueio8mp98en2unl2b9"
}

export default new CognitoUserPool(poolData);

// https://leafproject.auth.us-east-1.amazoncognito.com