import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    // ...add more providers here
  ],

  callbacks: {
    /**
     * @param  {object} user     User object
     * @param  {object} account  Provider account
     * @param  {object} profile  Provider profile
     * @return {boolean}         Return `true` (or a modified JWT) to allow sign in
     *                           Return `false` to deny access
     */
    signIn: async (user, account, profile) => {
      let isAllowedToSignIn = false; // default to false

      if (profile.verificationRequest) {
        // check Bubble DB to make sure paying customer here
        let constraints = [
          {
            key: "memberemail",
            constraint_type: "equals",
            value: user.email,
          },
        ];
        constraints = JSON.stringify(constraints);
        constraints = encodeURIComponent(constraints);

        let url =
          "https://marketheart.allied-techs.com/api/1.1/obj/User?constraints=" +
          constraints;
        let response = await fetch(url);
        var myFetchedData = await response.json();

        if (myFetchedData.response.count > 0) {
          isAllowedToSignIn = true;
        }
      } else {
        isAllowedToSignIn = true;
      }

      if (isAllowedToSignIn) {
        console.log("allowed to sign in");
        return Promise.resolve(true);
      } else {
        console.log("not allowed to sign in");
        // Return false to display a default error message
        //return Promise.resolve(false)
        // You can also Reject this callback with an Error or with a URL:
        // return Promise.reject(new Error('error message')) // Redirect to error page

        let hostUrl = process.env.NEXTAUTH_URL;

        // run them through the Aweber sign up
        const res = await fetch(hostUrl + "/api/performance", {
          headers: {
            Authorization: "1234567890abcdef",
            "X-Secret-Key": "djewbdjnewdjknwejkdnkjwe",
          },
          method: "POST",
          body: JSON.stringify({ email: user.email }),
        });

        return Promise.reject(hostUrl + "/thank-you?submitted=" + user.email);
      }
    },
  },

  pages: {
    signIn: "/email-signin",
    //signOut: '/auth/signout',
    //error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: "/verify-request", // (used for check email message)
    //newUser: null // If set, new users will be directed here on first sign in
  },

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
};

export default (req, res) => {
  //console.log(res)
  NextAuth(req, res, options);
};
