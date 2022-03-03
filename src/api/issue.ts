import { Api, Post, Validate } from "@midwayjs/hooks";
import { z } from "zod";

const Example = z.object({
  username: z.string().email("not email"),
  password: z.string(),
});

export const issue = Api(
  Post(),
  Validate(Example),
  async ({ username, password }: z.infer<typeof Example>) => {
    return "success";
  }
);
