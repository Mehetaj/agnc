import { NextRequest, NextResponse } from "next/server";
interface Params {
  params: {
    blogId: string;
  };
}

export const GET = async (req: NextRequest, params: Params) => {
  console.log(params);
  return NextResponse.json({ message: "testing backend dynamic route" });
};
