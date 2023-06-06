import { connectToDB } from "@utils/database";

export const POST = async (req: Request, res: Response) => {
  const { userId, prompt, tag } = await req.json();
};
try {
  await connectToDB();
  const newPrompt = new prompt({
    creator: userId,
    tag,
  });
  await newPrompt.save();

  return new Response(JSON.stringify(newPrompt), { status: 201 });
} catch (error) {}
