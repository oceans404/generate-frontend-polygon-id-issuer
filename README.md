# Generate Your Own Polygon ID Claim Website in 5 minutes

[Self-service claim issuer template](https://generate-frontend-polygon-id-issuer.vercel.app/) by Steph [oceans404](https://twitter.com/0ceans404)

Tired of manually creating and sending Polygon ID claim links one by one? Here's a claim site I created for my Polygon ID [AboutMe schema](https://github.com/oceans404/node-polygon-id-platform-apis/blob/main/yourData.js#L7-L29) so that users can self-service claim. It's totally reusable code. All you have to do is modify the email, password, and schema id in the .env file, then deploy your personalized site to Vercel.
![site](https://user-images.githubusercontent.com/91382964/205103971-e4ef3bf7-78ce-4a7e-a953-f50a8aebba4b.gif)


![204710496-3721992a-c3f2-45da-bdb3-fc35c9e99e49](https://user-images.githubusercontent.com/91382964/205103704-534ea87f-353a-4e24-b6ed-bea004e6c97a.png)

**Caveat**: Because your users are essentially issuing your claims to themselves, they are not truely VERIFIED credentials. For example, I don't actually have 4 pets, but I was able to claim that I have 4 because no one verified this. Use this repo to spin up Issuer playgrounds for your Polygon ID apps, but understand that a real-world verifier probably would not trust a self-service issuer that works without some type of checking logic before allowing a user to claim.

## Getting started

### Pre-reqs

- ✅ Install Node and npm
- ✅ [Sign up for a Polygon ID account](https://platform-test.polygonid.com/sign-up) and create an Issuer (takes about 2 minutes total)
- ✅ Read the [Triangle of Trust](https://wiki.polygon.technology/docs/polygonid/overview/#core-concepts-of-polygon-id-claim-identity-holder-issuer-and-verifier-triangle-of-trust) to understand the relationship between an Issuer, Holder, and Verifier. This repo generates an issuer (website) so a holder (user) can claim identity-based information. 

✰ Star and fork this repo, then **git clone your fork of the repo**

```bash
https://github.com/{YourGithubUsername}/generate-frontend-polygon-id-issuer.git
cd generate-frontend-polygon-id-issuer
npm i 
cp .env.example .env;
```

Open the newly created `.env` file and replace the values with your Polygon ID email, password, and schema ID. 

```bash
VITE_POLYGON_ID_EMAIL="yourEmail+test0@gmail.com"
VITE_POLYGON_ID_PASSWORD="Your!0Very!1Secure2.Password!"
VITE_POLYGON_ID_SCHEMA_ID="77e48fa2-37e6-4818-b767-71588f6c0b73"
```

### Schema ID

If you haven't created a schema yet, check out ["Create a schema"](https://github.com/oceans404/node-polygon-id-platform-apis/blob/main/README.md#create-a-schema) in my node-polygon-id-platform-apis repo. This should only take a minute and you need a schema so you have a schemaID for your frontend to use to fetch the schema and display correct form fields for each attribute.

If you already created a Schema, you can find out a schema's id on the ["Created Schemas" page](https://platform-test.polygonid.com/claiming/created-schemas) of Polygon ID Platform by clicking the schema and grabbing the id from the schemaID parameter in the url.

![Find a Schema ID-high](https://user-images.githubusercontent.com/91382964/205096690-8edfa886-644c-4a65-9b85-ad6c9e61eaab.gif)

## Run your site locally

```bash
npm run dev
````

(Optional) Add and commit any visual changes you want to make.

## Deploy your site with Vercel

[Vercel](https://vercel.com/) makes it super quick and easy to deploy an app. Seriously. They didn't even pay me to say that. Go to the Vercel dashboard

1. Click "Add New..." -> Project
2. Click "Continue with Github"
3. Import this project (generate-frontend-polygon-id-issuer)
4. Configure Environment Variables to match your .env file
5. Click "Deploy" and the result is your very own Issuer website

<img width="1486" alt="Screen Shot 2022-11-30 at 3 12 32 PM" src="https://user-images.githubusercontent.com/91382964/204930971-0b464680-7363-43c8-8932-12613553e5c6.png">


