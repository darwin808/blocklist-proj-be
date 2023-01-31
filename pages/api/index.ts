// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { PrismaClient } from "@prisma/client";

type Data = {
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const prisma = new PrismaClient();
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  const { method } = req;
  console.log(req.body, 4445555);
  switch (method) {
    case "GET":
      res.status(200).json({ data: "GET" });
      break;
    case "POST":
      await prisma.person.create({
        data: {
          lat: JSON.stringify(req.body.lat),
          long: JSON.stringify(req.body.long),
          time: JSON.stringify(new Date()),
        },
      });
      res.status(200).json({ data: req.body });
      break;
  }
}
