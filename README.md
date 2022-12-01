# Generate Your Own Polygon ID Claim Website in 5 minutes

by Steph [oceans404](https://twitter.com/0ceans404)

Tired of manually creating and sending Polygon ID claim links one by one? Here's a claim site I created for my Polygon ID [AboutMe schema](https://github.com/oceans404/node-polygon-id-platform-apis/blob/main/yourData.js#L7-L29) so that users can self-service claim. It's totally reusable code. All you have to do is modify the email, password, and schema id in the .env file, then deploy your personalized site to Vercel.

![generator-gif](https://user-images.githubusercontent.com/91382964/204944692-b21a4727-f055-46fb-af32-0106d07c4041.gif)

**Caveat**: Because your users are essentially issuing your claims to themselves, they are not truely VERIFIED credentials. For example, I don't actually have 4 pets, but I was able to claim that I have 4 because no one verified this. Use this repo to spin up Issuer playgrounds for your Polygon ID apps, but understand that a real-world verifier probably would not trust a self-service issuer that works without some type of checking logic before allowing a user to claim.

## Getting started

✰ Star and fork this repo, then **git clone your fork of the repo**

```bash
https://github.com/{YourGithubUsername}/generate-frontend-polygon-id-issuer.git
cd generate-frontend-polygon-id-issuer
npm i 
cp .env.example .env;
```

Open the newly created `.env` file and replace the values with your Polygon ID email, password, and schema ID. If you haven't created a schema yet, check out ["Create a schema"](https://github.com/oceans404/node-polygon-id-platform-apis/blob/main/README.md#create-a-schema) in my node-polygon-id-platform-apis repo. You need a schema so you have a schemaID for your frontend to use.

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


