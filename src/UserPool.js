import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_VjLDa8AlF",
    ClientId: "4kqns3v03if3fdqftgi0v6cldu"
}

export default new CognitoUserPool(poolData);