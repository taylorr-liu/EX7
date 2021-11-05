const { AwsCdkTypeScriptApp } = require('projen');

const project = new AwsCdkTypeScriptApp({
    cdkVersion: '1.95.2',
    tsconfig: {
        compilerOptions: {
            noUnusedLocals: false,
            noUnusedParameters: false,
        }
    },
    tsconfigDev: {
        compilerOptions: {
            noUnusedLocals: false,
            noUnusedParameters: false,
        }
    },
    defaultReleaseBranch: 'main',
    jsiiFqn: "projen.AwsCdkTypeScriptApp",
    name: 'cloud',
    devDeps: [
        'esbuild',
        'aws-sdk',
        'softchef-utility',
        'path'
    ],
    cdkDependencies: [
        '@aws-cdk/aws-apigateway',
        '@aws-cdk/core',
        '@aws-cdk/aws-dynamodb',
        '@aws-cdk/aws-lambda-nodejs',
        '@aws-cdk/aws-iam'
    ]
    // ...
});

project.synth();