import { rest } from "msw";

const baseURL = "https://hbc-api-pj-9ce30abdc101.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({        
          pk: 5,
          username: "leila",
          email: "",
          first_name: "",
          last_name: "",
          profile_id: 5,
          profile_image: "https://res.cloudinary.com/dqoykema9/image/upload/v1/media/../default_profile_senmey"
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];